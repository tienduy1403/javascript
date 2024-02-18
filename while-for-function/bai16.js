/*
Bài 16: Giải phương trình bậc 2. ax^2 + bx + c = 0
Giải: 
B1: Tính delta = b^2 - 4ac.
B2: delta < 0 => Vô nghiệm
    delta = 0 => nghiệm kép x1 = x2 = -b/2a;
    delta > 0  
    => x1 = (-b + Math.sqrt(delta)) / 2a
    => x1 = (-b - Math.sqrt(delta)) / 2a
*/

function equation(a,b,c) {
    let delta = Math.pow(b,2) - (4 * a * c);
    if(delta === 0) {
        alert(`Phương trình có nghiệm kép x1 = x2 = ${-b/(2*a)}`);
    } else if(delta > 0) {
        alert(`Phương trình có nghiệm:
        x1 = ${(-b + Math.sqrt(delta)) / (2*a)}
        x2 = ${(-b - Math.sqrt(delta)) / (2*a)}
        `);
    } else {
        alert(`Phương trình vô nghiệm`);
    }
}

function checkNumber(number) {
    while(!Number.isNaN(number)) {
    prompt(`Mời bạn nhập lại vào số nguyên ${number}: `); 
    }
    return number;
}


let a = parse.Int(prompt('Mời bạn nhập vào số nguyên a: '));
checkNumber(a);
let b = parse.Int(prompt('Mời bạn nhập vào số nguyên b: '));
checkNumber(b);
let c = parse.Int(prompt('Mời bạn nhập vào số nguyên c: '));
checkNumber(c);

 