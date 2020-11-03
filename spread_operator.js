// ES5 example
function print() {
    var args = Array.prototype.slice.call(arguments);
    args = ['<br>'].concat(args).concat(['</br>'])
    console.log(args.join(' '))
}

print('hello', 'world');

// ES6 using spread operator
function es6print(...args) {
    args = ['<br>', ...args, '</br>'];
    console.log(args.join(' '))
}

es6print('hello', 'world');

// spread opertor on iterable object
const msg = 'Hello World, How are you?';

const chars = [...msg];
chars;


// passing arguments with spread

function add(a, b) {

    return a + b;
    
}

const arr = [10,2];

console.log(add(...arr));

// Exercise Code

function User(email, flags = { isActive: false }, numbers = [7, 1]) {
    this.email = email;
    this.flags = flags;
    this.numbers = numbers;
}
const user = new User('testing@gmail.com');
console.log(user);


function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number);
}
 
const answer = sum(1, 5, 20, 10);
 
console.log(answer);


function multiplyBy2(base, ...numbers) {
    return numbers.map(number => number * 2 + base)
}
 
const ans = multiplyBy2(100, 1, 5, 20, 10);
 
console.log(ans);

const names = [
    'bob', 
    ...[
        'donald'
    ],
    'suzy', 
    'lacy',
    ...[
        'richard', 
        'alex'
    ]
   ]
   console.log(names);

const sum1 = Math.min(...[1, 5, -1, -10])
console.log(sum1);

