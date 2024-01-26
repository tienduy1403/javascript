/*
Tìm những số chia hết cho 3 từ 10 đến 50
*/

for (let i = 10; i >= 10 && i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

let i = 10;
while (i >= 10 && i < 50) {
    i++;
    if (i % 3 === 0) {
        console.log(i);
    }
}
