export const config = {
  connectorName: 'OpenAI DallE Connector',
  connectorVersion: '1.0.0',
  models: ['dall-e-3', 'dall-e-2'],
  description:
    "The DALL-E Connector enables generating images from textual descriptions using OpenAI's DALL-E model.",
  author: 'Prompt Mixer',
  properties: [
    {
      id: 'n',
      name: 'n',
      value: 1,
      type: 'number',
    },
    {
      id: 'size',
      name: 'size',
      value: '1024x1024',
      type: 'string',
    },
    {
      id: 'style',
      name: 'style',
      value: 'vivid',
      type: 'string',
    },
    {
      id: 'quality',
      name: 'quality',
      value: 'hd',
      type: 'string',
    },
  ],
  settings: [
    {
      id: 'API_KEY',
      name: 'API Key',
      value: '',
      type: 'string',
    },
  ],
  iconBase64:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAILSURBVHgB1ZPNceJAEIX5O8BNIUAEy0aAHIHZCCwisLgBF8yFv4tFBJYzsCNARLA4grUjMCcKqAL2e1s9WzLCrvLNVtXUTP/odb83PbncV//y7wU6nU41n8/fsvzj8ejhWu73+8F0On3IfRbQwOYAPWJGm81mValUAs63+BLlsD+RE43H4+cPAcMw9Pj5juTVcDhsWQEf+47jC0CxYpybrAb2RRr0DWC32w1J7ouiEnEpUeBV7BY/JioYRZEAc71e7wZ/YzQaXWQA6SIwsJbRreEOWB5AodMUu260B+oM0NfD4fDTdVlwgIVC4ZpEJSXprklOAOsD9of4TJ2T+yJbfkur/sdxBxLrbG/A9BWLRXW1YP0SAwo00VZUa9g1m4DnDKAJXXU2I+JZoX/aodODGFDgEq3nhHx8Afs9/jADSGXRuXQgpVJJM9g47ZjYAn9b3ZodI8GVi5fcoVwuR9vt9hVd1NmA6rG7dV2I0RLIguIr/O5X+b0MIMPribYEp6oEl073hJZ26zP2mWmd/nzlZCjToTT01ut15AQXkG6fXWMR4v+RRtLAE9frmTnf6WDPobOcTCZt2W6I0y+FPTTtfouRLgp5orOAqTecAPxIdWlzZS9FMxpbXp9YHTYt92rOAjpQkgMAfHM1GKH2breLkUU6X+Nrnr7hdwHPFBDdGwEbxSdWcA7se3x/AeZhVUbFkV5NAAAAAElFTkSuQmCC',
};
