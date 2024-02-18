/*
viết chương trình nhập vào số nguyên a > 0 từ bán phím 
Cho biết số a có phải số nguyên tố
 SNT là số > 1 chỉ chia hết cho 1 và chính nó.
*/

while (true) {
    let a = Number(prompt("Nhap so nguyen a > 0:"));
    while (!Number.isInteger(a) || a <= 0) {
        a = Number(prompt("Nhap so nguyen a > 0:"));
    }

    let isPrime = true;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }
    //Kiem tra so nguyen to
    if (isPrime === false || a === 2 || a === 1) {
        alert(`So ${a} khong la SNT`);
    } else {
        alert(`So ${a} la SNT`);
    }
    let b = prompt("Co muon thoat chuong trinh khong. Nhan phim N/n de thoat:");
    if (b === "n" || b === "N") {
        break;
    }
}
