/*
Dưới đây là một đoạn mã JavaScript để in ra bảng cửu chương từ 1 đến 10:
*/

// Lặp vòng ngoài (vòng bảng) từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    // Lặp vòng trong tăng giá trị từ 1 đến 10
    for (let n = 1; n <= 10; n++) {
        multiplication = i * n;
        console.log(`${i} x ${n} = ${multiplication}`);
    }
    console.log("\n");
}
