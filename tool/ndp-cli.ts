/**
 * CLI to execute tasks related to site management, e.g. generation of skeleton files
 * and pushing content to search index.
 * The actual scripts that the CLI tool uses are under `./scripts`
 */
import path from 'path';
import { parseScriptArgs } from './script.helper';

const utils = require('./utils');

const packageJson = require('../package.json');

const config = {
    rootPath: path.resolve(__dirname, '..'),
    contentRoot: 'content'
};

const SCRIPT_ROOT = './scripts/';

(async() => {
    const scriptContext = parseScriptArgs(packageJson, config);

    utils.logger.logLevel = scriptContext.verbose ? 0 : 1;
    utils.logger.debug('Argv: %j', process.argv);

    const scriptPath = SCRIPT_ROOT + scriptContext.name;
    utils.logger.debug('Loading script [%s] and passing args: %j', scriptPath, scriptContext.args);

    const script = require(scriptPath);
    // const script = await import(scriptPath);

    try {
        const result = await script.run(scriptContext);
        utils.logger.info('Script [%s] completed', scriptContext.name);
    } catch (error) {
        utils.logger.error('Script [%s] failed with error ', error);
        process.exit(1);
    }
    process.exit(0);
})();
