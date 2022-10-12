import Fuse from 'fuse.js';
import { join } from 'path';
import { parseArgs, ScriptContextType } from '../../script.helper';
import * as utils from '../../utils';


const META = {
  name: 'search/fuse',
  dir: __dirname,
  description: "Indexes content in _content-collection.json under /content/*/ directories",
  command: {
      // arguments: '<action>',
      arguments: '<types>',
      options: [
          '-a, --action <action>' // action
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

  // v2.1
  const types = params.types.split(',');
  
  let fullCollection: any = [];
  for (const contentType of types) {
      
    utils.logger.info(`Indexing: ${context.config.contentRoot}/${contentType}/_content-collection.json`);
    
    const contentPath = join(context.config.contentRoot, contentType, '_content-collection.json');
    
    if (utils.existsSync(contentPath)) {
      const contentCollection = utils.readJson(contentPath);
      const normalizedContent = contentCollection.map((item: any) => {
        return ({
          slug: item.slug, 
          content: item.meta.contentFull || item.meta.contentTruncated,
          ctype: contentType,
          meta: {
            title: item.meta.title || item.meta.label,
            publishedAt: item.meta.publishedAt,
            tags: item.meta.tags
          }
        })
      });
      fullCollection.splice(fullCollection.length, 0, ...normalizedContent);
      // console.log(contentCollection);

      utils.logger.info("Indexed", contentPath);
    } else {
      utils.logger.message(`File not found ${contentPath}, skipping.`);
    }
  }

  const options = { keys: ['slug', 'content', 'meta.title', 'meta.publishedAt', 'meta.publishedAt', 'meta.tags'] }
  // Create the Fuse index
  const myIndex = Fuse.createIndex(options.keys, fullCollection);

  const fullContentPath = join(context.config.contentRoot, '_content-collection.full.json');
  utils.writeFileSync(fullContentPath, JSON.stringify(fullCollection));
  utils.logger.message(`Full content file '${fullContentPath}' generated.`);

  const indexPath = join(context.config.contentRoot, 'fuse-index.json');
  utils.writeFileSync(indexPath, JSON.stringify(myIndex.toJSON()));
  utils.logger.message(`Index file '${indexPath}' generated.`);

}

module.exports = {
  META,
  run
};

