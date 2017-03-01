function Shape () {
	
}

Shape.prototype.name = 'Shape';
Shape.prototype.toString = function  () {
	return this.name;
}
Shape.prototype.test = function () {
	console.log ( this.name );
}

function TwoDShape () {
		
}

// inheritance
TwoDShape.prototype= Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;

TwoDShape.prototype.name = 'TwoDShape';



function Triangle (side, height) {
	this.side = side;
	this.height = height;
}

Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;

Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function  () {
	return this.side * this.height / 2;
}



var my2 = new TwoDShape();
console.log (my2.toString());

var my = new Triangle(5, 10);

console.log( my.getArea() );
console.log (my.toString());

my.test();

