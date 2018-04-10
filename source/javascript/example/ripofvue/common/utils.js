export function each(items, callback) {
    let len, i = 0;

	if (Array.isArray(items)) {
		len = items.length;
		for ( ; i < len; i++ ) {
			if (callback.call(items[i], items[i], i) === false) return items;
		}
	} else {
		for ( i in items ) {
            if (callback.call(items[i], items[i], i) === false) return items;
		}
	}

	return items;
}

export function type(object) {
    const class2type = {};
    const type = class2type.toString.call(object);
    const typeString = 'Boolean Number String Function Array Date RegExp Object Error Symbol';

    if (object == null) return `${object}`;

    typeString.split(' ').forEach(type => class2type[`[object ${type}]`] = type.toLowerCase());

    return (
        typeof object === 'object' ||
        typeof object === 'function'
        ?
        class2type[type] || 'object'
        :
        typeof object
    );
}
