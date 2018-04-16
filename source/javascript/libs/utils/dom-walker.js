export default function domWalker( nodes, callback ) {

    console.log( nodes );

    if ( !('length' in nodes) ) nodes = [nodes];

    nodes = [].slice.call( nodes );

    while( nodes.length ) {

        const node = nodes.shift();
        const ret = callback( node );

        if( ret ) return ret;

        
        if ( node.childNodes && node.childNodes.length ) {
            
            nodes = [].slice.call( node.childNodes ).concat( nodes);
            
        }

    }

}