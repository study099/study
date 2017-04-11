// напиши функцию filter, которая принимает функцию-предикат и массив. 
// Возвращает она массив значений, для которых предикат вернет true.
function isEven(x) { return x % 2 === 0; } // проверяет на четность

function filter(arr, func) {
    var result = [];

    for(var i = 0; i < arr.length; ++i){
        if(func(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}

var input = [1, 2, 3, 4, 5, 6];

console.log(filter(input, isEven)); // [2, 4, 6]
// Функция не должна изменять исходный массив:
console.log(input); // [1, 2, 3, 4, 5, 6]