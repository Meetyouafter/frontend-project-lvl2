import _ from 'lodash';
import getFilesData from './parsing.js';
import { unchanged } from './stylish.js';

const obj1 = {
  "lala": true,
  "group1": {
    "first": null,
  },
};

const obj2 = {
  "lala": true,
  "group1": {
  "loop": 564,
  },
  "kek": "fast",
};

const getFilesDifference = (obj1, obj2) => {
  const deepDataOfFile1 = _.cloneDeep(obj1);
  const deepDataOfFile2 = _.cloneDeep(obj2);
  const mergedObject = _.merge(deepDataOfFile1, deepDataOfFile2);
  console.log(mergedObject);
  let result = '';

  const getDeepDifference = (mergedObject) => {
    if (_.isObject(mergedObject)) {
      const sortedKeys = Object.keys(mergedObject).sort();
      sortedKeys.map(getDeepDifference);
    }

    if (!_.isObject(mergedObject)) {
      console.log(mergedObject);
      if (obj1[mergedObject] === obj2[mergedObject]) {
        result += 'unchanged\n';
      }
      if (obj1[mergedObject] === undefined) {
        result += 'added\n';
      }
      if (obj1[mergedObject] !== obj2[mergedObject]) {
        result += 'changed\n';
      }
      if (obj2[mergedObject] === undefined) {
        result += 'removed\n';
      }
    }

    return result;
  };

  return getDeepDifference(mergedObject);
};

getFilesDifference(obj1, obj2);
console.log(getFilesDifference(obj1, obj2));
