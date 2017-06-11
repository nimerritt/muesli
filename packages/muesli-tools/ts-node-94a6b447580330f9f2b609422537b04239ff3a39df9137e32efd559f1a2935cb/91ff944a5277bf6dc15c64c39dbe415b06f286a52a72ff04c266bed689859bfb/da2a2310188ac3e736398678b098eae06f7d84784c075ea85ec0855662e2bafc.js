"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_1 = require("../src/parse");
var dom = require("dts-dom");
var chai_1 = require("chai");
function json(intf) {
    return JSON.stringify(dom.emit(intf), null, 2);
}
describe('Given an muesli schema with required values', function () {
    var schema = {
        type: 'object',
        properties: {
            bar: { type: 'number' },
        },
        required: ['bar'],
        additionalProperties: false,
    };
    describe('createInterface', function () {
        it('should return an interface with a required property', function () {
            var expected_intf = dom.create.interface('Test');
            var optional_foo = dom.create.property('foo', dom.type.string, dom.DeclarationFlags.Optional);
            expected_intf.members = [
                dom.create.property('bar', dom.type.number),
            ];
            var intf = parse_1.createInterface('Test', schema);
            chai_1.expect(json(intf)).to.eql(json(expected_intf));
        });
    });
});
describe('Given an muesli schema with optional values', function () {
    var schema = {
        type: 'object',
        properties: {
            foo: { type: 'string' },
        },
        required: [],
        additionalProperties: false,
    };
    describe('createInterface', function () {
        it('should return an interface with an optional property', function () {
            var expected_intf = dom.create.interface('Test');
            expected_intf.members = [
                dom.create.property('foo', dom.type.string, dom.DeclarationFlags.Optional),
            ];
            var intf = parse_1.createInterface('Test', schema);
            chai_1.expect(intf).to.eql(expected_intf);
        });
    });
});
describe('Given an empty muesli schema', function () {
    var schema = {
        type: 'object',
        properties: {},
        required: [],
        additionalProperties: false,
    };
    describe('createInterface', function () {
        it('should return an interface with the name passed in', function () {
            var expected_intf = dom.create.interface('Test');
            chai_1.expect(parse_1.createInterface('Test', schema)).to.eql(expected_intf);
        });
    });
});
//# sourceMappingURL=/workspace/packages/muesli-tools/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/91ff944a5277bf6dc15c64c39dbe415b06f286a52a72ff04c266bed689859bfb/da2a2310188ac3e736398678b098eae06f7d84784c075ea85ec0855662e2bafc.js.map