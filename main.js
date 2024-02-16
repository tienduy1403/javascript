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

// function tinhTong(a, b) {
/* Nhập 1 chuỗi từ bàn phím
1. đếm xem có bao nhiêu ksi tự thường.
2. bao nhiêu in hoa
3. Bao nhiêu số
4. Bao nhiêu space
*/

let string = prompt(` Xin mời nhập vào 1 chuỗi bất kì`);

console.log(string);

let lowerCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;

function testString(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
        let char = string[i];
        if (char >= "a" && char <= "z") {
            lowerCaseCount++;
        } else if (char >= "A" && char <= "Z") {
            upperCaseCount++;
        } else if (char >= "0" && char <= "9") {
            digitCount++;
        } else if (char === " ") {
            spaceCount++;
        }
    }
    alert(`Co ${lowerCaseCount} ki tu thuong
    Co ${upperCaseCount} in hoa
    Co ${digitCount} so
    Co ${spaceCount} space`);
}

testString(string);
