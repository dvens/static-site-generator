const dependencyRE = /"[^"]*"|'[^']*'|\.\w*[a-zA-Z$_]\w*|\w*[a-zA-Z$_]\w*:|(\w*[a-zA-Z$_]\w*)/g;
const globals = [
    'true', 'false', 'undefined', 'null', 'NaN', 'isNaN', 'typeof', 'in',
    'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'unescape',
    'escape', 'eval', 'isFinite', 'Number', 'String', 'parseFloat', 'parseInt',
];

export function generate( expression ) {

    const dependencies = extractDependencies(expression);
    let dependenciesCode = '';

    dependencies.map(dependency => dependenciesCode += `var ${dependency} = data["${dependency}"];`);

    const code = `
        ${dependenciesCode};
        try {

            return ${expression};

        } catch( e ) {

            return false;

        }
    `;

    return new Function(`data`, code );

}

export function extractDependencies( expression ) {

    const dependencies = [];

    expression.replace(dependencyRE, (match, dependency) => {

        if (
            dependency !== undefined &&
            dependencies.indexOf(dependency) === -1 &&
            globals.indexOf(dependency) === -1
        ) {
            dependencies.push(dependency);
        }

    });

    return dependencies;
}