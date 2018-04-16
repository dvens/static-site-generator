import each from '../utils/each';
import typeOf from '../utils/typeof';
import { addClass, removeClass } from '../utils/dom';

export default {

    update( cl ) {

        each( cl, ( item, key ) => {

            if( typeOf( item ) === 'Object' ) {

                each( item, ( c, value ) => value ? addClass( this.node, c ) : removeClass( this.node, c ) );

            } else {

                const className = item;
                key ? addClass( this.node, className ) : removeClass( this.node, className );

            }

        });
    }

};