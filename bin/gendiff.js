import {program} from 'commander';
import path from 'path';
import {readFileSync} from  'node:fs';
import pkg from 'lodash'

const sortBy = pkg

/*
program
  .version('0.0.1')
  .argument('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')

program.parse();
*/

const filepath1 = path.resolve('file1.json');
const filepath2 = path.resolve('file2.json');

const dataOfFile1 = JSON.parse(readFileSync(filepath1));
const dataOfFile2 = JSON.parse(readFileSync(filepath2));

console.log(dataOfFile1)
console.log(dataOfFile2)



const difference = (dataOfFile1, dataOfFile2) => {
  const copyOfFile1ForMerge = Object.assign({}, dataOfFile1)
  const mergedFilesData = Object.assign(copyOfFile1ForMerge, dataOfFile2)
  let result = ''
  const sortedKeys = Object.keys(mergedFilesData).sort();
  for (const key of sortedKeys) {
    if (dataOfFile1[key] === dataOfFile2[key]) {
console.log(key, dataOfFile1[key], dataOfFile2[key])
      result += `\n  ${key}: ${dataOfFile1[key]}`
    }  if (dataOfFile1[key] === undefined) {
      result += `\n+ ${key}: ${dataOfFile2[key]}`
    }  if (dataOfFile2[key] === undefined) {
      result += `\n- ${key}: ${dataOfFile1[key]}`
    }  if ((dataOfFile1[key] !== dataOfFile2[key]) && dataOfFile1[key] !== undefined && dataOfFile2[key] !== undefined) {
      result += `\n- ${key}: ${dataOfFile1[key]}\n+ ${key}: ${dataOfFile2[key]}`
    }
  }
return `{${result}\n}`
}
console.log(difference(dataOfFile1, dataOfFile2))
