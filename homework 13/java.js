// // Задание #1
// const numbers = [0, 1, false, 2, undefined, '', 3, null];
// console.log(numbers[1])
// console.log(numbers[3])
// console.log(numbers[6])

// // Задание #2
// const rundomNumberArr= [0,5,25,78,95,46,24,65,81,37,154,954];
// let sum = 0;
// //Сумма
// for(let count = 0; count < rundomNumberArr.length ; count++) {
//     sum = sum + rundomNumberArr[count]
// }
// console.log("Сумма:", sum);
// //Среднее число
// let result = sum / [0,5,25,78,95,46,24,65,81,37,154,954].length;
// console.log("Среднее арифметическое число:", result);

// //Проверка на наличие числа
// console.log(rundomNumberArr.includes(25));
// console.log(rundomNumberArr.includes(27));
// console.log(rundomNumberArr.includes(65));

//Задание #3
for (let i = 0; i < 10; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(Math.random() * 20); j++) {
        count++;
    }
    console.log(count);
}