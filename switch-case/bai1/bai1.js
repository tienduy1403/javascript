/*  Viết chương trình cho người dùng lựa chọn khung tìm kiếm
1. Tìm theo tên.
2. Tìm theo tác giả
3. Tìm theo nhà xuất bản.
4. Tìm theo tiêu đề.
Thoát nếu phím bấm không hợp lệ
*/

let search = parseInt(
    prompt(`Chọn cách tìm kiếm:
1. Tìm theo tên.
2. Tìm theo tác giả
3. Tìm theo nhà xuất bản.
4. Tìm theo tiêu đề.
`)
);

switch (search) {
    case 1:
        alert("Bạn đã tìm theo tên");
        break;
    case 2:
        alert("Bạn đã tìm theo tác giả");
        break;
    case 3:
        alert("Bạn đã tìm theo nhà xuất bản");
        break;
    case 4:
        alert("Bạn đã tìm theo tiêu đề");
        break;
    default:
        alert("Phím bấm không hợp lệ");
}
