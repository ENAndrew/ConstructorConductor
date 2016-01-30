//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
    this.name = name;
    this.age = age;
}


//Now create three instances of Person with data you make up

var erica = new Person('Erica', 35);
var wayne = new Person('Wayne', 35);
var sarah = new Person('Sarah', 16);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
    alert(this.name);
};
