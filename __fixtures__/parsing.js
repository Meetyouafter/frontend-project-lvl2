import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const getFilesData = (fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const getFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const filePath = getFilePath(fileName);

  const format = path.extname(filePath);
  const data = readFileSync(filePath);

  let parse;
  if (format === '.json' || '') {
    parse = JSON.parse;
  } else if (format === '.yml' || format === '.yaml') {
    parse = yaml.load;
  }

  return parse(data);
};

export default getFilesData;
