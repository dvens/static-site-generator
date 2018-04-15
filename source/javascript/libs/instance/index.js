import extend from '../utils/extend';

import defaultOptions from './default-options';
import { initializeState } from './state';
import { initializeRender } from './render';

class Ornn {

    constructor( options ) {

        if( !( this instanceof Ornn ) ) {
            console.warn('Ornn is a constructor and should be called with the `new` keyword')
        }

        this._init( options );

    }

    _init( options ) {

        this.$options = extend( defaultOptions, options );
        initializeState( this );
        initializeRender( this );

    }

}

export default Ornn;