/*
Task 4
Создайте класс Header. Класс должен содержать следующие свойства - заголовок 1, подзаголовок, девиз, изображение и массив контактов. Добавьте метод рендер, для отрисовки данного заголовка. Создайте объект на основе класса Header и отрисуйте заголовок.
*/

class Header {
    constructor(h1, span, slogan, logo, arrOfContacts) {
        this.h1 = h1;
        this.span = span;
        this.slogan = slogan;
        this.src = logo;
        this.arrOfContacts = arrOfContacts;
    }
    render(x) {
        let out = '';
        out += `<div class="container text-center"> <h1>${this.h1}</h1>`;
        out += `<span>${this.span}</span>`;
        out += `<p>${this.slogan}</p>`;
        out += `<img src=${this.src} alt="header">`;
        out += `<h3>Контакты</h3>`;
        for (let key in this.arrOfContacts) {
            out += `<p>${this.arrOfContacts[key]}</p>`;
        }
        out += `</div>`;
        document.getElementById(x).innerHTML = out; 
    }
}

const logo = 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/flower-64.png';

let myHeader = new Header('Заголовок 1', 'подзаголовок', 'Lorem lorem', logo, [
    telephone = '+38099-000-00-00',
    fax = '01233210',
    email = 'qwerty@gmail.com',
]);
myHeader.render('header');