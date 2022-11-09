import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import genDiff from '../bin/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedResultStylish = readFile('fileForCompare.txt');

const formatsFiles = ['json', 'yml'];

test.each(formatsFiles)('diff formats of files (.json .yml)', (extension) => {
  const fileName1 = `${process.cwd()}/__fixtures__/file1.${extension}`;
  const fileName2 = `${process.cwd()}/__fixtures__/file2.${extension}`;

  expect(genDiff(fileName1, fileName2, 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff(fileName1, fileName2)).toEqual(expectedResultStylish);
});