function deepCopy (p, c) {
	c = c|| {};
	for (var i in p) {
		if (p.hasOwnProperty(i))
		{
			if (typeof p[i] === 'Object')
			{
				c[i] = Array.isArray(p[i]) ? [] : {};
				deepCopy(p[i], c[i]);
			} 
		}
		else
		{
			c[i] = p[i];
		}
	}
	return c;
}

var parent = {
	numbers : [1, 2, 3],
	letters : ['a', 'b', 'c'],
	obj : { prop : 1}, 
	bool : true
};

var mydeep = deepCopy(parent, {});
console.log (mydeep.numbers);

