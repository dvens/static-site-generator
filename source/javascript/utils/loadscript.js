'use strict';

/**
 * Script loader
 * @method loadScript
 * @param {string} url
 * @param {boolean} async
 * @param {function} callback
 */
export default function loadScript (url, async, callback) {
    
	const script = document.createElement('script');
		
	script.src = url;

	if (typeof async !== 'undefined') {
		script.async = async;
	}

	script.onload = function(e) {
		if(callback) callback(e);
	}

	script.onerror = function(e) {
		if(callback) callback(e);
	}

	document.head.appendChild(script);

}