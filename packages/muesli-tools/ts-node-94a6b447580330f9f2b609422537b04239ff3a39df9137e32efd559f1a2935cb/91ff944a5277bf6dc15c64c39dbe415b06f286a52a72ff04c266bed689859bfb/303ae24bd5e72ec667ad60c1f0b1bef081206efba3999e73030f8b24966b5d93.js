"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var dom = require("dts-dom");
function tsProperties(schema) {
    return _.map(schema.properties, function (v, k) { return dom.create.property(k, tsType(v), schema.required.indexOf(k) !== -1 ?
        dom.DeclarationFlags.None :
        dom.DeclarationFlags.Optional); });
}
function tsType(schema) {
    switch (schema.type) {
        case 'string':
            return dom.type.string;
        case 'number':
            return dom.type.number;
        case 'array':
            return dom.create.array(tsType(schema.items));
        case 'object':
            return dom.create.objectType(tsProperties(schema));
        default:
            var _exhaustiveCheck = schema;
            return _exhaustiveCheck;
    }
}
function createInterface(name, root) {
    var intf = dom.create.interface('Test');
    intf.members = tsProperties(root);
    return intf;
}
exports.createInterface = createInterface;
//# sourceMappingURL=/workspace/packages/muesli-tools/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/91ff944a5277bf6dc15c64c39dbe415b06f286a52a72ff04c266bed689859bfb/303ae24bd5e72ec667ad60c1f0b1bef081206efba3999e73030f8b24966b5d93.js.map