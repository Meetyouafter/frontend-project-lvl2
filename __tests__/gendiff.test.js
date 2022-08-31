import { getFilesDifference } from '../__fixtures__/getDifferense.js';

const result = getFilesDifference('file1.json', 'file2.json');
const actualData = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('test make difference', () => {
  expect(result).toEqual(actualData);
});
