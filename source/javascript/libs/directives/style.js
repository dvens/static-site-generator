import each from '../utils/each';
import typeOf from '../utils/typeof';

export default {
    update(style) {
        each(style, (item, i) => {
            if (typeOf(item) === 'Object') {
                each(item, (value, key) => this.node.style[key] = value);
            } else {
                this.node.style[i] = item;
            }
        });
    },
};
