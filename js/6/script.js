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
		var i = 0;
		var j = 0;
		var inner;
		var outer;

		for (i; i < outerParams.length; i++){
		    outer = outerParams[i];

		    if (outer === undefined){
                inner = innerParams[j];
                resultArr.push(inner);
            }
            else{
                resultArr.push(outer);
            }
		}

		for (j; j < innerParams.length; j++){
            inner = innerParams[j];
			resultArr.push(inner);
		}

		return func.apply(this, resultArr);
    }
}

var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3