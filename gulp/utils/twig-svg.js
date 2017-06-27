import config   from '../config.js'
import fs       from 'fs';

const type = 'svg';

export default (Twig) => { 

    Twig.exports.extendTag({
        type: type,
        regex: new RegExp(`^${type}\\s+(.+)$`),
        next: [ ],
        open: true,
        compile: (token) => {
            const expression = token.match[1];

            token.stack = Twig.expression.compile.apply(this, [{
                type:  Twig.expression.type.expression,
                value: expression
            }]).stack;

            delete token.match;

            return token;
        },
        parse: (token, context, chain) => {
            
            const svg = Twig.expression.parse.apply(this, [token.stack, context]);
            
            const template = Twig.exports.twig({
                data : fs.readFileSync(config.dest.assets.src + `/${type}/` + svg + '.svg', 'utf8')
            });
            
            const output = template.render();

            return {
                chain: false,
                output: output
            };
        }
    });

}