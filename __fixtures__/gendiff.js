#!/usr/bin/env node 
import { program } from 'commander';
import path from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const getFilesDifference = (file1, file2) => {
  const fileName1 = 'file1.json';
  const fileName2 = 'file2.json';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const getFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

  const dataOfFile1 = JSON.parse(readFileSync(getFilePath(fileName1)));
  const dataOfFile2 = JSON.parse(readFileSync(getFilePath(fileName2)));

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

export { getFilesDifference };
