import Compiler from '../compile';

export function initializeRender( component ) {

    component.$template = new Compiler(
        component.options.el,
        { data: component.options.data }
    ).template;

}