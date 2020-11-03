const run = true;
let name = 'bob';
if (run) {
    let name = 'charley'
    console.log(name);
}
console.log(name);

const MAX = 10;
let amount = 0;
while (amount++ < MAX) {
  let sum = amount;
}

const ittr = 5
 
for (var i = 0; i < ittr; i++) {
    i
  setTimeout(function() {      
    console.log(i);
  });
}


for (let i = 0; i < ittr; i++) {
    i
  setTimeout(function() {
    console.log(i);
  });
}

const userIds = [1, 2, 3];
const users = [];

// TODO: Fix this for loop by scoping the variable i.
// Do not use a IIFE to get to pass.
// HINT - remember how let and const work with block scope.
for (let i = 0; i < userIds.length; i++) {
    i
    fun(function() {
        i
        users.push({
            userId: userIds[i]
        });
    });
}

function fun(cb) { setTimeout(cb) }