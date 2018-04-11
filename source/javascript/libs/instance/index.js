import extend from '../utils/extend';

import { initializeState } from './state';
import { initializeRender } from './render';

const defaultOptions = {
    data: {}
};

class Templatize {

    constructor( options ) {

        if( !( this instanceof Templatize ) ) {
            console.warn('Templatize is a constructor and should be called with the `new` keyword')
        }

        this._init( options );

    }

    _init( options ) {

        this.$options = extend( defaultOptions, options );
        initializeState( this );
        initializeRender( this );

    }

}

export default Templatize;