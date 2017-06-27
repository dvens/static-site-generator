import path         from 'path';
import readDir      from 'readdir';

export default (dir) => {
    
    // Process.cwd http://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application
    const tasks = readDir.readSync(dir, ['**.js']);
    const relativePath = path.relative( __dirname, process.cwd() );

    tasks.forEach( (task) => {
        
        require(`${relativePath}/${dir}/${task}`);

    });

}