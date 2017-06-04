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
