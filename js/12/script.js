// Некая сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Дополнительно, гамбургер можно посыпать приправой (+ 15 тугриков, 0 калорий) и 
// полить майонезом (+ 20 тугриков, + 5 калорий). Напиши программу, расчиытвающую 
// стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, 
// 	методы для выбора опций и рассчета нужных величин).

// Код должен быть защищен от ошибок. Представь, что твоим классом будет пользоваться другой программист.
// Если он передает неправильный тип гамбургера, например, или неправильный вид добавки, 
// должно выбрасываться исключение (ошибка не должна молча игнорироваться).
Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_LARGE = {price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
Hamburger.TOPPING_MAYO = {price: 20, calories: 5};
Hamburger.TOPPING_SPICE = {price: 15, calories: 0};

function Hamburger(size, stuffing) {
    if (size === undefined || stuffing === undefined) {
        console.log("Wrong data");
    }
    else {
        this.size = size;
        this.stuffing = stuffing;
    }
}

var toppingArr = [];

Hamburger.prototype.addTopping = function (topping) {
    this.topping = topping;
    var ex = false;

    if (toppingArr[0] === undefined) {
        toppingArr.push(this.topping);
    }
    else {
        for (var i = 0; i < toppingArr.length; ++i) {
            if (this.topping === toppingArr[i]) {
                console.log("Topping exists");
                ex = true;
            }
        }
        if (!ex) {
            toppingArr.push(this.topping);
        }
    }
    return toppingArr;
}

Hamburger.prototype.removeTopping = function (topping) {
    if (this.topping === undefined) {
        console.log("Such a topping doesn't exist");
    }
    else if (this.topping === toppingArr[0]) {
        toppingArr.shift();
    }
    else {
        toppingArr.pop();
    }

    return toppingArr;
}

Hamburger.prototype.getToppings = function () {
    return toppingArr;
}

Hamburger.prototype.getSize = function () {
    if (this.size === Hamburger.SIZE_SMALL) {
        return Hamburger.SIZE_SMALL;
    }

    return Hamburger.SIZE_LARGE;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing === Hamburger.STUFFING_CHEESE ? console.log("Cheese") :
        (this.stuffing === Hamburger.STUFFING_SALAD ? console.log("Salad") : console.log("Potato"));
}

Hamburger.prototype.calculatePrice = function () {
    var sumTopping = 0;

    for (var i = 0; i < toppingArr.length; ++i) {
        sumTopping += toppingArr[i].price;
    }

    return this.size.price + this.stuffing.price + sumTopping;
}

Hamburger.prototype.calculateCalories = function () {
    var sumCalories = 0;

    for (var i = 0; i < toppingArr.length; ++i) {
        sumCalories += toppingArr[i].calories;
    }

    return this.size.calories + this.stuffing.calories + sumCalories;
}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1