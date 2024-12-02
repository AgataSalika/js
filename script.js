console.log('Hello, world');
let number = 3;
number = 6;
console.log(typeof number);

let str = 'ab';
console.log(typeof str);

let a = number + str
console.log(typeof a);

let b = number + '' // преобразование числа в строку
console.log(b);

a = '6'
b = 12
console.log(+a + b);// преобразование строки в число
console.log(Number(a) + b); // преобразование строки в число

console.log(b > 10);
if (true) {
    console.log('1');
}

// Список false значений falsy), все остальное - true
console.log(Boolean(0));

console.log(Boolean(''));

console.log(Boolean(null));

console.log(Boolean(undefined));

if (b >= 7 && b <= 18) {
    console.log('1');
}
else {
    console.log('2');
}

if (b == 10) {
    console.log('3');
}
console.log('10' == 10); // сравнение только по значению - нестрогое равенство
console.log('10' === 10); //сравнение и по значению, и по типу данных - строгое равенство, лучше использовать его

let g = 45
g = 'str'
g = true
console.log(g);

const f = 10

console.log(f);

let i
console.log(typeof i);

let k = null;
console.log(typeof k);



// Задача 1

let q = 19;

if (q >= 5 && q <= 9) {
    console.log("меньше или равна 9");
}
else if (q === 10) {
    console.log("равна 10");
}
else if (q >= 11 && q <= 18) {
    console.log("меньше или равна 18");
}
 else if (q >= 19) {
    console.log("другое");
}



// Задача 2

let p = 'One'
let r = 'Two'

let s = p + r;
console.log(s);