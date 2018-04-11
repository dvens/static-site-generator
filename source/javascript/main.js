'use strict';

import Templatizer from './libs';

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

        const products = new Templatizer({
            el: '.app',
            data,
            computed: {
                fullName() {
                    return this.user.firstName + this.user.lastName;
                }
            }
        });
    }
}

main.init();
