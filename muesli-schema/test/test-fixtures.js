const chai = require('chai');
const { expect } = chai;

const muesli_schema = require('../muesli-schema.json');

const Ajv = require('ajv');
const ajv = new Ajv();

valid_schemas = [
  {
    title: 'Empty Object',
    type: 'object',
    properties: {
    },
    required: [],
    additionalProperties: false,
  },
  {
    title: 'Simple Object',
    type: 'object',
    properties: {
      foo: { type: 'string' },
    },
    required: ['foo'],
    additionalProperties: false,
  },
  {
    title: 'Optional Properties',
    type: 'object',
    properties: {
      foo: { type: 'string' },
    },
    required: [],
    additionalProperties: false,
  },
  {
    title: 'Nested Object with root Title',
    type: 'object',
    properties: {
      foo: {
        type: 'object',
        properties: {
          foo: { type: 'string' },
        },
        required: ['foo'],
        additionalProperties: false,
      },
    },
    required: [],
    additionalProperties: false,
  },
];

invalid_schemas = [
  {},
  { title: 'Missing type' },
  { title: 'Invalid type', type: 'string' },
  { title: 'Missing properties', type: 'object' },
  { title: 'Missing required', type: 'object', properties: {} },
  { title: 'Missing additionalProperties', type: 'object', properties: {}, required: []},
];

valid_schemas.forEach(json_schema => {
  it('it should validate against muesli-schema as valid', () => {
    const valid = ajv.validate(muesli_schema, json_schema);
    const errors = ajv.errors || [];
    expect(errors).to.eql([]);
  });
});

invalid_schemas.forEach(json_schema => {
  it('it should validate against muesli-schema as invalid', () => {
    const valid = ajv.validate(muesli_schema, json_schema);
    const errors = ajv.errors || [];
    expect(errors.length > 0).to.be.true;
    expect(valid).to.equal(false);
  });
});
