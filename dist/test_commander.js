"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small <string>', 'small pizza size', 'abc')
    .option('-p, --pizza-type <type>', 'flavour of pizza');
commander_1.program.parse(process.argv);
// if (program.debug) {
//   console.log(program.opts());
// }
// console.log('pizza details:');
if (commander_1.program.small) {
    console.log(commander_1.program.small);
}
