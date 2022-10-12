import { join } from 'path';
import { ScriptContextType, parseArgs } from '../../script.helper';
import * as utils from '../../utils';
import { getAllFilesFrontMatter } from './gen-collection';

const META = {
    name: 'content/collections',
    dir: __dirname,
    description: "Generate /content/{type}/_content-collection.json files",
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

    // params.type
    const types = params.types.split(',');
    
    for (const contentType of types) {
        
        utils.logger.info(`Traversing:  ${context.config.contentRoot}/${contentType}`);
        const docMetas = await getAllFilesFrontMatter(context.config.contentRoot, contentType);

        const outputPath = join(context.config.contentRoot, contentType, `_content-collection.json`);
        utils.logger.debug("Content-to-write: ", docMetas);
    
        utils.writeFileSync(
            outputPath, 
            JSON.stringify(docMetas, null, 2),
            { encoding: 'utf8' , flag:'w' }
        );
        utils.logger.message(`Generated:  ${outputPath}`);
    }

}

module.exports = {
    META,
    run
};

