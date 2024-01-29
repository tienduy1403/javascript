/*
Viết hàm để đảo ngược một chuỗi sử dụng vòng lặp.
*/

let inputString = prompt("Nhap vao day moi day ki tu bat ki: ");

function reverseString(inputString) {
    // Khởi 1 chuỗi rỗng
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

alert(`Dãy kí tự bạn nhập là ${inputString}.
Dãy kí tự đảo ngược là: ${reverseString(inputString)}`);
