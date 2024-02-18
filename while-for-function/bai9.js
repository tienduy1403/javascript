/*
Tìm các số hoàn hảo trong đoạn từ 1 đến 1000
Số hoàn hảo là các số có tổng các ước thực bằng chính nó. 
*/

//  Tìm số trong đoạn 1 đến 1000
for (let n = 1; n <= 1000; n++) {
    let sum = 0;
    // Tìm tổng các ước của số n
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    // Kiểm tra xem tổng các tước có bằng số n không
    if (sum === n) {
        console.log(n);
    }
}
