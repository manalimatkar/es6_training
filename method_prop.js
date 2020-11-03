// es5
var person = {
    firstname: 'bob',
    age: 20,
    haveABday: function () {
        this.age++;
    }
}

person.haveABday();

person;

//es6

var persones6 = {
    firstname: 'bob',
    age: 20,
    haveABday () {
        this.age++;
    }
}

persones6.haveABday();

persones6.haveABday();

persones6;