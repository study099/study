// Напиши функцию bind, которая позволяет привязать контекст (значение this) к функции:
function testThis(a) { console.log("x=" + this.x + ", a=" + a); }

function bind(func, ctx) {
	return function () {
		return func.apply(ctx, arguments);
    }
}

window.x = 1;
var ctx = { x: 2 };

console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100