import _ from 'lodash';

const stringify = (item) => {
  if (_.isObject(item)) {
    return '[complex value]';
  }
  return typeof (item) === 'string' ? `'${item}'` : String(item);
};

const plain = (tree) => {
  const iter = (currentValue, path) => {
    const lines = currentValue
      .filter(({ type }) => type !== 'unchanged')
      .map((item) => {
        const keys = [...path, item.name];
        const absoluteKey = keys.join('.');

        switch (item.type) {
          case 'added':
            return `Property '${absoluteKey}' was added with value: ${stringify(item.value)}`;
          case 'deleted':
            return `Property '${absoluteKey}' was removed`;
          case 'changed':
            return `Property '${absoluteKey}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
          case 'nested':
            return iter(item.children, keys);
          default:
            throw new Error('Unknown type');
        }
      });
    return lines.join('\n');
  };

  return iter(tree, []);
};

export default plain;
