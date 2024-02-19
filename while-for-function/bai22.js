/*
Bài 22: Viết chương trình nhập vào năm sinh in ra số tuổi
*/

let yearOfBirth = prompt("Nhập năm sinh của bạn:");
yearOld(yearOfBirth);

function yearOld(yearOfBirth) {
    let age = 0;
    let date = new Date();
    let currentTimes = date.getTime();
    let inputYear = new Date(yearOfBirth, 0, 1).getTime();
    console.log(inputYear);
    age = parseInt((currentTimes - inputYear) * 3.2 * Math.pow(10, -11));
    alert(`Bạn ${age} tuổi`);
    return age;
}

function checkAge() {
    let yearOfBirth = prompt("Nhập năm sinh của bạn:");
    if (
        isNaN(yearOfBirth) ||
        yearOfBirth < 0 ||
        Number.isInteger(yearOfBirth)
    ) {
        alert(`Năm sinh không hợp lệ. Mời nhập lại`);
        checkAge();
    } else {
        yearOld(yearOfBirth);
    }
}

checkAge();
