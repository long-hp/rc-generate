"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStyle(style) {
    switch (style) {
        case 'css':
            return 'css';
        case 'scss':
            return 'scss';
        default:
            return '';
    }
}
exports.default = getStyle;
