"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let text = 'Hello from Typescript!';
function doneWritingFile(err) {
    if (err) {
        return console.log('There was an error!');
    }
    console.log('Done!');
}
fs_1.default.writeFile('file.txt', text, doneWritingFile);
