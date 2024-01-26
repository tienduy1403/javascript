/*
Viết chương trình nhập vào 1 số nguyên từ 1 đếm 99 . Nhập sai bắt nhập lại.
*/

let n = parseInt(prompt("Nhập một số nguyên (1-99):"));

while (isNaN(n) || n < 1 || n > 99) {
    n = parseInt(prompt("Không đúng. Nhập lại một số nguyên (1-99):"));
}

alert(`Bạn đã nhập số ${n}`);
