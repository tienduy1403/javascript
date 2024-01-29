/*
Tính tổng các số từ 1 đến 100 bằng cách sử dụng vòng lặp.
*/
let myString = "",
    sum = 0;
for (let i = 1; i <= 100; i++) {
    myString += `${i} + `;
    sum += i;
}

console.log(`Tổng ${myString} = ${sum}`);
