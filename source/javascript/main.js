'use strict';

// Import initializer
import initializer from './utils/initializer';

// Import atoms, molecules and organisms
import example from './atoms/example';
// import Berserker from './libs/test';

export default class main {
    
    /**
     * Launches the modules
     * @method init
     * @static
     */
    static init() {
        console.log('Main initialized!');
        initializer.init('.js-example', example);

        let data = {
            activeColor: 'red',
            isActive: true,
            isError: false,
            size: '14px',
            link: 'https://www.baidu.com',
            image: 'http://h0.hucdn.com/open/201806/395b7d4f974cd6b9_200x200.jpg',
            flag: false,
            test: '1111',
            styleObj: {
              color: '#ff4965',
              fontSize: '20px'
            },
            comments: [{
                content: '我是1个评论。'
              },
              {
                content: '我是2个评论。'
              },
              {
                content: '我是3个评论。'
              }
            ]
        };

        // Berserker({
        //     template: document.querySelector('.app'),
        //     data,
        //     computed: {
        //         fullName: function () {
        //               return this.size + ' ' + this.test
        //         }
        //     }
        // });

    }
}

main.init();
