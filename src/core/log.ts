function log(str: string, color = 36) {
  return console.log(`\x1b[${color}m${str}\x1b[0m`);
}

export default log;
