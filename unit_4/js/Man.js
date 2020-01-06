/*Task 1
Создайте класс Man, класс должен описывать человека и содержать свойства name, age, passport, sex. Создайте на его основе объект man. Выведите объект в консоль.

Task 2
Создайте класс Employer, который будет наследоваться от Man. Класс должен содержать поля create - дату начала работы, salary. Создайте объект employer на основе Employer. Заполните поля, выведите в консоль.

Task 3
Добавьте в класс Man метод render, который будет выводить все поля объекта созданного на основе класса Man (параграфами).

Task 4
Примените метод render к man и выведите его содержимое в .out-1.

Task 5
Примените метод render к employer и выведите его содержимое в .out-2. Как видите поля create, salary не выводятся.

Task 6
Поскольку у Employer метод render не выводит все новые поля, то их желательно добавить. Вначале сделаем в лоб - просто создайте метод render еще раз в Employer (скопируйте его из Man) и добавьте в "лоб" новые поля. Убедитесь что метод работает.

Task 7
Но, перезаписывать методы - идея так себе, в чем тогда смысл наследования? Давайте попробуем дополнить метод. Закомментируйте метод render в Employer. Теперь напишите:

render(x) {
    super.render(x); 
    а здесь будет ваш код, который довыводит новые поля в объект x
  }
Как видно, super позволяет обращаться к методам класса родителя!

Task 8
Создайте для Employer геттер для получения имени клиента. Само свойство name, переделайте в _name. Продемонстрируйте работу.

Task 9
Создайте для Employer сеттер для сохранения имени клиента в свойство _name. Сеттер должен проверять имя на строку, обрезать пробелы. Продемонстрируйте работу.
*/

class Man {
    constructor(name, age, sex, passport) {
        this._name = name;
        this.age = age;
        this.sex = sex;
        this.passport = passport;
    }
    render(x) {
        let out = '';
        out += `<div class="container">
                    <p>${this._name}</p>
                    <p>${this.age}</p>
                    <p>${this.sex}</p>
                    <p>${this.passport}</p>
                </div>`;
        document.getElementById(x).innerHTML = out;
    }
}

let man = new Man('Andy', 33, 'male', 'UA');
console.log(man);
man.render('out-1');

class Employer extends Man {
    constructor(name, age, sex, passport, create, salary) {
        super(name, age, sex, passport);
        this.create = create;
        this.salary = salary;
    }
    // render(x) {
    //     let out = '';
    //     out += `<div class="container">
    //                 <p>${this.name}</p>
    //                 <p>${this.age}</p>
    //                 <p>${this.sex}</p>
    //                 <p>${this.passport}</p>
    //                 <p>${this.create}</p>
    //                 <p>${this.salary}</p>
    //             </div>`;
    //     document.getElementById(x).innerHTML = out;
    // }
    render(x) {
        super.render(x); 
        
        let out = '';
        out += `<div class="container">
                <p>${this.create}</p>
                <p>${this.salary}</p>
                </div>`;
        document.getElementById(x).innerHTML += out;
        }
    get showName() {
        return this._name;
    };
    set saveName(n) {
        if (typeof n == 'string') {
            this._name = n.trim();
        }
        else {
            return false
        }
    };
}

let employer = new Employer('Anna', 27, 'famale', 'UA', '10.10.2020', 500);
console.log(employer);

employer.render('out-2');

console.log(employer.showName); // Anna

employer.saveName = 'Annabel';
console.log(employer.showName); // Annabel