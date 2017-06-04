export type MuesliNode = MuesliString | MuesliNumber | MuesliArray | MuesliObject;

export interface MuesliString {
  type: 'string';
}

export interface MuesliNumber {
  type: 'number';
}

export interface MuesliArray {
  type: 'array';
  items: MuesliNode;
}

export interface MuesliObject {
  type: 'object';
  properties: {[name: string]: MuesliNode };
  required: Array<string>;
  additionalProperties: false;
}

export type MuesliSchema = MuesliObject;
