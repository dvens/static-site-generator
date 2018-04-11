import Compile from '../compile';

export function initializeRender( component ) {

    const el = component.$options.el;

    component.$compile = Compile;
    component.$template = typeof el === 'string' ? document.querySelector(el) : el;

}