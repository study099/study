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
    try {
        this.size = size || Hamburger.SIZE_SMALL;
        this.stuffing = stuffing || Hamburger.STUFFING_CHEESE;

        if ((typeof size !== "object" || typeof size === undefined) || (typeof stuffing !== "object" || typeof stuffing === undefined)) {
            throw new HamburgerException("Invalid parameters. Must be known constant. Default value for size - small, for stuffing - cheese");
        }
    }
    catch (e) {
        console.log(e.name + " " + e.message);
    }
}

var toppings = [];

function dataValidation(param) {
    try {
        if (param === undefined || typeof param !== "object") {
            throw new HamburgerException("Invalid parameter. Must be known constant");
        }
    }
    catch (e) {
        console.log(e.name + " " + e.message);
    }
}

Hamburger.prototype.addTopping = function (topping) {
    dataValidation(topping);

    var toppingExistance = false;

    if (toppings[0] === undefined) {
        toppings.push(topping);
    }
    else {
        if (toppings.indexOf(topping) === 0 || toppings.indexOf(topping) === 1) {
            console.log("Topping exists");
            toppingExistance = true;
        }

        if (!toppingExistance) {
            toppings.push(topping);
        }
    }

    return toppings;
}

Hamburger.prototype.removeTopping = function (topping) {
    dataValidation(topping);

    if (topping === toppings[0]) {
        toppings.shift();
    }
    else {
        toppings.pop();
    }

    return toppings;
}

Hamburger.prototype.getToppings = function () {
    return toppings;
}

Hamburger.prototype.getSize = function () {
    return this.size === Hamburger.SIZE_SMALL ? Hamburger.SIZE_SMALL : Hamburger.SIZE_LARGE;
}

Hamburger.prototype.getStuffing = function () {
    switch (this.stuffing) {
        case Hamburger.STUFFING_SALAD:
            console.log("Stuffing is salad");
            break;
        case Hamburger.STUFFING_POTATO:
            console.log("Stuffing is potato");
            break;
        default:
            console.log("Stuffing is cheese");
    }
}

Hamburger.prototype.calculatePrice = function () {
    var sumTopping = 0;

    for (var i = 0; i < toppings.length; ++i) {
        sumTopping += toppings[i].price;
    }

    return this.size.price + this.stuffing.price + sumTopping;
}

Hamburger.prototype.calculateCalories = function () {
    var sumCalories = 0;

    for (var i = 0; i < toppings.length; ++i) {
        sumCalories += toppings[i].calories;
    }

    return this.size.calories + this.stuffing.calories + sumCalories;
}
//Функция-класс для обработки исключительных ситуаций
function HamburgerException(message) {
    this.message = message || "Unknown error";
    this.name = "Hamburger constructor error";
    this.stack = (new Error()).stack;
}

HamburgerException.prototype = Object.create(Error.prototype);
HamburgerException.prototype.constructor = HamburgerException;

// маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger();//для проверки исключения
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
hamburger.getStuffing();