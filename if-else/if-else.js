/*
Bài tập if - else


Bài 1: Tính điểm trung bình học lực
*/

let score = parseFloat(prompt("Nhap diem trung binh"));

if (score <= 10 && score >= 8) {
    console.log("Hoc sinh gioi");
} else if (score < 8 && score >= 6.5) {
    console.log("Hoc sinh Kha");
} else if (score < 6.5 && score >= 5) {
    console.log("Hocj sinh Tring binh");
} else if (score < 5 && score >= 0) {
    console.log("Hoc sinh Yeu");
} else {
    console.log("Nhap ngu");
}

/*-------------------------------------------------------------*/

/*
Bài 2: Tìm x và y khi nhập vào tổng và hiệu của chúng
*/

let tong = parseFloat(prompt("Nhap Tong cua 2 so")),
    hieu = parseFloat(prompt("Nhap Hieu cua 2 so"));

x = (tong + hieu) / 2;
y = x - hieu;

if (isNaN(tong) || isNaN(hieu)) {
    console.log("Moi nhap lai gia tri tong va hieu");
} else {
    console.log(`X co gia tri la : ${x}`);
    console.log(`y co gia tri la : ${y}`);
}

/*-------------------------------------------------------------*/

/*
Bài 3: Nhap chieu cao can nang tinh BMI
*/

let chieuCao = parseFloat(prompt("Nhap chieu cao: (m)")),
    canNang = parseFloat(prompt("Nhap can nang: (kg)")),
    BMI = canNang / Math.pow(chieuCao, 2);

if (BMI >= 35) {
    alert("Than hinh qua beo");
} else if (BMI < 35 && BMI >= 30) {
    alert("Than hinh beo");
} else if (BMI < 30 && BMI >= 25) {
    alert("Than hinh hoi beo");
} else if (BMI < 25 && BMI >= 18.5) {
    alert("Than hinh binh thuong");
} else if (BMI < 18.5 && BMI >= 16) {
    alert("Than hinh hoi gay");
} else if (BMI < 16 && BMI >= 15) {
    alert("Than hinh gay");
} else if (BMI < 15) {
    alert("Than hinh qua gay");
} else {
    alert("Moi nhap lai thong so");
}

/*-------------------------------------------------------------*/

/*
Bài 4: Năm nhuận
// // Điều kiện (chia hết cho 4 và không chia hết cho 100) hoặc (chia hết cho 400);
*/

let year = parseInt(prompt("Nhap vao mot nam duong lich bat ki"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`Nam ${year} la nam nhuan`);
} else if (Number.isNaN(year)) {
    console.log(`Moi nhap lai`);
} else {
    console.log(`Nam ${year} la nam khong nhuan`);
}

/*-------------------------------------------------------------*/

/*
Bài 6: Chương trình nhập vào tháng và cho biết tháng đó có bao nhiêu ngày.
// Tháng 1, 3, 5 ,7 ,8 ,10, 12 có 31 ngày
// Tháng 4, 6, 9 ,11 có 30 ngày.
// Tháng 2 nhuận có 29 ngày
//Tháng 2 không nhuận có 28 ngày.
*/

let month = parseInt(prompt("Nhap vao mot thang bat ki tu 1 den 12"));

if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
) {
    console.log(`Thang ${month} co 31 ngay`);
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log(`Thang ${month} co 30 ngay`);
} else if (month == 2) {
    year = parseInt(prompt("Moi nhap nam"));

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`Thang ${month} nam ${year} co 29 ngay`);
    } else {
        console.log(`Thang ${month} nam ${year} co 28 ngay`);
    }
} else {
    month = parseInt(
        prompt(
            "Thang ban nhap khong dung vui long nhap lai 1 thang bat ki tu thang 1 den thang 12"
        )
    );
}

/*-------------------------------------------------------------*/

/*
Bài 7: Giải phương trình bậc 2. ax^2 + bx + c = 0
Giải: 
B1: Tính delta = b^2 - 4ac.
B2: delta < 0 => Vô nghiệm
    delta = 0 => nghiệm kép x1 = x2 = -b/2a;
    delta > 0  
    => x1 = (-b + Math.sqrt(delta)) / 2a
    => x1 = (-b - Math.sqrt(delta)) / 2a
*/

let a = parseInt(prompt("Nhap so nguyen a: ")),
    b = parseInt(prompt("Nhap so nguyen b: ")),
    c = parseInt(prompt("Nhap so nguyen c: ")),
    delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
    console.log("Phuong trinh vo nghiem");
} else if (delta === 0) {
    console.log(`x1 = x2 =%s`, (-b / 2) * a);
} else if (delta > 0) {
    console.log(`x1 = %s`, ((-b + Math.sqrt(delta)) / 2) * a);
    console.log(`x2 = %s`, ((-b - Math.sqrt(delta)) / 2) * a);
}

/*-------------------------------------------------------------*/

/*
Bài 8:  Nhập vao tháng trong năm cho biết tháng đó thyộc quý mấy
*/

let month = parseInt(prompt("Nhap thang bat ki tu 1 den 12"));

if (month == 1 || month == 2 || month == 3) {
    console.log(`Thang ${month} thuoc quy 1`);
} else if (month == 4 || month == 5 || month == 6) {
    console.log(`Thang ${month} thuoc quy 2`);
} else if (month == 7 || month == 8 || month == 9) {
    console.log(`Thang ${month} thuoc quy 3`);
} else if (month == 10 || month == 11 || month == 12) {
    console.log(`Thang ${month} thuoc quy 4`);
} else {
    console.log(`Moi nhap lai`);
}
