import { program } from 'commander';

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small <string>', 'small pizza size', 'abc')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

// if (program.debug) {
//   console.log(program.opts());
// }
// console.log('pizza details:');
if (program.small) {
  console.log(program.small);
}
