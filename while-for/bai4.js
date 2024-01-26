/*
Viết chương trình nhập vào số nguyên n in ra kết quả n!
*/

// Dùng vaongf lặp for;

// let n = parseInt(prompt("Nhap vao so nguyen n:"));
// let giaiThua = 1;
// n = parseInt(prompt("Nhap vao so nguyen n:"));
// while (!Number.isInteger(n) || n < 0) {
//     n = parseInt(prompt("Nhap vao so nguyen n:"));
// }
// for (let i = n; i > 0; i--) {
//     giaiThua = giaiThua * i;
// }
// console.log(`n! = ${giaiThua}`);

// Dùng vòng lặp white

let n = parseInt(prompt("Nhap vao so nguyen n:"));
let giaiThua = 1;
while (!Number.isInteger(n) || n < 0) {
    n = parseInt(prompt("Nhap vao so nguyen n:"));
}
let i = n;
while (i > 0) {
    giaiThua *= i;
    i--;
}
console.log(`n! = ${giaiThua}`);
