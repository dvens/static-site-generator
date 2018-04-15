/*
 * DOM helper functions
*/

const hasClassList = 'classList' in document.documentElement;

function classReg( className ) {
    
    return new RegExp(`(^|\\s+)'${className}(\\s+|$)`);

}

/**
 * Check if element has a certain class
 * hasClass( elem, 'class' );
 * @function 
 * @returns { Boolean } 
*/
export const hasClass = ( element, c ) => {
    
    if( hasClassList) {
        element.classList.contains( c );
    } else {
        return classReg( c ).test( element.className );
    }

};

/**
 * Adds classes to an element
 * addClass( elem, 'class' );
 * @function 
*/

export const addClass = ( element, c ) => {
    
    if( hasClassList) {
        element.classList.add( c );
    } else {
        if( !hasClass( element, c ) ) element.className = `${ element.className } ${ c }`;
    }

};

/**
 * Removes classes of an element
 * removeClass( elem, 'class' );
 * @function 
*/
export const removeClass = ( element, c ) => {

    if( hasClassList) {
        element.classList.remove( c );
    } else {
        elem.className = element.className.replace( classReg( c ), ' ' );
    }

};

/**
 * Togggles classes of an element
 * toggleClass( elem, 'class' );
 * @function 
 */
export const toggleClass = ( element, c ) => {

    if( hasClassList) { 
        element.classList.toggle( c );
    } else {
        const fn = hasClass( element, c ) ? removeClass : addClass;
        fn( element, c );
    }

};