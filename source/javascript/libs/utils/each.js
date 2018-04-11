/**
 * Iterates through object
 * @param {Object} obj 
 * @param {Function} fn 
 * @param {Object} ctx 
 */
function object(obj, fn, ctx) {
    
    for ( let key in obj ) {
        
        fn.call( ctx, key, obj[key] );

    }

}

/**
 * Iterates through array
 * @param {Array} arr 
 * @param {Function} fn 
 * @param {Object} ctx 
 */
function array( arr, fn, ctx ) {
    
    for ( let i = 0, len = arr.length; i < len; ++i ) {
        
        fn.call( ctx, arr[i], i );

    }

}

const each = ( items, cb, context ) => {

    if( Array.isArray(items) ) {
        
        return array( items, cb, context );

    } else {
        
        return object( items, cb, context );

    }

};

export default each;