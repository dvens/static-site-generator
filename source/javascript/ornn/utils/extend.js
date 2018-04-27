import typeOf from '../utils/typeof';

export function isPlainObject(object) {

    const class2type = {};
    const toString = class2type.toString;
    const hasOwn = class2type.hasOwnProperty;
    const fnToString = hasOwn.toString;
    const ObjectFunctionString = fnToString.call(Object);

    let prototype;
    let ctor;

    if ( !object || toString.call( object ) !== '[object Object]' ) return false;

    prototype = Object.getPrototypeOf( object );

    if ( !prototype ) return true;

    ctor = hasOwn.call( prototype, 'constructor' ) && prototype.constructor;

    return typeof ctor === 'function' && fnToString.call( ctor ) === ObjectFunctionString;

}

export default function extend() {

    let options;
    let name;
    let clone;
    let copy;
    let source;
    let copyIsArray;

    let target = arguments[0] || {};
    let i = 1;
    let length = arguments.length;
    let deep = false;

    if ( typeof target === 'boolean' ) {

        deep = target;
        target = arguments[i] || {};
        i++;

    }

    if ( typeof target !== 'object' && typeOf(target) !== 'Function' ) {
        target = {};
    }

    if ( i === length ) {
        target = this;
        i--;
    }

    for (; i < length; i++) {
        //
        if ( (options = arguments[i]) !== null ) {
            // for in source object
            for ( name in options ) {

                source = target[name];
                copy = options[name];

                if ( target == copy ) {
                    continue;
                }

                // deep clone
                if ( deep && copy && ( isPlainObject( copy ) || ( copyIsArray = Array.isArray( copy ) ) ) ) {
                    // if copy is array
                    if ( copyIsArray ) {

                        copyIsArray = false;
                        // if is not array, set it to array
                        clone = source && Array.isArray(source) ? source : [];

                    } else {

                        // if copy is not a object, set it to object
                        clone = source && isPlainObject(source) ? source : {};

                    }

                    target[name] = extend(deep, clone, copy);

                } else if (copy !== undefined) {

                    target[name] = copy;

                }

            }

        }

    }

    return target;
}
