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
