"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slug_1 = __importDefault(require("slug"));
function slugify(source) {
    return `${slug_1.default(source)}-${Math.random().toString(36).substring(9)}`;
}
exports.default = slugify;
