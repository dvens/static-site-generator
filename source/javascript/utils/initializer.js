'use strict';

/*
  Usage:
  ======
  html
  ----
  <div class="js-example">...</div>
  
  js (atom/example.js)
  --
  class Example {
    constructor() {
        console.log('Initialize example!');
    }
  }

  export default Example; 
  
  js (main.js)
  --
  import initializer from './utils/initializer';
  import example from './atoms/example';

  initializer.init('.js-example', example);
*/

/**
 * @class Initializer
 * @link based on https://github.com/vigetlabs/gulp-starter/blob/master/src/javascripts/modules/index.js
 */
class Initializer {
    
    /**
     * Selects elements and combines them with the class
     * @method init
     * @param element {string}
     * @param constructor {class}
     */
    static init(element, constructor) {

        const elements = document.querySelectorAll(`${element}`);

        for( let i = 0; i < elements.length; i++ ) {

            const el = elements[i];
            new constructor(el);

        }

    }

}

export default Initializer;

