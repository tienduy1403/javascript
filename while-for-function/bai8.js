/*
Viết chương trình tính tổng 
S= 1! + 2! + 3! + .... + 10!
*/

// Dùng vòng lặp for
// let i = 1;
// let gt = 1;
// let s = 0;
// for (i = 1; i <= 10; i++) {
//     gt *= i;
//     s += gt;
// }
// console.log(`Tong S = ${s}`);

// Dùng vòng while
let i = 1;
let gt = 1;
let s = 0;
while (i <= 10) {
    gt *= i;
    s += gt;
    i++;
}
console.log(`Tong S = ${s}`);
