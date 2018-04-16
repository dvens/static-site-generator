/**
 * Deep object extending
 * https://stackoverflow.com/questions/14843815/recursive-deep-extend-assign-in-underscore-js
 * @function
 * @returns { obj }
 */
const deepObjectExtend = ( target, source ) => {

    for ( let prop in source ) {

        if (source.hasOwnProperty(prop)) {

            if ( target[prop] && typeof source[prop] === 'object' ) {

                deepObjectExtend( target[prop], source[prop] );

            } else {

                target[prop] = source[prop];

            }
        }
    }

    return target;

}

export default deepObjectExtend;