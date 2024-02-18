/*
Sử dụng vòng lặp để in ra dãy số từ 1 đến 10.
*/

// Dùng for
// let myString = "";
// for (let i = 1; i <= 10; i++) {
//     // In ra 1 dãy số trên cùng 1 hàng;
//     myString += `${i}, `;
// }
// console.log(myString);

//  Dungf wwhile
let myString = "",
    i = 1;
while (i <= 90) {
    myString += `${i}, `;
    i++;
}
console.log(myString);
