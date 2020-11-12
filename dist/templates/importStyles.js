"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importStyles = void 0;
exports.importStyles = function (_a) {
    var rn = _a.rn, style = _a.style, name = _a.name;
    return !!style ? "\nimport styles from './" + (rn && style === 'react-native' ? "styles" : name + ".module." + style) + "';" : '';
};
