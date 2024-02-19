// function checkNumber(number) {
//     while (!Number.isInteger(number)) {
//         parseInt(prompt(`Mời bạn nhập lại vào số nguyên ${number}: `));
//     }
//     return number;
// }

// let a = parseInt(prompt("Mời bạn nhập vào số nguyên a: "));
// checkNumber(a);
// let b = parseInt(prompt("Mời bạn nhập vào số nguyên b: "));
// checkNumber(b);
// let c = parseInt(prompt("Mời bạn nhập vào số nguyên c: "));
// checkNumber(c);

// function equation(a, b, c) {
//     let delta = Math.pow(b, 2) - 4 * a * c;
//     if (delta === 0) {
//         alert(`Phương trình có nghiệm kép x1 = x2 = ${-b / (2 * a)}`);
//     } else if (delta > 0) {
//         alert(`Phương trình có nghiệm:
//         x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}
//         x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}
//         `);
//     } else {
//         alert(`Phương trình vô nghiệm`);
//     }
// }

// equation(a, b, c);

// Tong cac so tu 0- 2024

/*
Bài 18: Kiểm tra mật khẩu hợp lệ
    * Mật khẩu hợp lệ có ít nhất 6 kí tự
    * Chứa ít nhất 1 chữ cái viết hoa
    * Chứa ít nhất 1 chữ cái viết thường
    * Chứa ít nhất 1 chữ số
    * Cho người dùng nhập mật khẩu để login: Nếu đúng mở login, nếu sai 5 lần thoát chương trình block tài khoản
*/

// Khởi tạo hàm kiểm tra mật khẩu hợp lệ
// function isPassWordValid(password) {
//     if (password.length < 6) {
//         return false;
//     }

//     let upperPassword = false;
//     let lowerPassword = false;
//     let digitPassword = false;

//     for (let i = 0; i < password.length; i++) {
//         let char = password[i];
//         if (char >= "A" && char <= "Z") {
//             upperPassword = true;
//         } else if (char >= "a" && char <= "z") {
//             lowerPassword = true;
//         } else if (char >= "0" && char <= "9") {
//             digitPassword = true;
//         }
//     }

//     return upperPassword && lowerPassword && digitPassword;
// }

// // Khởi tạo hàm điều khiển mật khẩu
// function setPassword() {
//     let password = prompt(`Mời bạn thiết lập mật khẩu: `);
//     if (isPassWordValid(password)) {
//         alert(`Mật khẩu hợp lệ. Mật khẩu của bạn là: ${password}`);
//         return password;
//     } else {
//         alert(
//             `* Mật khẩu hợp lệ có ít nhất 6 kí tự
//                 * Chứa ít nhất 1 chữ cái viết hoa
//                 * Chứa ít nhất 1 chữ cái viết thường
//                 * Chứa ít nhất 1 chữ số `
//         );
//         setPassword();
//     }
// }

// // Gọi giá trị hàm kiểm tra mật khẩu
// const passwordIsOk = setPassword();

// // Viết chương trình đăng nhập

// let countPassword = 0;

// while (true) {
//     let passwordLogin = prompt(` Mời bạn nhập mật khẩu đăng nhập: `);

//     if (passwordLogin === passwordIsOk) {
//         alert(`Bạn đã đăng nhâp thành công`);
//         break;
//     } else {
//         countPassword++;
//         if (countPassword < 5) {
//             alert(
//                 ` Nhập sai ${countPassword}/5 lần. Mời bạn nhập mật lại khẩu đăng nhập: `
//             );
//         } else {
//             alert(`Bạn đã nhập sai 5 lần> Khóa tài khoản`);
//             break;
//         }
//     }
// }

/*
Bài 19: Chuyển tin nhắn sang mật mã
const a = "qwertyuiopasdfghjklzxcvbnm"
const b = "asdfghjklzxcvbnmqwertyuiop"
*/

// function encryptMessage(message) {
//     const a = "qwertyuiopasdfghjklzxcvbnm";
//     const b = "asdfghjklzxcvbnmqwertyuiop";
//     let result = "";

//     for (let i = 0; i < message.length; i++) {
//         let char = message[i];
//         // Kiem tra ki tu nhap vao co trong bang ma hay khong
//         if (a.includes(char)) {
//             // Chuyen doi
//             // Kiểm tra vị trí index của chuỗi nhập vào trong a
//             let index = a.indexOf(char);
//             // Lấy giá trị index dóng sang b
//             result += b[index];
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }

// // Nhập liệu

// let inputMesage = prompt("Mời nhập tin nhắn ");
// let kq = encryptMessage(inputMesage);
// alert(`Tin nhắn của bạn đã được mã hóa
//     ${kq}`);

/*
Bài 20: Đếm từ tôi trong chuỗi
    const a = "tôi chăm học tôi chịu khó tôi đẹp trai"
    Đếm số lần từ tôi xuất hiện trong chuỗi trên
*/

// const a = "tôi chăm học tôi chịu khó tôi đẹp trai";

// let targetWord = "tôi";
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a.slice(i, i + targetWord.length) === targetWord) {
//         count++;
//     }
// }

// alert(` Số từ ${targetWord} trong chuỗi là : ${count}`);

/*
Bài 21: Viết chương trình tách số và chuỗi thành 2 chuỗi:
    ví dụ nhập vào abc123 sẽ tách thành 2 chuỗi "abc" và "123"
*/

// function separate(inputString) {
//     let letters = "";
//     let numbers = "";

//     for (let i = 0; i < inputString.length; i++) {
//         let char = inputString[i];
//         if (isNaN(char)) {
//             letters += char;
//         } else {
//             numbers += char;
//         }
//     }
//     alert(` Ban da nhap vao ${string}
// Gom chuoi ki tu : ${letters}
// Va chuoi number: ${numbers}`);
//     return inputString;
// }

// let string = prompt(`Moi ban nhap vao mot tin nhan`);
// separate(string);

// console.log(separate(string));

/*
Bài 22: Viết chương trình nhập vào năm sinh in ra số tuổi
*/

// let yearOfBirth = prompt("Nhập năm sinh của bạn:");
// yearOld(yearOfBirth);

// function yearOld(yearOfBirth) {
//     let age = 0;
//     let date = new Date();
//     let currentTimes = date.getTime();
//     let inputYear = new Date(yearOfBirth, 0, 1).getTime();
//     console.log(inputYear);
//     age = parseInt((currentTimes - inputYear) * 3.2 * Math.pow(10, -11));
//     alert(`Bạn ${age} tuổi`);
//     return age;
// }

// function checkAge() {
//     let yearOfBirth = prompt("Nhập năm sinh của bạn:");
//     if (
//         isNaN(yearOfBirth) ||
//         yearOfBirth < 0 ||
//         Number.isInteger(yearOfBirth)
//     ) {
//         alert(`Năm sinh không hợp lệ. Mời nhập lại`);
//         checkAge();
//     } else {
//         yearOld(yearOfBirth);
//     }
// }

// checkAge();

/*
Bài 23: Viết chường trình đếm ngược thời gian làm bài theo giây
*/

function countdownTimer(minutes) {
    let seconds = minutes * 60;

    console.log(`Thoi gian lam bai ${minutes}'(${seconds}s)`);

    const intervalId = setInterval(function () {
        const displayMinutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;

        console.log(`Thoi gian con lai ${displayMinutes}:${displaySeconds}s`);

        if (seconds > 0) {
            seconds--;
        } else {
            console.log("Het thoi gian lam bai");
            clearInterval(intervalId);
        }
    }, 1000);
}

let userInput = function () {
    let inputMinutes = prompt("Nhap vap so phut lam bai tap");
    let minutes = parseInt(inputMinutes);
    if (!isNaN(minutes) && minutes > 0) {
        countdownTimer(minutes);
    } else {
        userInput();
    }
};

userInput();

// function countdownTimer(minutes) {
//     let seconds = minutes * 60;

//     console.log(`Thời gian làm bài: ${minutes} phút (${seconds} giây)`);

//     const intervalId = setInterval(() => {
//         const displayMinutes = Math.floor(seconds / 60);
//         const displaySeconds = seconds % 60;

//         console.log(
//             `Thời gian còn lại: ${displayMinutes} phút ${displaySeconds} giây`
//         );

//         if (seconds > 0) {
//             seconds--;
//         } else {
//             console.log("Hết thời gian làm bài!");
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// // Sử dụng hàm và nhập số phút
// const userInput = prompt("Nhập số phút cần đếm ngược:");
// const minutes = parseInt(userInput, 10);

// if (!isNaN(minutes) && minutes > 0) {
//     countdownTimer(minutes);
// } else {
//     console.log("Vui lòng nhập một số phút hợp lệ và lớn hơn 0.");
// }
