'use strict';

import config       from '../config.js'
import fs           from 'fs';
import gulpUtil     from 'gulp-util';

const types = ['organism', 'molecule', 'atom'];

export default (Twig) => { 

    types.forEach( (type) => {

        Twig.exports.extendTag({
            type: type, 
            regex: new RegExp(`^${type}\\s+([a-zA-Z0-9_-]+)\\s*\\(\\s*([\\s\\S]+)\\s*\\)`),
            next: [ ],
            open: true,
            compile: (token) => {
               
                const template  = token.match[1];
                const expression = token.match[2];

                token.stack = Twig.expression.compile.apply(this, [{
                    type:  Twig.expression.type.expression,
                    value: expression
                }]).stack;

                token.template = template;

                delete token.match;
                return token;
            },
            parse: (token, context, chain) => {
                
                const data = Twig.expression.parse.apply(this, [token.stack, context]);
                
                const template = Twig.exports.twig({
                    data : fs.readFileSync( config.source.html.src + `/${type}s/` + token.template + '.html', 'utf8' )
                });
                
                const output = template.render(data);

                return {
                    chain: false,
                    output: output
                };
            }
        });

    });
}