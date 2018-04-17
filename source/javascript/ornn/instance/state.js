import typeOf from '../utils/typeof';

function intializeComputed( component, computed ) {

    for( const key in computed ) {

        const userDefinition = computed[key];
        const getter = typeOf( userDefinition ) === 'Function' ? userDefinition : userDefinition.get;

        if( !( key in component.data ) ) {

            createComputedSetterGetter( component, key, getter, false );

        } else {

            console.warn(`Computed ${ key } is already defined in data`);

        }

    }

}

function createComputedSetterGetter( component, key, getter, setter ) {

    let descriptor = {};

    if( getter ) descriptor.get = getter;
    if( setter ) descriptor.set = setter;

    descriptor.enumerable = true;
    descriptor.configurable = true;

    Object.defineProperty( component.data, key, descriptor );

}

export function initializeState( component ) {

    const computed = component.options.computed;
    if( computed ) intializeComputed( component.options, computed );

}
