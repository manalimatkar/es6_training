
const arr = [1,2,3,4,5];

const byTwo = arr.map(function (num) {
    return num * 2;
});

byTwo;
// Statment body
const byThree = arr.map((num) => {
    return num * 3;
});

byThree;
// expression body and statment body
const byFive = arr.map(num => num * 3);

byFive;
// return obj by enclosing obj in ()
const rtnObj = arr.map(num => ({
         number :num * 3
    })
);

rtnObj;

// No Arguments

const replaceAll = arr.map(() => 2)

replaceAll;

// lexial this es5 way
var obj = {
    value: 0,
    increment: function () {
        var that = this;
        setTimeout(function() {
           that.value++;
           console.log(that.value); 
        }, 1000)
    }
}

obj.increment();

var newObj = {
    value: 0,
    increment: function () {
        setTimeout(() => {
           this.value++;
           console.log(this.value); 
        }, 1000)
    }
}

newObj.increment();

// exercise
{
    this.x = 10;
    this.y = 10;
    this.vx = 20;
    this.vy = 20;
   
    let obj = {
      x: 0,
      y: 0,
      vx: 5,
      vy: 5,
      update: () => {
        this.x += this.vx;
        this.y += this.vy;
      },
      getPosition: function () {
        return [this.x, this.y];
      }
    }
   
    obj.update();
   
    console.log(obj.getPosition());
    console.log([this.x, this.y]);
  }

//   const person = {
//     name: 'bob',
//     updateName: function () {
//       (function () {
//         this.name = 'suzy'
//       })();
//     }
//   }
//   person.updateName()
//   console.log(person.name);

//   const person = {
//     name: 'bob',
//     updateName: function () {
//     (() => {
//     this.name = 'suzy'
//     })();
//     }
//    }
//    person.updateName()
//    console.log(person.name);
  
   const person = {
    age: 10,
    setAge: function (newAge) {
        this.age = newAge;
    },
    refreshAge: function () {
        fetchAgeFromDb((newAge) => {
            this.setAge(newAge);
        })
    }
}

function fetchAgeFromDb (cb) { cb(20); }
person.refreshAge();
console.log(person.age);


function ListPrefixer (list, prefix) {
    this.list = list;
    this.prefix = prefix;
}
ListPrefixer.prototype.transform = function (cb) {
    this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
    this.transform(function (number) {
        return this.prefix + number;
    })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
    this.transform((number) => {
        return this.prefix + number;
    })
}
 
const request = new ListPrefixer([1, 2, 3], '*');
 
request.applyPrefix();
console.log(request.list);
 
request.applyPrefixArrow();
console.log(request.list);

// exercise

function StringBuilder (string) {
    this.string = string || '';
}

StringBuilder.prototype.append = function (string) {
    return new StringBuilder(this.string + string)
}
StringBuilder.prototype.prepend = function (string) {
    return new StringBuilder(string + this.string)
}
StringBuilder.prototype.pad = function (string) {
    return this.append(string).prepend(string);
}
StringBuilder.prototype.convertChars = function (converter) {
    let oldString = this.string;
    this.string = '';
    for (let i = 0; i < oldString.length; i++) {
      // TODO: Fix this section
      converter(oldString[i], (converted) => {
        this.string += converted;
      })
    }
    return new StringBuilder(this.string);
}