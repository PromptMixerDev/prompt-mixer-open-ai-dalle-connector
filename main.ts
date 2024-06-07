import OpenAI from 'openai';
import { config } from './config.js';
import { ImageGenerateParams } from 'openai/resources/index.js';

const API_KEY = 'API_KEY';

interface ConnectorResponse {
  Completions: { Content: string | ErrorCompletion; TokenUsage: undefined }[];
  ModelType: string;
}

interface ErrorCompletion {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error: string;
  model: string;
  usage: undefined;
}

const mapToResponse = (
  outputs: Array<string[] | ErrorCompletion>,
  model: string,
): ConnectorResponse => {
  return {
    Completions: outputs.map((output) => {
      if (Array.isArray(output)) {
        return {
          Content: output.join('\n\n'),
          TokenUsage: undefined,
        };
      }
      return {
        Content: output,
        TokenUsage: undefined,
        Error: output.error,
      };
    }),
    ModelType: model,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapErrorToCompletion = (error: any, model: string): ErrorCompletion => {
  const errorMessage = error.message || JSON.stringify(error);
  return {
    choices: [],
    error: errorMessage,
    model,
    usage: undefined,
  };
};

async function main(
  model: string,
  prompts: string[],
  properties: Record<string, unknown>,
  settings: Record<string, unknown>,
) {
  const { size, style, n, quality, response_format } =
    properties as unknown as ImageGenerateParams;
  const openai = new OpenAI({
    apiKey: settings?.[API_KEY] as string,
  });

  const total = prompts.length;
  const outputs: Array<string[] | ErrorCompletion> = [];

  try {
    for (let index = 0; index < total; index++) {
      try {
        const userPrompt = prompts[index];

        const imageResponse: OpenAI.Images.ImagesResponse =
          await openai.images.generate({
            model,
            prompt: userPrompt,
            n,
            size,
            style,
            quality,
            response_format,
          });

        const responseToMarkdown = imageResponse.data.map(
          (res) => `![${res.revised_prompt || userPrompt}](${res.url})`,
        );

        console.log(responseToMarkdown);

        outputs.push(responseToMarkdown);
      } catch (error) {
        const completionWithError = mapErrorToCompletion(error, model);
        outputs.push(completionWithError);
      }
    }

    return mapToResponse(outputs, model);
  } catch (error) {
    console.error('Error in main function:', error);
    return { Error: error, ModelType: model };
  }
}

export { main, config };
