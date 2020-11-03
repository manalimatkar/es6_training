// string literals
var age = 10;
var name = 'Bob';
var msg = `My name is ${name}. My name is ${age}.`;

// multi line

var multiline = `hi, my name is bob,
my age is 10`

console.log(multiline);

const hobbies = [
    'music', 'books', 'travel'
];

const msg2 = `I like to enjoy ${hobbies.join(', ')}`;

console.log(msg2);

const activitiesBang = hobbies.map(function(hobby){
    return `I love ${hobby}!!!!`
}).join(', ');

const msg3 = `My name is Bob and ${activitiesBang}`;

console.log(msg3);

// tags literals
function tag(strings, ...values) {  
    console.log(strings);
    console.log(values);

    let msg = '';
    strings.forEach((str, i) => {
        msg += str;
        if (i < values.length) {
            msg += `<b>${values[i]}</b>` 
        }
    });
    return msg;
}

const msgnew = tag `hello my name is ${name}, my age is ${age}`

console.log(msgnew)

// raw ex: /n in strings

function underscore (strings, ...values) {
    return strings[0].replace(/\s/g, '_');
}
 
const message = underscore`there      is no cow level`
 
console.log(message);


function error (strings, err) {
    error = `status: ${err.status}, message: ${err.message}`
    return `${strings[0]}{${error}}`
}
 
const err = {
    message: 'oh no, an error!',
    status: 404
}
 
const message1 = error`An error has occurred: ${err}`
 
console.log(message1);