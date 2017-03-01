function Logger () {
	if (typeof global_log === 'undefined') {
		global_log = this;
	}

	return global_log;
}

var a = new Logger();

a.name = 'logger';
var b = new Logger();

console.log ( a === b);  //true
console.log ( b.name) ;
