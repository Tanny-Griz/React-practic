// 1 Создайте объект car и добавьте в него свойства model, weight, color и метод go(), который в консоль выводит строку 'go и model'.
let car = {
    model: 'model',
    weight: 'weight',
    color: 'color',
    mileage: 'mileage',

    go: function () {
        console.log(`go ${this.model}`);
    }
}
  
// 2 Создайте объект ford, добавьте свойство year. Выведите объект в консоль.
// 6 Создайте у ford метод go(), который выводит информацию о годе производтся и цвете в консоль.
let ford = {
    year: 1990,
    go: function () {
        console.log(`${this.year} ${this.color}`);
    }
}
console.log(ford);

//  3 Задайте в качестве прототипа объекта ford, объект car. Выведите объект ford в консоль.
// ford.__proto__ = car;
Object.setPrototypeOf(ford, car);
console.log(ford);

// 4 Выведите свойства ford.model, ford.weight, ford.color. Запустите метод ford.go().
console.log(ford.model);
console.log(ford.weight);
console.log(ford.color);
ford.go(); // 1990 color

// 5 Добавьте в car новое свойство mileage. Проверьте, появилось ли подобное свойство у ford?
console.log(ford.mileage);

// 7 Вызовите у ford метод go принадлежащий прототипу.
ford.__proto__.go(); // go model

//  Task 8 Создайте объект chevrolet, укажите в качестве прототипа объект ford. Проверьте наличие у chevrolet свойств model, color, mileage и метода go().

// Task 9
// Задайте свой метод go для chevrolet.

// Task 10
// Добавьте для chevrolet два свойства body_style, drive_type.
let chevrolet = {
    body_style: 'сидан',
    drive_type: 'бензин',
    go: function () {
        console.log(`${this.year} года выпуска`);
    }
};

Object.setPrototypeOf(chevrolet, ford);
console.log(chevrolet);

console.log(chevrolet.model);
console.log(chevrolet.color);
console.log(chevrolet.mileage);
chevrolet.go();

// 11 Переберите и выведите с помощью цикла все свойства объекта chevrolet.
for (let key in chevrolet) {
    console.log(key + ": " + chevrolet[key]);
}
