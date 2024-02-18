/*
Vòng lặp for
Tìm tổng các số chẵn nhỏ hơn 10.
*/

let tong = 0;
for (let i = 0; i <= 10; i += 2) {
    if (i !== 0) {
        console.log(`Cac so chan nho hon 10 la ${i}`);
    }
    tong += i;
}
console.log(`Tong cac so chan nho hon 10 la: ${tong}`);

/*
Tìm tổng các số lẻ nhỏ hơn 30.
*/

// let tong = 0;
// for (let i = 1; i < 30; i += 2) {
//     console.log(`Cac so le nho hon 30 la ${i}`);
//     tong += i;
// }
// console.log(`Tong cac so le nho hon 30 la: ${tong}`);
