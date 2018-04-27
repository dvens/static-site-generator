import typeOf from '../utils/typeof';
import htmlStringToNodeList from '../utils/html-string-to-node-list';

export const getTemplate = ( element ) => {

    let template;

    if( element ) {

        if( typeOf( element ) === 'String' ) {

            template = ( element.charAt(0) === '#' || element.charAt(0) === '.' )
                ? document.querySelector( element )
                : htmlStringToNodeList( element );

        } else if( element.nodeType ) {

            template = element;

        }

    } else {

        return console.warn(`No valid template found!`);

    }

    return template;

};