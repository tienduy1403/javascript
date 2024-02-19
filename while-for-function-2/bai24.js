/*
Bài 24: Viết chương trình tên timeSince thông báo người dùng offline x phút trước.
*/

function timeSince() {
    const now = new Date().getTime();
    console.log(`Timestamp hien tai : ${now}`);
    let updateTimeSince = now - timeOffline;
    const displaySeconds = Math.floor(updateTimeSince / 1000);
    const displayMinutes = Math.floor(displaySeconds / 60);
    const displayHours = Math.floor(displayMinutes / 60);
    const displayDays = Math.floor(displayHours / 24);
    const displayMonths = Math.floor(displayDays / 30);
    const displayYears = Math.floor(displayMonths / 12);
    if (updateTimeSince >= 60 * 1000 * 60 * 24 * 30 * 12) {
        console.log(`Online ${displayYears} nam truoc`);
    } else if (updateTimeSince >= 60 * 1000 * 60 * 24 * 30) {
        console.log(`Online ${displayMonths} thang truoc`);
    } else if (updateTimeSince >= 60 * 1000 * 60 * 24) {
        console.log(`Online ${displayDays} ngay truoc`);
    } else if (updateTimeSince >= 60 * 1000 * 60) {
        console.log(`Online ${displayHours} gio truoc`);
    } else if (updateTimeSince >= 60 * 1000) {
        console.log(`Online ${displayMinutes} phut truoc`);
    } else {
        console.log(`Online ${displaySeconds}s truoc`);
    }
}

const timeOffline = 1308163977311; // Thoi gian offline;
timeSince(timeOffline);
