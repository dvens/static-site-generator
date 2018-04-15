import { expressionRegex } from '../constants';

export function getTemplateExpression( template ) {

    const dependencies = getTemplateDependencies( template );
    return dependencies;

}

function getTemplateDependencies( template ) {

    const dependencies = [];

    template.replace( expressionRegex, ( match, reference ) => {

        if( reference !== undefined && dependencies.indexOf( reference ) === -1 ) {
            
            dependencies.push( reference );

        }

    });

    return dependencies;

}