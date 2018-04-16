import IF from './if';
import src from './src';
import show from './show';
import text from './text';
import each from './each';
import style from './style';
import clus from './class';
import attribute from './attribute';

const directives = {
    IF,
    src,
    show,
    text,
    each,
    style,
    clus,
    attribute,
};

import { generate } from '../compile/generate';

export default class Directive {
    
    constructor(options = {}, data ) {
        
        if ( options.name === 'if' ) options.name = `IF`;
        if ( options.name === 'class' ) options.name = `clus`;
        if ( options.name === 'for') options.name = `each`;

        Object.assign(this, options);
        Object.assign(this, directives[this.name]);

        //console.log( this );

        // this.bind && this.bind();
        // this.update && this.update( generate( this.value )( data ) );
    }

}