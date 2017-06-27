import readDir      from 'readdir';
import fs           from 'fs';
import _            from 'lodash';

// TODO: Put this in seperate file.
function assign(obj, keyPath, value) {
    
    let lastKeyIndex = keyPath.length-1;
    
    for ( let i = 0; i < lastKeyIndex; ++ i ) {
        
        let key = keyPath[i];
        
        if ( !(key in obj) ) {
            
            obj[key] = {}

        }
       
        obj = obj[key];

    }
   
    obj[keyPath[lastKeyIndex]] = value;

}

export default (root, options) => {

    let filesArray = readDir.readSync(root, options);
    let data = {};

    filesArray.forEach(function(file) {

        let fileData = fs.readFileSync(`${root}/${file}`);
        fileData = JSON.parse(fileData);

        let dataPath = file.replace('.json', '');

        dataPath = dataPath.split( '/' );
        assign(data, dataPath, fileData);

    });

    return data;

}