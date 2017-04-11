// Напиши функцию, считающую число свойств в объекте:
function count(arr) {
    var counter = 0;

    for(var key in arr){
        if(arr.hasOwnProperty(key)){
            ++counter;
        }
    }

    return counter;
}

var a = { a: 1, b: 2 };
console.log(count(a)); // 2
var b = function () {};
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1