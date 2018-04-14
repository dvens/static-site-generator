/**
 * HTML string to nodes
 * @function
 */
export default function htmlStringToNodeList( html ) {

    const div = document.createElement('div');
    div.innerHTML = html;
    return div;

}
