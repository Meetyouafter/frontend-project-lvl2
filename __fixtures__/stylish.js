import _ from 'lodash';
import getFilesData from './parsing.js';

/*
if (!_.isObject(mergedObject[key])) {
  if (obj1[key] === obj2[key]) {result += 'unchanged\n'}
  if (obj1[key] === undefined) {result += 'added\n'}
  if (obj1[key] !== obj2[key]) {result += 'changed\n'}
  if (obj2[key] === undefined) {result += 'removed\n'}
  }
*/

const unchanged = (key, values) => {
  return `${key} : ${values}\n`;
};

const added = (key, values) => {
  return `+${key} : ${values}\n`;
};

const removed = (key, values) => {
  return `-${key} : ${values}\n`;
};

const changed = (key, values1, values2) => {
  return `-${key} : ${values1}\n+${key} : ${values2}\n`;
};

export { unchanged, added, removed, changed };
