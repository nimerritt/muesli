const chai = require('chai');
const { expect } = chai;

const muesli_schema = require('../muesli-schema.json');

const Ajv = require('ajv');
const ajv = new Ajv();

valid_schemas = [
  {
    type: 'object',
    properties: {
    },
    required: [],
    additionalProperties: false,
  },
  {
    type: 'object',
    properties: {
      foo: { type: 'string' },
    },
    required: ['foo'],
    additionalProperties: false,
  },
  {
    type: 'object',
    properties: {
      foo: { type: 'string' },
    },
    required: [],
    additionalProperties: false,
  },
  {
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
  { type: 'string' },
  { type: 'object' },
  { type: 'object', properties: {} },
  { type: 'object', properties: {}, required: []},
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
