import typeOf from '../utils/typeof';
import htmlStringToNodeList from '../utils/html-string-to-node-list';
import Compiler from './compile';

export const initCompiler = ( component ) => {

    const element = component.$options.el;
    const data = component.$options.data;

    if( element ) {

        if( typeOf( element ) === 'String' ) {

            component.$template = ( element.charAt(0) === '#' || element.charAt(0) === '.' ) 
                ? document.querySelector( element ) 
                : htmlStringToNodeList( element );

        } else if( element.nodeType ) {

            component.$template = element;

        }

    } else {

        console.warn(`No valid template found!`);

    }

    if( component.$template ) new Compiler( component.$template, data );

};