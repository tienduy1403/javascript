/*
Viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím.
Nhập n=7 bỏ qua không cộng với số 3 in ra kết quả.
Thử break vòng lặp khi chạy đến giá trị n = 3.
*/

let n = parseInt(prompt("Nhập số nguyên n: "));
let sum = 0;
for (let i = 1; i <= n; i += 2) {
    if (i === 3) {
        continue;
    }
    sum += i;
}
console.log(`Tổng các số lẻ từ 1 đến ${n} là : ${sum}`);

let n = parseInt(prompt("Nhập số nguyên n: "));
let i = 1;
let sum = 0;
while (i <= n) {
    if (i === 3) {
        continue;
    }
    sum += i;
    i += 2;
}
console.log(`Tổng các số lẻ từ 1 đến ${n} là : ${sum}`);
