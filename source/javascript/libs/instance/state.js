import typeOf from '../utils/typeof';

function initializeData( component, data ) {

    component.$data = data;

}

function intializeComputed( component, computed ) {

    for( const key in computed ) {

        const userDefinition = computed[key];
        const getter = typeOf( userDefinition ) === 'Function' ? userDefinition : userDefinition.get;

        if( !( key in component.$data ) ) {
            
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

    Object.defineProperty( target.$data, key, descriptor );

}

export function initializeState( component ) {

    const options = component.$options;

    if( options.data ) initializeData( component, options.data );
    if( options.computed ) intializeComputed( component, options.computed );

}
