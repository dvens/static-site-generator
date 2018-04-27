import Compiler from '../compile';

export function initializeRender( component, filters ) {

    component.$template = new Compiler(
        component.options.el,
        { data: component.options.data, filters }
    ).template;

}