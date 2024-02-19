/*
Bài 23: Viết chường trình đếm ngược thời gian làm bài theo giây
*/

function countdownTimer(minutes) {
    let seconds = minutes * 60;

    console.log(`Thoi gian lam bai ${minutes}'(${seconds}s)`);

    const intervalId = setInterval(function () {
        const displayMinutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;

        console.log(`Thoi gian con lai ${displayMinutes}:${displaySeconds}s`);

        if (seconds > 0) {
            seconds--;
        } else {
            console.log("Het thoi gian lam bai");
            clearInterval(intervalId);
        }
    }, 1000);
}

let userInput = function () {
    let inputMinutes = prompt("Nhap vap so phut lam bai tap");
    let minutes = parseInt(inputMinutes);
    if (!isNaN(minutes) && minutes > 0) {
        countdownTimer(minutes);
    } else {
        userInput();
    }
};

userInput();
