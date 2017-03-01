function Shape () {}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function  () {
	return this.name;
};


// two shape
function TwoDShape () {};
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;

TwoDShape.prototype.name = 'TwoDShape';

// Triangle
function Triangle (side, height) {
	this.side = side;
	this.height = height;
};

Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;

Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
	return this.side * this.height / 2;
};

var my = new Triangle(3, 5);

console.log( my.getArea() );
console.log( my.toString() );

var my2 = new TwoDShape();
console.log( my2.toString() );

console.log (my.hasOwnProperty('side'));
console.log (my.hasOwnProperty('name'));
