// дан список вида «страна, город, население»:
// http://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BC%D1%8B%D0%B5_%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D0%B5_%D0%B0%D0%B3%D0%BB%D0%BE%D0%BC%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8#.D0.98.D1.81.D0.BF.D0.BE.D0.BB.D1.8C.D0.B7.D0.BE.D0.B2.D0.B0.D0.BD.D0.BD.D1.8B.D0.B5_.D0.BC.D0.B5.D1.82.D0.BE.D0.B4.D1.8B

// Можешь взять оттуда первые 5-10 городов и перенести в код.
// Города в списке могут идти в произвольном порядке. Напиши программу, которая отберет и 
// выведет N самых населенных городов по убыванию числа жителей.
var cities = [
    {country:"Япония", city:"Токио", population:37750},
    {country:"Индонезия", city:"Джакарта", population:31320},
    {country:"Индия", city:"Дели", population:25735},
    {country:"Южная Корея", city:"Сеул", population:23575},
    {country:"Филиппины", city:"Манила", population:22930},
    {country:"Индия", city:"Мумбаи", population:22885},
    {country:"Пакистан", city:"Карачи", population:22825},
    {country:"КНР", city:"Шанхай", population:22685},
    {country:"США", city:"Нью-Йорк", population:20685},
    {country:"Бразилия", city:"Сан-Паулу", population:20605},
    {country:"КНР", city:"Пекин", population:20390}
];

function citiesList(arr, number) {
    if(number > arr.length) {
        this.number = arr.length;
    }

    for(var i = 0; i < arr.length; ++i){
        for(var j = arr.length - 1; j > i; --j){
            if(arr[i].population < arr[j].population){
                var tmp = arr[i].population;
                arr[i].population = arr[j].population;
                arr[j].population = tmp;

                tmp = arr[i].city;
                arr[i].city = arr[j].city;
                arr[j].city = tmp;
            }
        }
    }

    for(var k = 0; k < number; ++k){
        console.log("Город: " + arr[k].city + " Население: " + arr[k].population);
    }
}

citiesList(cities, 5);