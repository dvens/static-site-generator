import domWalker from '../utils/dom-walker';
import Directive from '../directives';
import { textParser } from './parser';

import { 
    bindRegex, 
    argRegex, 
    dirRegex, 
    defaultTagRegex, 
    expressionRegex,
    ornnPrefix
} from '../constants';


const isElementNode = ( node ) => node.nodeType === 1;
const isTextNode = ( node ) => node.nodeType === 3;

const priorities = ['for'];

class Compiler {
    
    constructor( template, data ) {

        this.template = template;
        this.data = data;

        this.initWalker();

    }

    initWalker() {

        domWalker( this.template, ( node ) => {

            console.log( node );

            if( isElementNode( node ) ) {
                
                this.compileElementNode( node );

            } else if( isTextNode( node ) ) {
                
                this.compileTextNode( node );

            }

        });

    }

    compileElementNode( node ) {

        const attributes = node.attributes;

        let attributeName;
        let attributeValue;
        let directiveName;
        let attributeArgument;

        if( node.hasAttributes() && this.prioritize( node ) ) return;

        [].slice.call( attributes ).map( ( attribute ) => {

            attributeName = attribute.name;
            attributeValue = attribute.value;
            
            // TODO: Create on-click handler 
            if( bindRegex.test( attributeName ) ) {

                directiveName = attributeName.replace( bindRegex, '');

            } else if ( dirRegex.test( attributeName ) ) {
                
                directiveName = attributeName.slice( ornnPrefix.length );
               
            }

            if( directiveName ) {

                new Directive({
                    node, 
                    name: directiveName,
                    value: attributeValue
                }, this.data );

                node.removeAttribute( attributeName );

            } else {

                if( !defaultTagRegex.test( attributeValue ) || attributeValue.trim() === '' ) return;

                new Directive({
                    node, 
                    name: 'attribute',
                    value: textParser( attributeValue ),
                    attributeName
                }, this.data );

            }

        });

    }

    compileTextNode( node ) {

        if( node.textContent.trim() === '' ) return;

        new Directive({
            node, 
            name: 'text',
            value: textParser( node.textContent ),
        }, this.data );

    }

    prioritize( node ) {

        let attributeValue;
        let directiveName;

        for ( let i = 0; i < priorities.length; i++ ) {
            
            directiveName = priorities[i];
            attributeValue = node.getAttribute(`${ornnPrefix}${directiveName}`);

            if (attributeValue) {
                
                attributeValue = attributeValue.trim();
                
                if (!attributeValue) return false;
    
                node.removeAttribute(`${ornnPrefix}${directiveName}`);
                
                new Directive({
                    node,
                    name: directiveName,
                    value: attributeValue,
                });
    
                return true;

            } else {

                return false;

            }

        }

    }

}

export default Compiler;