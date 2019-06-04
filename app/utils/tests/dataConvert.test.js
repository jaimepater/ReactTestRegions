/**
 * Test data convert
 */
import { convertTextToArray } from '../dataConvert';

describe('data convert', () => {
  describe('test ', () => {
    it('should convert a text in an array', () => {
      const text = '“01 Lima /  / ”\n“01 Lima / 50 Lima / ”';
      const callback = value => value;
      expect(convertTextToArray(text, ' / ', callback)).toEqual([
        ['01 Lima', '', ''],
        ['01 Lima', '50 Lima', ''],
      ]);
    });
  });
});
