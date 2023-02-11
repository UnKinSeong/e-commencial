export function isString(){
    for(var i = 0; i < arguments.length; i++)
        if(!(typeof arguments[i] === 'string' || arguments[i] instanceof String))
            return false;
    return true;
}
export function isNumber(){
    for(var i = 0; i < arguments.length; i++)
        if(!(typeof arguments[i] === "number" || arguments[i] instanceof Number))
            return false;
    return true;
}
export function isBoolean(){
    for(var i=0;i<arguments.length;i++)
        if(!(typeof arguments[i]==='boolean' || arguments[i] instanceof Boolean))
            return false;
    return true;
}
export function isArray(){
    for(var i=0;i<arguments.length;i++)
        if(!(typeof arguments[i]==='arr' || arguments[i] instanceof Array))
            return false;
    return true;
}