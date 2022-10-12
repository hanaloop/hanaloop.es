import { parseArgs } from "./script.helper";

describe('script.helper', () => {

  describe('parseArgs', () => {
    test('GIVEN single arg, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-l, --lang <lang>',
            ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', '-l', 'ko']
      const result = parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        _path: 'PATH',
        _command: 'fake/action',
        title: 'fake_title',
        lang: 'ko'
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN multiple args fully mapped, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title> <name>',
            requiredOptions: [
                '-l, --lang <lang>',
            ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', 'fake_name', '-l', 'ko']
      const result = parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        _path: 'PATH',
        _command: 'fake/action',
        title: 'fake_title',
        name: 'fake_name',
        lang: 'ko'
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN multiple args partially mapped, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-l, --lang <lang>',
            ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', 'fake_arg','-l', 'ko']
      const result = parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        _path: 'PATH',
        _command: 'fake/action',
        title: 'fake_title',
        lang: 'ko'
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN multiple args partially mapped, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-l, --lang <lang>',
            ],
            options: [
              '-c, --cate <cate>',
          ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', 'fake_arg', '-l', 'ko', '--cate', 'fake_cate']
      const result = parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        _path: 'PATH',
        _command: 'fake/action',
        title: 'fake_title',
        lang: 'ko',
        cate: 'fake_cate',
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN boolean option, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-b, --boolean',
            ],
            options: [
              '-v, --verbose',
              '-d, --dummy',
          ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', '-b','--verbose']
      const result = parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        _path: 'PATH',
        _command: 'fake/action',
        title: 'fake_title',
        boolean: true,
        verbose: true,
        dummy: undefined,
      };

      expect(result).toEqual(expected);
    });
  });
});
