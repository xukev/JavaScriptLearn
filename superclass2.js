function extend (Child, Parent) {
	var F = function  () {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
}


function Shape () {
	
}

Shape.prototype.name = 'Shape';
Shape.prototype.toString = function  () {
	var ctor = this.constructor;
	return ctor.uber ? ( ctor.uber.toString() + ', ' + this.name ) :  this.name;
}

function TwoDShape () {
	
}

extend(TwoDShape, Shape);
TwoDShape.prototype.name = 'TwoDShape';


function Triangle (side, height) {
	this.side = side;
	this.height = height;
}


extend(Triangle, TwoDShape);
Triangle.prototype.getArea = function  () {
	return this.side * this.height /2 ;
}


Triangle.prototype.name = 'Triangle';



// verify
var my = new Triangle(4, 5);

console.log ( my.getArea() );
console.log ( my.toString() ); 
console.log (my.name);