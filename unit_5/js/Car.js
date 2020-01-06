// 1
let car = {
    model: 'model',
    weight: 'weight',
    color: 'color',
    mileage: 'mileage',

    go: function () {
        console.log(`go ${this.model}`);
    }
}
  
// 2
let ford = {
    year: 1990,
    go: function () {
        console.log(`${this.year} ${this.color}`);
    }
}
console.log(ford);

//  3
// ford.__proto__ = car;
Object.setPrototypeOf(ford, car);
console.log(ford);

// 4
console.log(ford.model);
console.log(ford.weight);
console.log(ford.color);
ford.go(); // 1990 color

// 5
console.log(ford.mileage);

// 7
ford.__proto__.go(); // go model

//  8 - 9 - 10
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

// 11
for (let key in chevrolet) {
    console.log(key + ": " + chevrolet[key]);
}
