import { initializeState } from './state';
import { initializeRender } from './render';

class Ornn {

    constructor( options ) {

        if( !( this instanceof Ornn ) ) {
            console.warn('Ornn is a constructor and should be called with the `new` keyword')
        }

        this.options = options;
        this._init();

    }

    static filter( name, func ) {

        Ornn.filters = Object.assign({}, Ornn.filters, {
            [name]: func
        });

    }

    _init() {

        initializeState( this );
        initializeRender( this, Ornn.filters );

    }

}

export default Ornn;