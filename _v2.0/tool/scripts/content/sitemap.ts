import { join } from 'path';
import { ScriptContextType, parseArgs } from '../../script.helper';
import * as utils from '../../utils';

const META = {
    name: 'content/sitemap',
    dir: __dirname,
    description: "Generate /sitemap.xml file",
    command: {
        arguments: '<output>',
        options: [
            '-l, --lang <lang>' // language
        ]
    }
};

// const siteConfig = require('../../../next-portal.config');

import siteConfig from '../../../next-portal.config';


/**
 *
 * @param {ScriptContextType} context
 */
const run = async (context: ScriptContextType) => {

    const params = parseArgs(META, context.args!);

    const outputPath = params.output || 'public/sitemap.xml';

    utils.logger.info(`Executing ${META.name} (%j)`, params);


    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${generatePageUrls()}
    </urlset>`;

    utils.writeFileSync(
        outputPath, 
        sitemapXml,
        { encoding: 'utf8' , flag:'w' }
    );
    utils.logger.message(`Generated:  ${outputPath}`);
}

function generatePageUrls() {
    const now = new Date()
    const contentCollectionFilepath = utils.pathJoin(process.cwd(), '/content', '_content-collection.full.json');
    if (!utils.existsSync(contentCollectionFilepath)) {
        utils.logger.error(`File: ${contentCollectionFilepath} not found, run 'yarn contentprep' first`);
    }
    const contentCollection = utils.readJson(contentCollectionFilepath);

    const pageUrls: string[] = [];
    for (let content of contentCollection) {
        pageUrls.push(generatePageUrl(content));
    }
    return pageUrls.join('\n');
}

function generatePageUrl(content: any) {
    // const dateStr 
    // <lastmod>2005-01-01</lastmod>
    return `
    <url>
        <loc>${siteConfig.url}${content.slug}</loc>
        <changefreq>daily</changefreq>
    </url>`;
}

module.exports = {
    META,
    run
};

