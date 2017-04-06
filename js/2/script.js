/*Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает 
массив с результатами вызовов. Она нам пригодится для отладки:*/
function sequence(start, step){
	start = start || 0;
	step = step || 1;
	start -= step;
	
	return function (){
		return start += step;
	}
}

var take = function(func, n){
	var mas = [];

	for(var i = 0; i < n; ++i){
		mas[i] = func();
	}

	return mas;
}

var gen = sequence(0, 2);
console.log(take(gen, 5));
