'use strict';

const concatPath = {};

concatPath.get = (config, type, name, opt_in) => {

    let src = config[type][name].src;
    let file = config[type][name].files;
    let finalPath;

    if(file) {
        
        finalPath = opt_in ? src + '/' + opt_in : src + '/' + file;

    } else {

        finalPath = opt_in ? src + '/' + opt_in : src + '/';

    }
    
    return finalPath;

}

concatPath.getMultiple = (config, type, name) => {

    let files = config[type][name].files;
    let src = config[type][name].src; 
    let finalPathFiles = [];

    for( let i = 0; i < files.length; i++ ) {

        finalPathFiles.push( src + '/' + files[i] );

    }

    return finalPathFiles;
    
}

export default concatPath;
