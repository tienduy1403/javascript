
function tinhGiaiThua(n) {
    let giaiThua = 1;
    for(let i =1; i <= n; i++ ) {
        giaiThua *= i;
    }
    return giaiThua;
}
let n = parseInt(prompt('Nhap vao so n'));
console.log(`${n}! = ${tinhGiaiThua(n)}`);