import _ from 'lodash';
import getFilesData from './parsing.js';
import { added, removed, unchanged, changed } from './stylish.js';

const obj1 = {
  "lala": true,
  "tata": false,
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
  const mergedDataOfObject = _.merge(deepDataOfFile1, deepDataOfFile2);
  console.log(obj1);
  console.log(obj2);

  const getDeepDifference = (data, deth) => {
    if (typeof data !== 'object' || data === null) {
      return String(data);
    }

    const indentation = ' '.repeat(deth);

    const lines = Object.entries(data);
    const preresult = lines.map(([key, val]) => {
      if (obj1[data] === obj2[data]) {
        return `${indentation}  ${key}: ${getDeepDifference(val, deth + 1)}`;
      }
      if (obj1[key] === undefined) {
        return `${indentation}+ ${key}: ${getDeepDifference(val, deth + 1)}`;
      }
      if (obj2[key] === undefined) {
        return `${indentation}- ${key}: ${getDeepDifference(val, deth + 1)}`;
      }
      if (obj1[key] !== obj2[key]) {
        return ` ${indentation} ${key}: ${getDeepDifference(val, deth + 1)}`;
      } else {
        throw new Error ('this is wrong')
      }

  });
    const result = ['{', ...preresult, `${indentation}}`].join('\n')
    return result;
  };
  return getDeepDifference(mergedDataOfObject, 1);
};









  /*
  const getDeepDifference = (mergedObject) => {
      if (obj1[mergedObject] === obj2[mergedObject]) {
        result += unchanged(mergedObject, mergedDataOfObject[mergedObject]);
      }
      if (obj1[mergedObject] === undefined) {
        result += added(mergedObject, mergedDataOfObject[mergedObject]);
      }
      if (obj1[mergedObject] !== obj2[mergedObject]) {
        result += changed(mergedObject, obj1[mergedObject], obj2[mergedObject]);
      }
      if (obj2[mergedObject] === undefined) {
        result += removed(mergedObject, mergedDataOfObject[mergedObject]);
      }
      return result;
    }
    return getDeepDifference(mergedDataOfObject);
  };
*/
console.log(getFilesDifference(obj1, obj2));

export default getFilesDifference;
