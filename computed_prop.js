//es5

var key = 'lastname';

var person = {
    firstname: 'bob'
}

person[key] = 'harvey';

person;

//es6

function getKey() {
    return 'newKey'
}

var es6person = {
    firstname: 'bob',
    [key]: 'harvey',
    [getKey()]: 'This is from getter'
}

es6person;

// exercise

const confused = 'no';
const myKey = confused;
const obj = {
    [myKey]: false
}
console.log(obj);

