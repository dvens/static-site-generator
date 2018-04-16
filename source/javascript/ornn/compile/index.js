import extend from '../utils/extend';
import domWalker from '../utils/dom-walker';
import Directive from '../directives';
import { textParser } from './parser';
import { getTemplate } from './template';

import defaultOptions from '../instance/default-options';

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

    constructor( template, options ) {

        let _template = getTemplate( template );

        this.options = extend( defaultOptions, options );
        this.data = this.options.data;
        this.template = _template;

        this.initWalker( _template );

        _template = null;
    }

    initWalker( template ) {

        domWalker( template, ( node ) => {

            if( isElementNode( node ) ) {

                this.compileElementNode( node );

            } else if( isTextNode( node ) ) {

<<<<<<< HEAD:source/javascript/libs/compile/compile.js
            console.log( node );

            if( isElementNode( node ) ) {
                
                this.compileElementNode( node );

            } else if( isTextNode( node ) ) {
                
=======
>>>>>>> abe27674a72b1cb069c6878b2d85274d9cd81f0c:source/javascript/ornn/compile/index.js
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

            if( directiveName && attributeValue !== '' ) {

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

            // TODO: check if o- is in prefix
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
                }, this.data );

                return true;

            } else {

                return false;

            }

        }

    }

}

export default Compiler;