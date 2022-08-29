#!/usr/bin/env node
 
import { program } from 'commander';
import path from 'path';
import { readFileSync } from  'fs';
import { cwd } from 'process';

console.log(cwd().split('/')[cwd().split('/').length - 1]);

const getFilesDifference = (file1, file2) => {

const filepath1 = () => {
  path.resolve('bin/file1.json');
}
const filepath2 = path.resolve('bin/file2.json');

const dataOfFile1 = JSON.parse(readFileSync(filepath1));
const dataOfFile2 = JSON.parse(readFileSync(filepath2));

const copyOfFile1ForMerge = Object.assign({}, dataOfFile1);
const mergedFilesData = Object.assign(copyOfFile1ForMerge, dataOfFile2);

let result = '';
const sortedKeys = Object.keys(mergedFilesData).sort();
  for (const key of sortedKeys) {
    if (dataOfFile1[key] === dataOfFile2[key]) {
      result += `\n    ${key}: ${dataOfFile1[key]}`;
    }  if (dataOfFile1[key] === undefined) {
      result += `\n  + ${key}: ${dataOfFile2[key]}`;
    }  if (dataOfFile2[key] === undefined) {
      result += `\n  - ${key}: ${dataOfFile1[key]}`;
    }  if ((dataOfFile1[key] !== dataOfFile2[key]) && dataOfFile1[key] !== undefined && dataOfFile2[key] !== undefined) {
      result += `\n  - ${key}: ${dataOfFile1[key]}\n  + ${key}: ${dataOfFile2[key]}`;
    }
  }
console.log(`{${result}\n}`);
return `{${result}\n}`;
};

program
  .version('0.0.1')
  .argument('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action(getFilesDifference)

program.parse();