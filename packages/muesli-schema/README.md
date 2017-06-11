# Muesli Schema

Json-schema is full of sugar. Let's restrict it to the essentials and
have a great day.

This subset is designed specifically to be easily converted to
Typescript and other static-type systems. 

## Details:
In contrast to normal json-schema, the root must be an object type and
contain a title. All object types are strict in the sense that all
properties must be explicitly specified. This is achieved by enforcing
`additionalProperties` to be specified as `false`.  Additionally the
`required` array must be specified, even if it is empty.

The following is a valid muesli schema specified as JavaScript.

```js
{
  title: 'Person',
  type: 'object',
  properties: {
    id: { type: 'string' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string' },
        city: { type: 'string' },
      },
      required: ['city'],
      additionalProperties: false,
    },
  },
  required: ['id'],
  additionalProperties: false,
}
```

## Todo:
- [x] Validate test cases against muesli schema
- [x] Setup test suite against TypeScript interfaces
- [x] Implement Muesli-schema to TypeScript interface

# Muesli Swagger Server
Tooling for creating TypeScript servers from a subset of the Swagger spec.

# Muesli Swagger Client
Tooling for creating TypeScript cleints from a subset of the Swagger spec.
