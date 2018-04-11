/**
 * Converts a string into a DOM element
 *
 * @param {String} DOMString
 * @return {DOM}
 */

let doc; 

export default function domify( html ) {
    
    if (!doc) {
        doc = document.implementation.createHTMLDocument('');
    }

    doc.body.innerHTML = html;
    return doc.body.children;
    
}
