/*
Bài 20: Đếm từ tôi trong chuỗi
    const a = "tôi chăm học tôi chịu khó tôi đẹp trai"
    Đếm số lần từ tôi xuất hiện trong chuỗi trên
*/

const a = "tôi chăm học tôi chịu khó tôi đẹp trai";

let targetWord = "tôi";
let count = 0;

for (let i = 0; i < a.length; i++) {
    if (a.slice(i, i + targetWord.length) === targetWord) {
        count++;
    }
}

alert(` Số từ ${targetWord} trong chuỗi là : ${count}`);
