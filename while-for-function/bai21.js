/*
Bài 21: Viết chương trình tách số và chuỗi thành 2 chuỗi:
    ví dụ nhập vào abc123 sẽ tách thành 2 chuỗi "abc" và "123"
*/

function separate(inputString) {
    let letters = "";
    let numbers = "";

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (isNaN(char)) {
            letters += char;
        } else {
            numbers += char;
        }
    }
    alert(` Ban da nhap vao ${string}
Gom chuoi ki tu : ${letters}
Va chuoi number: ${numbers}`);
    return inputString;
}

let string = prompt(`Moi ban nhap vao mot tin nhan`);
separate(string);

console.log(separate(string));
