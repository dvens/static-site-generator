import extend from '../utils/extend';
import domWalker from '../utils/dom-walker';
import Directive from '../directives';
import { textParser, filterParser } from './parser';

import { getTemplate } from './template';

import defaultOptions from '../instance/default-options';

import {
    bindRegex,
    dirRegex,
    defaultTagRegex,
    ornnPrefix,
    defaultFilterRegex
} from '../constants';

const isElementNode = ( node ) => node.nodeType === 1;
const isTextNode = ( node ) => node.nodeType === 3;

<<<<<<< HEAD
const priorities = ['for', 'if'];
=======
const priorities = ['for', 'if', 'text'];
>>>>>>> 0d63eae30c99e8bbc439b874dd1c01070053bdaa

class Compiler {

    constructor( template, options ) {

        let _template = getTemplate( template );

        this.options = extend( true, defaultOptions, options );

        this.data = this.options.data;
        this.filters = this.options.filters;

        this.template = _template;

        this.initWalker( _template );

<<<<<<< HEAD
        _template = null;

=======
>>>>>>> 0d63eae30c99e8bbc439b874dd1c01070053bdaa
    }

    initWalker( template ) {

        domWalker( template, ( node ) => {

            if( isElementNode( node ) ) {
                
                this.compileElementNode( node );

            } else if( isTextNode( node ) ) {
                
                
                this.compileTextNode( node );

            }

        });

    }

    compileElementNode( node ) {

        const attributes = node.attributes;

        let filterName = null;
        let attributeName;
        let attributeValue;
        let directiveName;
        let parser;
        let filter;

        if( node.hasAttributes() && this.prioritize( node ) ) return;

        [].slice.call( attributes ).map( ( attribute ) => {

            attributeName = attribute.name;
            attributeValue = attribute.value;

            if( defaultFilterRegex.test( attributeValue ) ) {

                filter = filterParser( attributeValue );

                attributeValue = filter.attrValue;
                filterName = filter.filterName;

            }

            if( bindRegex.test( attributeName ) ) {

                directiveName = attributeName.replace( bindRegex, '');

            } else if ( dirRegex.test( attributeName ) ) {

                directiveName = attributeName.slice( ornnPrefix.length );

            }

            if( directiveName && attributeValue !== '' ) {

                new Directive({
                    node,
                    name: directiveName,
                    value: attributeValue,
                    filterName
                }, this.data, this.filters );

                node.removeAttribute( attributeName );

            } else {

                if( !defaultTagRegex.test( attributeValue ) || attributeValue.trim() === '' ) return;

                parser = textParser( attributeValue, true );

                new Directive({
                    node,
                    name: 'attribute',
                    value: parser.expression,
                    attributeName,
                    filterName: parser.filterName
                }, this.data, this.filters );

            }

        });

    }

    compileTextNode( node ) {

        if( node.textContent.trim() === '' ) return;

        let parser = textParser( node.textContent );

        new Directive({
            node,
            name: 'text',
            value: parser.expression,
            filterName: parser.filterName
        }, this.data, this.filters );

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
                }, this.data, this.filters );

                return true;

            } else {

                return false;

            }

        }

    }

}

export default Compiler;