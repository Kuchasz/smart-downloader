export const getNameFromFunction = (func: Function): string =>(func.toString().match(/function ([^(]+)/)[1]);