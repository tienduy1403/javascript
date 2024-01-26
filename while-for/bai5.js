/* Viết chương trình nhập số a từ bàn phím 
Nếu a chẵn thì tính tổng các số chẵn từ 0 đến a
Nếu a lẻ thì in ra dòng chữ : Tôi không tính tổng số lẻ, bye bye;
*/

let a = parseInt(prompt("Nhập số nguyên a: "));
if (a % 2 === 0) {
    let sum = 0;
    for (let i = a; i >= 0; i -= 2) {
        sum += i;
    }
    console.log(`Tổng các số chẵn từ 0 đến ${a} là: ${sum}`);
} else {
    console.log("Tôi không tính tổng các số lẻ, bye bye");
}
