import commander from 'commander';
import {chalk} from './chalk'

export type ScriptContextType = {
  name?: string,
  args?: string[],
  verbose?: any,
  info?: string,
  config: any
}

export function parseScriptArgs(packageJson: any, config: any): ScriptContextType {
  let scriptContext: ScriptContextType = {
    config: config
  };
  const program = new commander.Command(packageJson.name);
  program.version(packageJson.version || '0.1.0')
      .argument('<action>')
      .usage(`${chalk.green('<script>')} [options]`)
      .action( (action, args) => {
          scriptContext.name = action;
          scriptContext.args = process.argv.slice(1);
          if (args) {
              scriptContext.verbose = args.verbose;
              scriptContext.info = args.info;
          }
      })
      .option('--verbose', 'print additional logs')
      .option('--info', 'print environment debug info')
      .on('--help', () => {
          console.log('*** Help on the way');
      })
      .parse(process.argv);
  
//   console.log("scriptContext", scriptContext);
  return scriptContext;
}


/**
 *
 * @param {object} scriptMeta
 * @param {[string]} args
 * @returns { {optKey: string} } Key value pair of the options
 */
 export function parseArgs(scriptMeta: any, args: string[]) {
  let paramKeys: string[] = [];
  let params: any = {};

  // Internal function to extract keys, those enclosed in <>
  const regexArgs = new RegExp('\<.*?\>', 'g');
  const regexOpt = /--(\w+)/g;

  const extractKeys = (flags: string) => {
      let keys = flags.match(regexOpt);
      // Give precedence to '--arg' over '<arg>' format for the param key
      if (keys) {
          return keys ? keys.map( str => str.substring(2)) : [];
      } else {
          const keys = flags.match(regexArgs);
          return keys ? keys.map( str => str.substring(1, str.length-1)) : [];
      }
  }

  const parseOptions = (program: any, optFlags: string[]) => {
      if (optFlags) {
          for(const optFlag of optFlags) {
              paramKeys.push(...extractKeys(optFlag));
              program.option(optFlag);
          }
      }
  }

  const program: any = new commander.Command(scriptMeta.name);
  program.allowUnknownOption()
  
  // TESTING
  const commandArguments = '<_path> <_command> ' + scriptMeta.command.arguments;
  program.arguments(commandArguments);
  
  const argsKeys = extractKeys(commandArguments);

  parseOptions(program, scriptMeta.command.requiredOptions);
  parseOptions(program, scriptMeta.command.options);

  program.action( (...argus: any[]) => 
      {
          const command = argus[argus.length-1];

          if (argus.length > 0) {
              params.arguments = command.processedArgs;
          }
          if (argsKeys.length <= command.processedArgs.length) {
              for(let i=0; i < argsKeys.length; i++) {
                  params[argsKeys[i]] = command.processedArgs[i];
              }
          }
      })
      .parse(args, { from: 'user' });
  

  for(const paramKey of paramKeys) {
      params[paramKey] = program.opts()[paramKey];
  }

  return params;
}
