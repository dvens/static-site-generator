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


// const _class = {

//     update: ( cl ) => {

//         each( cl, ( item, key ) => {

//             if( typeOf( item ) === 'Object' ) {

//                 each( item, ( value, c ) => value ? addClass( this.node, c ) : removeClass( this.node, c ) );

//             } else {

//                 const className = typeOf( key ) === 'Number' ? item : i;
//                 item ? addClass(this.node, className) : removeClass(this.node, className);

//             }

//         });

//     }

// };

// export default _class;