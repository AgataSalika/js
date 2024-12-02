let a = 5;

while (a > 0) {
console.log(a);
a = a - 1;
}

do {
    console.log(a);
    a = a - 1;
} while (a > 0)


    
// for (начало; условие; шаг) {
// ... тело цикла ...
// }

// -начало let i = 0 Выполняется один раз при входе в цикл
// -условие i < 3 Проверяется перед каждой итерацией цикла.
// Если оно вычислится в false, цикл остановится.
// -тело console.log(i) Выполняется снова и снова, пока условие вычисляется в true.
// -шаг i++ Выполняется после тела цикла на каждой итерации перед проверкой условия.

for (let i = 0; i < 3; i = i+1) {
    console.log(i);
}
 
// найти четные числа до 20ти, шаг одиныковый, меняем стартовое число
for (let i = 20; i > 0; i = i-2){
    console.log(i);
}

// найти нечетные числа до 21го
for (let i = 21; i > 0; i = i-2){
    console.log(i);
}


for (let i = 1; i <= 100; i = i+3){
    console.log(i);
}

let text = 'we '
console.log(text[2]);

console.log(text.length);
for (let i = 0; i < text.length; i++){
    console.log(text[i]);
}

for (let el of text){
    console.log(el);
}

const letters = ['a', 'b', 'c', 'd', 'e'];

console.log(letters.length);

for (let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}

for (let letter of letters){
    console.log(letter);
}