import IF from './if';
import src from './src';
import show from './show';
import text from './text';
import each from './each';
import style from './style';
import clus from './class';
import attribute from './attribute';

const directives = {
    IF,
    src,
    show,
    text,
    each,
    style,
    clus,
    attribute,
};

export default class Directive {
    constructor(options = {}) {
        if (options.name === 'if') options.name = `IF`;
        if (options.name === 'class') options.name = `clus`;

        Object.assign(this, options);
        Object.assign(this, directives[this.name]);

        this.beforeUpdate && this.beforeUpdate();
        this.update && this.update(generate(this.expression)(this.compile.data));
    }
}