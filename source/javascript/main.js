'use strict';

import Ornn from './ornn';
export default class main {

    /**
     * Launches the modules
     * @method init
     * @static
     */
    static init() {


        const data = {
            isActive: true,
            isFixed: true,
            activeColor: '#42b983',
            fontSize: 16,
            styleObject1: {
                color: '#42b983',
                backgroundSize: 'cover',
            },
            test: null,
            styleObject2: {
                fontSize: 16 + 'px',
            },
            user: {
                avatar: `./images/avatar.jpg`,
                firstName: `Just`,
                lastName: `Me`,
            },
            moments: [{
                content: `Hello World.`,
                show: true,
            }, {
                content: `Hello World.`,
                show: false,
            }, {
                content: `Hello World.`,
                show: true,
            }],
        };

        const products = new Ornn({
            el: document.querySelector( '.app' ),
            data,
            computed: {
                fullName() {
                    return this.user.firstName + this.user.lastName;
                }
            }
        });

        function checkReferenceError( item ) {
            
            try {
            
                return test.timing.test;

            } catch( e ) {
                
                console.log( e instanceof ReferenceError );
                return false;

            }

        }

    }

}

main.init();
