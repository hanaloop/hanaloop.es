import * as utils from './type.utils';

describe('utils', () => {
  describe('flattenObject', () => {
    test('WHEN input: null, THEN return null', async () => {
      const result = utils.flattenObject(null, '_');
      expect(result).toBeNull();
    });
    
    test('WHEN input: primitive value, THEN return the input', async () => {
      const r1 = utils.flattenObject('hello', '_');
      const r2 = utils.flattenObject(1234, '_');
      const r3 = utils.flattenObject(false, '_');
      expect(r1).toEqual('hello');
      expect(r2).toEqual(1234);
      expect(r3).toEqual(false);
    });

    test('WHEN input: obj with nested structure, THEN return flattened', async () => {
      const input = {
        top: {
          l1: {
            l2arr: ['test', 'test2'],
            l2bool: true,
          },
          l1str: "L1-String",
          l1num: 20200924        
        },
        topnull: null
      };
      const result = utils.flattenObject(input, '_');

      const expected = {
        top_l1_l2arr: input.top.l1.l2arr,
        top_l1_l2bool: input.top.l1.l2bool,
        top_l1str: input.top.l1str,
        top_l1num: input.top.l1num,
        topnull: null,
      };

      expect(result).toEqual(expected);
    });
  });

  test('toSnakeCase', async () => {
    const result = utils.toSnakeCase('Title Case With $pecial and _underscore');

    expect(result).toEqual('title_case_with_pecial_and_underscore');
  });

  test('toSnakeCase', async () => {
    const result = utils.toSnakeCase('Title Case With $pecial and _underscore');

    expect(result).toEqual('title_case_with_pecial_and_underscore');
  });
});
