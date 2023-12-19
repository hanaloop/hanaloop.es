import { dirname, join } from 'path';
import { readDir } from '../../../libs/file.utils';
import { parseArgs, ScriptContextType } from '../../script.helper';
import * as utils from '../../utils';
import fs, { existsSync } from 'fs';

const META = {
  name: 'content/syncassets',
  dir: __dirname,
  description: "Copy files from /content/{type}/_content-collection files",
  command: {
      arguments: '<types>',
      options: [
          '-l, --lang <lang>' // language
      ]
  }
};

const ASSET_FILES_EXT = ['.jpg', '.jepg', '.png', '.openapi.yml', '.openapi.yaml'];

/**
 *
 * @param {ScriptContextType} context
 */
 const run = async (context: ScriptContextType) => {

  const params = parseArgs(META, context.args!);

  utils.logger.info(`Executing ${META.name} (%j)`, params);

  const types = params.types.split(',');
  
  for (const contentType of types) {
      
      utils.logger.info(`Sync-ing asset files from: ${context.config.contentRoot}/${contentType} to /public/${contentType}`);
      
      const cwd = process.cwd();
      const contentDirPath = join(cwd, context.config.contentRoot, contentType);
      const files = await readDir(contentDirPath, true);

      const distDir = "public";
      
      const assetFiles = files.filter(fileName => {
        for (const assetExt of ASSET_FILES_EXT) {
          if (fileName.endsWith(assetExt)) {
            return true;
          }
        } 
        return false;
      });

      for (const assetFile of assetFiles) {
        const source = join(context.config.contentRoot, contentType, assetFile);
        const target = join(distDir, contentType, assetFile);
        const targetDir = dirname(target);
        if (!existsSync(targetDir)) {
          utils.mkdirSync(targetDir, { recursive: true });
        }
        utils.logger.info(`Copying: ${source} to ${target} (${targetDir})`);
        
        fs.copyFileSync(source, target);
      }
      utils.logger.message(`Copied ${assetFiles.length} files`);
    }

}

module.exports = {
  META,
  run
};
