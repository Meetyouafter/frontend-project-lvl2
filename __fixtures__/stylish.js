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
  return `{\n${key} : ${values}\n}`;
};

export { unchanged };
