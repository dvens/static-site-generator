/*
 * DOM helper functions
 * hasClass( elem, 'class' )
 * addClass( elem, 'class' )
 * removeClass( elem, 'class' )
 * toggleClass( elem, 'class' )
 */

const hasClassList = 'classList' in document.documentElement;

function classReg( className ) {
    
    return new RegExp(`(^|\\s+)'${className}(\\s+|$)`);

}

export const hasClass = ( element, c ) => {
    
    if( hasClassList) {
        element.classList.contains( c );
    } else {
        return classReg( c ).test( element.className );
    }

};

export const addClass = ( element, c ) => {
    
    if( hasClassList) {
        element.classList.add( c );
    } else {
        if( !hasClass( element, c ) ) element.className = `${ element.className } ${ c }`;
    }

};

export const removeClass = ( element, c ) => {

    if( hasClassList) {
        element.classList.remove( c );
    } else {
        elem.className = element.className.replace( classReg( c ), ' ' );
    }

};

export const toggleClass = ( element, c ) => {

    if( hasClassList) { 
        element.classList.toggle( c );
    } else {
        const fn = hasClass( element, c ) ? removeClass : addClass;
        fn( element, c );
    }

};