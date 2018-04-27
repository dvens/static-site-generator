import { defaultFilterRegex } from '../../constants';

export const filterParser = ( string ) => {

    let match;

    match = string.match( defaultFilterRegex );

    string = string.replace( match[1] , '' );
    string = string.replace( '|' , '' );

    return {
        attrValue: string,
        filterName: match[1].trim()
    }

};