//circle
function AreaCircle(r){
    return Math.PI * r * r;
}
function CircumferenceCircle(r){
    return 2 * Math.PI * r;
}

//rectangle
function AreaRectangle(l,b){
    return l * b;
}
function PerimeterRectangle(l,b){
    return 2 * (l + b);
}
//square
function AreaSquare(a){
    return a * a;
}
function PerimeterSquare(a){
    return 4 * a;
}


module.exports={
    AreaCircle,
    CircumferenceCircle,
    AreaRectangle,
    PerimeterRectangle,
    AreaSquare,
    PerimeterSquare
}