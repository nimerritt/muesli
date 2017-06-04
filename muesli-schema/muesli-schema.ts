import { JSONSchema4 } from '@types/json-schema';

type MSNode = MSString | MSNumber | MSArray | MSObject;

interface MSString {
  type: 'string';
}

interface MSNumber {
  type: 'number';
}

interface MSArray {
  type: 'array';
  items: MSNode;
}

interface MSObject {
  type: 'object';
  properties: {[name: string]: MSNode };
  required: Array<string>;
  additionalProperties: false;
}

export type MuesliSchema = MSObject;
