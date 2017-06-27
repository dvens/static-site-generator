import config           from '../config';
import concatPath       from './concat-path';

export default () => {

    let path;

    if( config.prod ) {
        
        path = config.source.html.excludes;
        path.push( concatPath.get(config, 'source', 'html', 'templates/**') );

    } else {

        path = concatPath.get(config, 'source', 'html', 'templates/**');

    }

    return path;

}