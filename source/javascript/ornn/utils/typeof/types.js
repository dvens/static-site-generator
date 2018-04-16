import each from '../each';

const list = [
    'Null',
    'Undefined',
    'NaN',
    'Arguments',
    'Number',
    'String',
    'Array',
    'Object',
    'Date',
    'Boolean',
    'Symbol',
    'Map',
    'WeakMap',
    'Set',
    'Function',
    'RegExp',
    'Promise',
    'Error'
];

/**
 * @function 
 * @returns { obj } of types
 */
function generateTypesObject() {

    const obj = {};

    each( list, ( type ) => {
       
        obj[`[object ${type}]`] = type;

    });
    
    return obj;

}

export const strings = generateTypesObject();