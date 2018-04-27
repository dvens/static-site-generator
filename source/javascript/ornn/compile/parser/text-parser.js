import { defaultFilterRegex, defaultTagRegex } from '../../constants';
import { filterParser } from './index';

/**
 * Parses string
 * <p>{{ test }}</p> > // TODO: place outcome
 * Inspired by: https://github.com/vuejs/vue/blob/dev/src/compiler/parser/text-parser.js
 * @function
 * @returns { String }
*/

export const textParser = ( text, force = false ) => {

    if( !defaultTagRegex.test( text ) && !force ) return { expression:  JSON.stringify( text ), filterName: null };

    const tokens = [];
    let filterName = null;
    let lastIndex = defaultTagRegex.lastIndex = 0;
    let filter;
    let index;
    let match;

    while ( ( match = defaultTagRegex.exec( text ) ) ) {

        index = match.index;

        if ( index > lastIndex ) {

            tokens.push(
                JSON.stringify( text.slice(lastIndex, index ) )
            );

        }

        if( defaultFilterRegex.test( match[1].trim() ) ) {

            filter = filterParser( match[1].trim() );

            filterName = filter.filterName;
            tokens.push( filter.attrValue );

        } else {

            tokens.push( match[1].trim() );

        }

        lastIndex = index + match[0].length;

    }

    if ( lastIndex < text.length ) {

        tokens.push(
            JSON.stringify( text.slice(lastIndex) )
        );

    }

    return {
        expression: tokens.join('+'),
        filterName
    };

};