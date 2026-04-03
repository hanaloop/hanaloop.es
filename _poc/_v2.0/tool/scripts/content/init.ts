import { join } from 'path';
import { readDir } from '../../../libs/file.utils';
import { parseArgs, ScriptContextType } from '../../script.helper';
import * as utils from '../../utils';

const META = {
  name: 'content/init',
  dir: __dirname,
  description: "Deletes all files from /content/{type}/ directory",
  command: {
      arguments: '<types>',
      options: [
          '-l, --lang <lang>' // language
      ]
  }
};


/**
 *
 * @param {ScriptContextType} context
 */
 const run = async (context: ScriptContextType) => {

  const params = parseArgs(META, context.args!);

  utils.logger.info(`Executing ${META.name} (%j)`, params);

  const types = params.types.split(',');
  
  for (const contentType of types) {
      
      utils.logger.info(`Initializing:  ${context.config.contentRoot}/${contentType}`);
      
      const contentDirPath = join(context.config.contentRoot, contentType);
      const files = await readDir(contentDirPath, false);
      
      // fs.rmSync(dir, { recursive: true, force: true });
      for (const file of files) {
        utils.logger.info("Deleting: ", file);
        // TODO: delete file
      }
      utils.logger.message(`Deleted ${files.length} files`);
    }

}

module.exports = {
  META,
  run
};

