'use strict';

import Ornn from './libs';
// import colon from './example/src';

export default class main {

    /**
     * Launches the modules
     * @method init
     * @static
     */
    static init() {


        const data = {
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

        // colon({
        //     template: document.querySelector('.app'),
        //     data,
        //     computed: {
        //         fullName() {
        //             return this.user.firstName + this.user.lastName;
        //         },
        //     },
        // });

        const products = new Ornn({
            el: document.querySelector( '.app' ),
            data,
            computed: {
                fullName() {
                    return this.user.firstName + this.user.lastName;
                }
            }
        });

        console.log( products );

    }
    
}

main.init();
