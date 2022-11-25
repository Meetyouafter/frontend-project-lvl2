import { load } from 'js-yaml';

const parsers = (content, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
      return load(content);
    case 'yaml':
      return load(content);
    default:
      throw new Error(`Invalid file format! Your format is ${formatName}.Try supported format.`);
  }
};

export default parsers;
