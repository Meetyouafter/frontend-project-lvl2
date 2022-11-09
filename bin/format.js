import stylish from './stylish.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return stylish(tree);
    }
    default:
      throw new Error('Invalid format.');
  }
};

export default format;
