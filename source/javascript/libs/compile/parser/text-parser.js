import { defaultTagRegex } from '../../constants';

/**
 * Parses string 
 * <p>{{ test }}</p> > // TODO: place outcome
 * Inspired by: https://github.com/vuejs/vue/blob/dev/src/compiler/parser/text-parser.js
 * @function 
 * @returns { String }
*/

export const textParser = ( text ) => {

    const regex = defaultTagRegex;

    if( !regex.test( text ) ) return;

    const tokens = [];
    let lastIndex = regex.lastIndex = 0;
    let index;
    let match;

    while ( match = regex.exec( text ) ) {
        
        index = match.index;

        if ( index > lastIndex ) {
            
            tokens.push( 
                JSON.stringify( text.slice(lastIndex, index ) )
            );

        }

        tokens.push( match[1].trim() );
        lastIndex = index + match[0].length;

    }

    if ( lastIndex < text.length ) {
        
        tokens.push( 
            JSON.stringify( text.slice(lastIndex) )
        );

    }

    return tokens.join('+');

};