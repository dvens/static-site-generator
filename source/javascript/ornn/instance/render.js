import Compiler from '../compile';
import typeOf from '../utils/typeof';

export function initializeRender( component ) {

    component.$template = new Compiler(
        component.options.el,
        { data: component.options.data }
    ).template;

}