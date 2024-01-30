function checkNumber(number) {
    while(!Number.isInteger(number)) {
        parseInt(prompt(`Mời bạn nhập lại vào số nguyên ${number}: `)); 
    }
    return number;
}


let a = parseInt(prompt('Mời bạn nhập vào số nguyên a: '));
checkNumber(a);
let b = parseInt(prompt('Mời bạn nhập vào số nguyên b: '));
checkNumber(b);
let c = parseInt(prompt('Mời bạn nhập vào số nguyên c: '));
checkNumber(c);

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

equation(a,b,c);

