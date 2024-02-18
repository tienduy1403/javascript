/*
Bài 18: Kiểm tra mật khẩu hợp lệ
    * Mật khẩu hợp lệ có ít nhất 6 kí tự
    * Chứa ít nhất 1 chữ cái viết hoa
    * Chứa ít nhất 1 chữ cái viết thường
    * Chứa ít nhất 1 chữ số
    * Cho người dùng nhập mật khẩu để login: Nếu đúng mở login, nếu sai 5 lần thoát chương trình block tài khoản
*/

// Khởi tạo hàm kiểm tra mật khẩu hợp lệ// Khởi tạo hàm kiểm tra mật khẩu hợp lệ
function isPassWordValid(password) {
    if (password.length < 6) {
        return false;
    }

    let upperPassword = false;
    let lowerPassword = false;
    let digitPassword = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= "A" && char <= "Z") {
            upperPassword = true;
        } else if (char >= "a" && char <= "z") {
            lowerPassword = true;
        } else if (char >= "0" && char <= "9") {
            digitPassword = true;
        }
    }

    return upperPassword && lowerPassword && digitPassword;
}

// Khởi tạo hàm điều khiển mật khẩu
function setPassword() {
    let password = prompt(`Mời bạn thiết lập mật khẩu: `);
    if (isPassWordValid(password)) {
        alert(`Mật khẩu hợp lệ. Mật khẩu của bạn là: ${password}`);
        return password;
    } else {
        alert(
            `* Mật khẩu hợp lệ có ít nhất 6 kí tự
                * Chứa ít nhất 1 chữ cái viết hoa
                * Chứa ít nhất 1 chữ cái viết thường
                * Chứa ít nhất 1 chữ số `
        );
        setPassword();
    }
}

// Gọi giá trị hàm kiểm tra mật khẩu
const passwordIsOk = setPassword();

// Viết chương trình đăng nhập

let countPassword = 0;

while (true) {
    let passwordLogin = prompt(` Mời bạn nhập mật khẩu đăng nhập: `);

    if (passwordLogin === passwordIsOk) {
        alert(`Bạn đã đăng nhâp thành công`);
        break;
    } else {
        countPassword++;
        if (countPassword < 5) {
            alert(
                ` Nhập sai ${countPassword}/5 lần. Mời bạn nhập mật lại khẩu đăng nhập: `
            );
        } else {
            alert(`Bạn đã nhập sai 5 lần> Khóa tài khoản`);
            break;
        }
    }
}
