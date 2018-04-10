import { strings, types } from './types'

const typeOf = ( value ) => {
    
    if ( value ===  undefined ) return 'undefined';
    if ( value === null ) return 'Null';

    const str = Object.prototype.toString.call( value );
    const type = strings[str];
    
    return type === 'Number' && isNaN(value) ? 'NaN' : type;

}

export default typeOf;