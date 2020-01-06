/*Task 2
Работаем в нативном JS. Создайте класс Car описывающий машину. Класс должен содержать свойства brand, name, weight, fuel_type, color, img. Типы данных определите самостоятельно. Создайте объект на основе класса и заполните данными. Выведите в консоль. Все классы подключать отдельным файлом.

Task 3
Добавьте в предыдущий класс Car метод render - который отрисовывает данные об объекте в указанный блок на странице.

Task 5
Используя класс Car создайте несколько объектов на основе класса Car. Выведите созданные объекты на страницу.
*/

class Car {
    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.src = img;
        cars.push(this);
    }
    render(x) {
        let out = '';
        out += `<div class="container">
                <div class="row">
                    <div class="col text-center mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${this.src} class="card-img-top" alt="car">
                            <div class="card-body">
                                <h5 class="card-title">${this.brand}</h5>
                                <p class="card-text">fuel type: ${this.fuel_type}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">name: ${this.name}</li>
                                <li class="list-group-item">weight: ${this.weight}</li>
                                <li class="list-group-item">color: ${this.color}</li>
                            </ul>
                        </div>
                    </div>
                </div>
               </div>`
        document.getElementById(x).innerHTML += out;     
    }
}
        
const cars = [];  

let volvo = new Car('Volvo', 'Volvo V90', 1927, '4-цилиндровый дизельный двигатель с двойной турбиной', "red", './images/volvo.jpg');

let audi = new Car('Audi', '123', 2000, '4-цилиндровый дизельный двигатель с двойной турбиной', "black", './images/audi.jpg');

let mazda = new Car('Mazda', '456', 3000, '4-цилиндровый дизельный двигатель с двойной турбиной', "White", './images/mazda.jpg');

function showCars(arr) {
    arr.forEach(function(item) {
        item.render('cards');
    })
}

showCars(cars);