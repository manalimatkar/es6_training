function print() {
    // es5 way of accessing arguments passed to a function
    console.log(arguments);
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);
}

print(1, 5, 2, 'hello', {});

// example of rest operator to access param/arguments in es6

function es6print(age,sibings,...arr) {
    console.log(age);
    console.log(sibings);
    console.log(arr);
}

es6print(1, 5, 2, 'hello', {});