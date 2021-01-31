// *******JS2 LESSON1 Homework*******

const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 500 },
    { id: 3, title: 'Keyboard', price: 400 },
    { id: 4, title: 'Gamepad', price: 1000 }
];

//Function for layout in HTML

const renderProduct = (title, price) => {
    return `
    <div class="product_item">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="buy_btn"> Buy </button>
    </div>`

};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);






//JS2 LESSON 1

// var obj = { a: 1, b: 2 };
// var mas = Object(obj);

// console.log(mas);

// function info(result) {
//     if (result) {
//         let firstName = "Ivan";
//         let birthday = "1984";
//         console.log(firstName + " рожден в " + birthday + " году")
//     }

// }

// info(1);

// let i = 1;
// for (let i = 1; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);

// 
// let lastName = "Ivan";
// let firstName = "Ivanov";
// let birthYear = "1984";

// function calcAge(year) {
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     return currentYear - year;
// }

// const FIO = `${lastName} ${firstName}, born in ${birthYear}, is ${calcAge(birthYear)}`;

// console.log(FIO.);

// let summ = function (a, b) {
//     return a + b;
// }

// 

// let box = {
//     color: 'yellow',
//     position: 1,
//     clickMe: function () {
//         document.querySelector("#box").addEventListener("click", function () {
//             console.log(this);
//             let str = `Container number ${this.position}, color ${this.color}`;
//             console.log(str);

//         });
//     }
// }
// box.clickMe();

// let box = {
//     color: 'yellow',
//     position: 1,
//     clickMe: function () {
//         document.querySelector("div").addEventListener("click", () => {
//             console.log(this);
//             let str = `Container number ${this.position}, color ${this.color}`;
//             console.log(str);

//         });
//     }
// }
// box.clickMe();


// let mas = ["Ivan", 30];
// let [name, age] = mas;
// console.log(`${name}, ${age}`)


// let obj = {
//     firstName: "Timur",
//     lastName: "Vos",
//     proffession: ["Enegeneer", "Admin"]
// }

// let { firstName: name, lastName, proffession: [p1, p2] } = obj;
// console.log(`${name}, ${lastName}, ${p1}, ${p2}`);


// let f = year => {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];

// }

// let [myAge, lefTillPension] = f(1984);

// console.log(`${myAge}, ${lefTillPension}`);



// let s = 0;
// [10, 20, 30].forEach((item) => {
//     s += item;

// })

// alert(s);

// function restTest(a, b, ...c) {
//     console.log(c);
// }
// restTest(1, 2, 3, 4, 5);

// const values = [26, 256, 34, 6599];
// console.log()

// let calcArgs = (a, b, c, d) => a + b + c + d;
// const arr = [1, 2, 3, 4];
// console.log(calcArgs(...arr));

// let langs = ["js", "php", "java"];
// let size = langs.map(item => item.length);
// console.log(size);

