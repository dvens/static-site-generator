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

    for (let type of list) {
        obj[`[object ${type}]`] = type;
    }

    return obj;

}

export const strings = generateTypesObject();