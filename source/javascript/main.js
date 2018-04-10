'use strict';

// Import initializer
import initializer from './utils/initializer';

// Import atoms, molecules and organisms
import example from './atoms/example';

export default class main {
    
    /**
     * Launches the modules
     * @method init
     * @static
     */
    static init() {
        initializer.init('.js-example', example);
    }
}

main.init();
