// Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать 
// один или несколько аргументов функции. Пример:

// function add(a, b) { return a + b; }
// function mult(a, b, c, d) { return a * b * c * d; }

// var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

// console.log(add5(2)); // 7
// console.log(add5(10)); // 15
// console.log(add5(8)); // 13

// var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

// console.log(mult23(4, 5)); // 2*3*4*5 = 120
// console.log(mult23(1, 1)); // 2*3*1*1 = 6
function add(a, b) { return a + b; }

function mult(a, b, c, d) { return a * b * c * d; }

function partial(func) {
	var outerParams = Array.prototype.splice.call(arguments, 1);

	return function () {
		var innerParams = arguments;
		var resultArr = [];
		
		for (var i = 0; i < outerParams.length; i++){
			var outer = outerParams[i];
			resultArr.push(outer);
		}

		for (var j = 0; j < innerParams.length; j++){
			var inner = innerParams[j];
			resultArr.push(inner);
		}

		return func.apply(this, resultArr);
    }
}

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6