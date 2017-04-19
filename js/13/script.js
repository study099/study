// В одном городе есть электрическая сеть. К ней могут быть подключены:
//
//     электростанции, вырабатывают мощность от 1 до 100 мегаватт
//
//     солнечные панели, генерируют от 1 до 5 мегаватт днем (в зависимости от вида панели, то есть некоторые
// панели генерируют 1 мегаватт, некоторые 2 и так далее) и 0 ночью
//
//     жилые дома, в них от 1 до 400 квартир, потребляют 4 кВт на квартиру днем и 1 кВт ночью.
//
//     линии электропередач, ведущие в другие города, по ним может подаваться недостающая или отдаваться
// лишняя энергия. У линий есть свойство «мощность», которая определяет, сколько мегаватт можно передать по
// ней, а также «цена мегаватта», которое показывает сколько можно получить или придется заплатить за
// переданный/полученный мегаватт. На разных линиях может быть разная цена.
//
//     Дан список всех элементов электросети. Напиши программу, рассчитывющую, сколько электричества
// необходимо закупить (или можно продать) днем и ночью для обеспечения баланса и сколько это будет стоить
// (или принесет прибыли). Используй продвинутый ООП подход для решения задачи.
"use strict";

class UserException extends Error {
    constructor(message) {
        super();
        this.message = message || "Unknown error";
        this.name = "Error";
        this.stack = (new Error()).stack;
    }
}

class PowerStation {
    constructor(power) {
        try {
            this.power = power;

            if (typeof power !== "number" || (power < 1 || power > 100)) {
                this.power = 1;
                throw new UserException("Invalid parameter. Must be from 1 to 100. Default value is 1");
            }
        }
        catch (e) {
            console.log(e.name);
            console.log(e.message);
        }
    }

    getPower() {
        return this.power;
    }
}
class SolarPanel {
    constructor(power) {
        try {
            this.power = power;

            if (typeof power !== "number" || power < 1 || power > 5) {
                this.power = 1;
                throw new UserException("Invalid parameter. Must be from 1 to 5. Default value is 1");
            }
        }
        catch (e) {
            console.log(e.name);
            console.log(e.message);
        }
    }

    getPowerDay() {
        return this.power;
    }

    getPowerAtNight() {
        return 0;
    }
}

class ResidentialBuilding {
    constructor(apartment) {
        try {
            this.apartment = apartment;

            if (typeof apartment !== "number" || apartment < 1 || apartment > 400) {
                this.apartment = 1;
                throw new UserException("Invalid parameter. Must be from 1 to 400. Default value is 1");
            }
        }
        catch (e) {
            console.log(e.name);
            console.log(e.message);
        }
    }

    getConsumptionDay() {
        return this.apartment * 4 / 1000;
    }

    getConsumptionNight() {
        return this.apartment / 1000;
    }

}

class ElectricSystem {
    constructor(power, price) {
        this.power = power;
        this.price = price;
        try {
            try {
                if (typeof power !== "number") {
                    this.power = 1;
                    throw new UserException("Invalid parameter. Default power's value is 1")
                }
            }
            catch (e) {
                console.log(e.name);
                console.log(e.message);
            }
            try {
                if (typeof price !== "number") {
                    this.price = 1;
                    throw new UserException("Invalid parameter. Default price's value is 1")
                }
            }
            catch (e) {
                console.log(e.name);
                console.log(e.message);
            }
        }
        catch (e) {
        }
    }

    getCalculation() {
        return this.power * this.price;
    }
}

let pw = new PowerStation(10);
// console.log(pw.getPower());
let sp = new SolarPanel(3);
let rb = new ResidentialBuilding(10);
// console.log(rb.getApartmentNight());
let els = new ElectricSystem(11, 11);
// console.log(els.getCalculation());
// solar(pw);
let arr = [rb, sp];
els.mimim(rb, sp);