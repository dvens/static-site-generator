import { initCompiler } from '../compile/';
import typeOf from '../utils/typeof';

export function initializeRender( component ) {

    const el = component.$options.el;

    component.$compile = initCompiler;
    component.$view = initCompiler( component );

}