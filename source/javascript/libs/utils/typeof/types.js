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
  
export const strings = {}
  
for (let type of list) {
    strings['[object ' + type + ']'] = type

  }