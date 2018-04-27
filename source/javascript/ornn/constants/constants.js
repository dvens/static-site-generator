export const ornnPrefix = 'o-';
export const bindRegex = /^o-bind:|^:/;
export const onRegex = /^o-on:|^@/;
export const argRegex = /:(.*)$/;
export const dirRegex = /^o-|^@|^:/;
export const defaultTagRegex = /\{\{((?:.|\n)+?)\}\}/g;
export const defaultFilterRegex = /\|(.*)/;
export const expressionRegex = /"[^"]*"|'[^']*'|\.\w*[a-zA-Z$_]\w*|\w*[a-zA-Z$_]\w*:|(\w*[a-zA-Z$_]\w*)/g;