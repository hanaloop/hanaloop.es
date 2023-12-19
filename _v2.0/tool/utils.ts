import path from 'path';
import fs from 'fs';

import _get from 'lodash.get';
import yaml from 'js-yaml';
import {chalk} from './chalk';
// import * as nunjucks from 'nunjucks';


export class Logger {
    level: number;
    constructor(level: number = 1) {
        this.level = level;
    }
    get logLevel() {
        return this.level;
    }
    set logLevel(level) {
        this.level = level;
    }
    debug(message: string, ...args: any[]){
        (this.level == 0) && console.debug(message, ...args)
    }
    info(message: string, ...args: any[]) {
        (this.level <= 1) && console.log(chalk.blueBright(message), ...args)
    }
    warn(message: string, ...args: any[])  {
        (this.level <= 2) && console.warn(chalk.yellowBright(message), ...args)
    }
    error(message: string, ...args: any[]) {
        (this.level <= 3) &&
            console.error(chalk.redBright(message), ...args)
    }
    message(message: string, ...args: any[]) {
        console.log(chalk.magenta(message), ...args)
    }
}

export let logger = new Logger();

export function logAndThrow(message: string) {
    logger.error(message);
    throw Error(message);
}

/**
 * Reads a json file and parses it
 * @param {string} path
 * @returns {object} parsed json
 */
export function readJson(path: string) : any {
    let rawdata: string = fs.readFileSync(path, 'utf8');
    return rawdata && JSON.parse(rawdata) ;
}

/**
 * Reads a yaml file and parses it
 * @param {string} path
 * @returns {object} parsed yaml
 */
 export function readYaml(path: string): any {
    const rawdata = fs.readFileSync(path, 'utf8');
    return yaml.load(rawdata);
}


/**
 * Joins two paths.
 * Wrapper around path.join
 * @param  {...string} paths
 */
export function pathJoin(...paths: string[]){
    return path.join(...paths);
};

/**
 * Check if path exists.
 * Wrapper around fs.existsSync()
 * @param  {string} path
 */
export function existsSync(path: string){
    return fs.existsSync(path);
}

/**
 * 
 * @param {string} path 
 * @param {object | number} options - recursive (true/false) or mode
 * @param {boolean} ignoreIfExists  - default true
 */
export function mkdirSync(path: string, options: any, ignoreIfExists: boolean = true) {
    if (ignoreIfExists && fs.existsSync(path)) {
        return undefined;
    }
    return fs.mkdirSync(path, options);
}

/**
 * 
 * @param {string} path 
 * @param {object} options - { recursive: (true/false) }
 * @param {boolean} ignoreIfNotFound  - default true
 */
export function rmSync(path: string, options: any, ignoreIfNotFound: boolean = true) {
    if (ignoreIfNotFound && !fs.existsSync(path)) {
        return undefined;
    }
    return fs.rmdirSync(path, options);
}

/**
 * 
 * @param {string} destPath 
 * @param {object} content 
 */
export function writeFileSync(destPath: string, content: any, options?: any) {
    return fs.writeFileSync(destPath, content, options);
};


/**
 * Renders the template with the model
 * @param {string} templatePath
 * @param {object} model
 */
// export function renderFromTemplate(templatePath, model) {
//     const template = fs.readFileSync(templatePath).toString();

//     return nunjucks.renderString(template, model);
// }

/**
 * Saves the rendered template to a file
 * @param {string} templatePath
 * @param {object} model
 * @param {string} destPath
 */
// export function renderAndSaveFromTemplate(templatePath, model, destPath) {
//     const content = renderFromTemplate(templatePath, model);
//     fs.writeFileSync(destPath, content);
// }


/**
 * Generates file
 * @param {string} rootPath
 * @param {string} templateDir
 * @param {string} templateName
 * @param {object} params {filename, lang, title}
 * @param {object} model
 * @param {string} destSubDir
 * @param {object} opts
 */
// export function generateFileFromTemplate(rootPath: string, templateDir: string, templateName, params, model, destSubDir, opts) {
//     // destSubDir (under language) example: '/archi/repo'
//     const destDirPath = pathJoin(rootPath, params.lang || '', destSubDir);

//     if (!fs.existsSync(destDirPath)) {
//         logAndThrow(`Error: directory [${destDirPath}] does not exist.`)
//     }

//     const todayIso = (new Date()).toISOString().substring(0,10);
//     let filename = params.filename || toSnakeCase(params.title, '-') + '.md';
//     if (_get(opts, 'prependDate', false)) {
//         filename = todayIso + '-' + filename;
//     }

//     // templateName example: '$archi-item.md.njk'
//     const templatePath = pathJoin(templateDir, templateName);

//     const destPath = pathJoin(destDirPath, filename);
//     if (!params.overwrite && fs.existsSync(destPath)) {
//         logAndThrow(`Error: File [${destPath}] already exists`);
//     }

//     logger.debug(`Generating file [${destPath}]...`);
//     const renderingModel = {
//         ...model,
//         ...params,
//         date: todayIso
//     };
//     renderAndSaveFromTemplate(templatePath, renderingModel, destPath);
//     logger.info(`Generated file [${destPath}]`);
// }


