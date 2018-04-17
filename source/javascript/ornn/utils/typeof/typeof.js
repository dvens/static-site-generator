import { strings } from './types'

/**
 * Checks the type of a object/array etc.
 * See types.js for adding/seeing the different types
 * @function
 * @returns { boolean }
 */
const typeOf = ( value ) => {

    if ( value ===  undefined ) return 'undefined';
    if ( value === null ) return 'Null';

    // Type check
    // Creates [object type]
    // Example Object.prototype.toString.call([]) > "[object Array]"
    // https://gist.github.com/pbakondy/f442e91995e9d206c056
    const str = Object.prototype.toString.call( value );
    const type = strings[str];

    return type === 'Number' && isNaN( value ) ? 'NaN' : type;

}

export default typeOf;