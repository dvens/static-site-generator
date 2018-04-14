import typeOf from '../utils/typeof';

export const initCompiler = ( component ) => {

    const element = component.$options.el;
    const data = component.$options.data;
    // typeOf( el ) === 'String' ? document.querySelector(el) : el;

    console.log( typeOf( element ) )



    if( element ) {

        if( typeOf( element ) === 'String' ) {

            component.$template = document.querySelector( element );

        } else if( true ) {



        }

    } else {

        console.warn(`No valid template found!`);

    }

};