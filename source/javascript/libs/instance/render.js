import { initCompiler } from '../compile/';
import typeOf from '../utils/typeof';

export function initializeRender( component ) {

    component.$compile = initCompiler;
    initCompiler( component );

}