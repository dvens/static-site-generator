import typeOf from '../utils/typeof';

function intializeComputed( component, computed ) {

    const options = component.$options;

    for( const key in computed ) {

        const userDefinition = computed[key];
        const getter = typeOf( userDefinition ) === 'Function' ? userDefinition : userDefinition.get;

        if( !( key in options.data ) ) {

            createComputedSetterGetter( component, key, getter, false );

        } else {

            console.warn(`Computed ${ key } is already defined in data`);

        }

    }

}

function createComputedSetterGetter( target, key, getter, setter ) {

    let descriptor = {};

    if( getter ) descriptor.get = getter;
    if( setter ) descriptor.set = setter;

    Object.defineProperty( target.$options.data, key, descriptor );

}

export function initializeState( component ) {

    const options = component.$options;
    if( options.computed ) intializeComputed( component, options.computed );

}
