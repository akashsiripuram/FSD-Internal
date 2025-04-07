const {AreaCircle, CircumferenceCircle, AreaRectangle, PerimeterRectangle, AreaSquare, PerimeterSquare} = require('./Shapes.js');

console.log("Area of circle with radius 5:", AreaCircle(5));
console.log("Circumference of circle with radius 5:", CircumferenceCircle(5));

console.log("Area of rectangle with length 5 and breadth 10:", AreaRectangle(5, 10));
console.log("Perimeter of rectangle with length 5 and breadth 10:", PerimeterRectangle(5, 10));

console.log("Area of square with side 4:", AreaSquare(4));
console.log("Perimeter of square with side 4:", PerimeterSquare(4));