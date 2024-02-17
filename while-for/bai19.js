/*
Bài 19: Chuyển tin nhắn sang mật mã
const a = "qwertyuiopasdfghjklzxcvbnm"
const b = "asdfghjklzxcvbnmqwertyuiop"
*/

function encryptMessage(message) {
    const a = "qwertyuiopasdfghjklzxcvbnm";
    const b = "asdfghjklzxcvbnmqwertyuiop";
    let result = "";

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        // Kiem tra ki tu nhap vao co trong bang ma hay khong
        if (a.includes(char)) {
            // Chuyen doi
            // Kiểm tra vị trí index của chuỗi nhập vào trong a
            let index = a.indexOf(char);
            // Lấy giá trị index dóng sang b
            result += b[index];
        } else {
            result += char;
        }
    }

    return result;
}

// Nhập liệu

let inputMesage = prompt("Mời nhập tin nhắn ");
let kq = encryptMessage(inputMesage);
alert(`Tin nhắn của bạn đã được mã hóa
    ${kq}`);
