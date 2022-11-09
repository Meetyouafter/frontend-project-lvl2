import { resolve, extname } from 'path';
import { readFileSync } from 'fs';
import parsingFile from './parsingFile.js';
import treeBuilder from './treeBuilder.js';
import format from './format.js';

const getFormat = (filepath) => extname(filepath).slice(1);

const getFixturePath = (filepath) => resolve(process.cwd(), filepath);

const readFile = (filepath) => readFileSync(getFixturePath(filepath, 'utf-8'));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);

  const file1 = parsingFile(readFile1, getFormat(filepath1));
  const file2 = parsingFile(readFile2, getFormat(filepath2));

  const tree = treeBuilder(file1, file2);

  return format(tree, formatName);
};

export default genDiff;