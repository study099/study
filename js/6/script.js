// Наша функция partial позволяет фиксировать только первые аргументы.
// Усовершенствуй ее, чтобы зафиксировать можно было любые аргументы, 
// пропущенные аргументы обозначаются с помощью undefined. Обрати внимание, 
// что теперь мы переименовали ее в partialAny, чтобы не путать с предыдущей:
function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }

function partialAny(func) {
	var outerParams = Array.prototype.splice.call(arguments, 1);

	return function () {
		var innerParams = arguments;
		var resultArr = [];

		for (var i = 0; i < outerParams.length; i++){
		    var outer = outerParams[i];
            var argument = outerParams[i] === undefined ? innerParams[0] : outer;

            resultArr.push(argument);
		}

		for (var j = 0 ; j < innerParams.length; j++){
			resultArr.push(innerParams[j]);
		}

		return func.apply(this, resultArr);
    }
}

var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3