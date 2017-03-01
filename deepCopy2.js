var util = {

    getType: function(o) { //判断对象类型
        var _t;
        return ((_t = typeof(o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
    },
    deepClone: function(source) { //深拷贝
        var self = this; //保存当前对象引用
        var destination = self.getType(source);
        destination = destination === 'array' ? [] : (destination === 'object' ? {} : source);
        for (var p in source) {
            if (self.getType(source[p]) === "array" || self.getType(source[p]) === "object") {
                destination[p] = self.getType(source[p]) === "array" ? [] : {};
                destination[p] = arguments.callee.call(self, source[p]); //使用call修改函数的作用域
            } else {
                destination[p] = source[p];
            }
        }
        return destination;
    }
};

var obj1 = {
    attr: 100
};

var parent = {
    numbers : [1, 2, 3],
    letters : ['a', 'b', 'c'],
    obj : { prop : 1}, 
    bool : true
};


var obj2 = util.deepClone(parent); //将obj1深拷贝到obj2
obj2.numbers.push(5);
console.log(obj2.numbers);
console.log(parent.numbers); //obj1属性值未发生变化s