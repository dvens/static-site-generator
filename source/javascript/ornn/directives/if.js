import { ornnPrefix } from '../constants';

export default {
    bind() {
        this.holder = document.createComment(`${ornnPrefix}${this.name}`);
        this.node.parentNode.replaceChild(this.holder, this.node);
    },
    update(show) {
        if (show) this.holder.parentNode.replaceChild(this.node, this.holder);
    }
};