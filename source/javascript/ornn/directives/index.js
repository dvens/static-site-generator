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

<<<<<<< HEAD:source/javascript/libs/directives/index.js
        //console.log( this );
=======
        this.bind && this.bind();
        this.update && this.update( generate( this.value )( data ) );
>>>>>>> abe27674a72b1cb069c6878b2d85274d9cd81f0c:source/javascript/ornn/directives/index.js

    }

}