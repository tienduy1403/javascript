/*
Bài 15: Dùng hàm function để viết công thức tính n! nhập vào từ bàn phím người dùng.
*/

function tinhGiaiThua(n) {
    let giaiThua = 1;
    for(let i =1; i <= n; i++ ) {
        giaiThua *= i;
    }
    return giaiThua;
}
let n = parseInt(prompt('Nhap vao so n'));
alert(`${n}! = ${tinhGiaiThua(n)}`);