

/**
 * Returns true if it is an Object, JSON is an object
 * @param {*} obj 
 */
export function isString(obj: any): boolean
{
    return (typeof obj === 'string' || obj instanceof String);
}


/**
 * Returns true if it is an Object, JSON is an object
 * @param {*} obj 
 */
export function isObject(obj: any): boolean
{
    return (obj !== undefined && obj !== null && obj.constructor == Object);
}
 
 /**
  * Returns a new flattened object in which the nested objects are converted into 
  * top level property with the property names being the join of all the 
  * ancestors names joined with the joinChar.
  * If the obj is not an object, it will return the same input.
  * 
  * @param {*} obj - The object to flatten
  * @param {string} joinChar - The character to join the property names
  * @param {string} prefix - The prefix for the property name. Mostly used for the recursion
  */
export function flattenObject(obj: any | null, joinChar: string, prefix: string = ''): any {
    if (!isObject(obj)) {
        return obj
    }
    prefix = prefix ? prefix : '';
    let flattened: any = {}
    for (const propName in obj) {
        const propVal = obj[propName];

        const prefixedPropName = prefix ? (prefix + joinChar + propName) : propName;
        if (isObject(propVal)) {
            const childFlat = flattenObject(propVal, joinChar, prefixedPropName);
            flattened = Object.assign(flattened, childFlat);
        } else {
            flattened[prefixedPropName] = propVal;
        }
    }
    return flattened;
}
 

/**
 * Convert a CamelCase string into a snake_case
 * @param {string} str
 */
export function toSnakeCase(str: string, joinChar: string = '_'): string {
  const tokens = str && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  
  return (tokens) ? tokens.map(x => x.toLowerCase()).join(joinChar) : str.toLowerCase();
}

/**
 * 
 * @param vals 
 * @returns 
 */
export function classNames(...vals: string[]) {
    return vals.filter(Boolean).join(' ');
}
