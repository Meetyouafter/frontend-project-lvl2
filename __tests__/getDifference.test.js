import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const formatsFiles = ['json', 'yml', 'yaml'];

test.each(formatsFiles)(
  'diff formats of files (.json .yml .yaml)',
  (extension) => {
    const expectedResultStylish = readFile('stylishCompare.txt');
    const expectedResultPlain = readFile('plainCompare.txt');
    const expectedResultJson = readFile('jsonCompare.txt');
    const fileName1 = `${process.cwd()}/__fixtures__/file1.${extension}`;
    const fileName2 = `${process.cwd()}/__fixtures__/file2.${extension}`;

    expect(genDiff(fileName1, fileName2, 'stylish')).toEqual(expectedResultStylish);
    expect(genDiff(fileName1, fileName2, 'plain')).toEqual(expectedResultPlain);
    expect(genDiff(fileName1, fileName2, 'json')).toEqual(expectedResultJson);
  },
);
