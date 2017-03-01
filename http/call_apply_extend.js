function Pet(words) {
    this.words = words;
    this.speak = function() {
        console.log(this.words);
    }
}

function Dog(words) {
    Pet.call(this, words);
}

var vDog = new Dog('wang');
vDog.speak();