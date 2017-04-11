var cities = [
    {country: "Япония", city: "Токио", population: 37750},
    {country: "Индонезия", city: "Джакарта", population: 31320},
    {country: "Индия", city: "Дели", population: 25735},
    {country: "Южная Корея", city: "Сеул", population: 23575},
    {country: "Филиппины", city: "Манила", population: 22930},
    {country: "Индия", city: "Мумбаи", population: 22885},
    {country: "Пакистан", city: "Карачи", population: 22825},
    {country: "КНР", city: "Шанхай", population: 22685},
    {country: "США", city: "Нью-Йорк", population: 20685},
    {country: "Бразилия", city: "Сан-Паулу", population: 20605},
    {country: "КНР", city: "Пекин", population: 200390}
];

function citiesList(arr, number) {
    if (number > arr.length) {
        this.number = arr.length;
    }

    arr = _.orderBy(arr, 'population', 'desc');

    for (var i = 0; i < number; ++i) {
        console.log("Город: " + arr[i].city + " Население: " + arr[i].population);
    }
}

citiesList(cities, 5);