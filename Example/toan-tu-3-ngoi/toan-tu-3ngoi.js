// Toán tử 3 ngôi
//Nhâpj vào điểm trung bình , xuất ra xếp loại học lực ccủa học sinh.
let diemTb = parseFloat(prompt("Nhap vao diem trung binh mon:"));

let xepLoai =
    diemTb >= 8
        ? "Giỏi"
        : diemTb >= 6.5
        ? "Khá"
        : diemTb >= 5
        ? "Trung Bình"
        : "Yếu";
console.log(`Xếp loại : ${xepLoai}`);
