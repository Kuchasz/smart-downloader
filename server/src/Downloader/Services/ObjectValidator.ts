export class ObjectValidator{
  checkExclusiveProperties(obj, ...properties){
    let propCount = 0;
    properties.forEach(p => {
      if(obj[p] != undefined)propCount++;
    });
    return propCount == 1;
  }
}
