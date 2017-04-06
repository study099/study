/*Напиши функцию создания генератора sequence(start, step). 
Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 
больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается 
при создании генератора. Шаг можно не указывать, тогда он будет равен одному. 
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/
function sequence(start = 0, step = 1){
	var flag = true;
	
	return  () => {
		if(flag){
			flag = false;

			return start;
		}
		
		return start += step;
	}
}

var inc = sequence(2);
console.log(inc());
console.log(inc());
console.log(inc());

var inc2 = sequence(10, 3);
console.log(inc2 ());
console.log(inc2 ());
console.log(inc2 ());