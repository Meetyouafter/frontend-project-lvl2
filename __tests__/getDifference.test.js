import getFilesDifference from '../__fixtures__/getDifference.js';

const actualData = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('test make difference json format file', () => {
  const resultForJsonFormat = getFilesDifference('file1.json', 'file2.json');
  expect(resultForJsonFormat).toEqual(actualData);
});

test('test make difference yml format file', () => {
  const resultForYmlFormat = getFilesDifference('file1.yml', 'file2.yml');
  expect(resultForYmlFormat).toEqual(actualData);
});
