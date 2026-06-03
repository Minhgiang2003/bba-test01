# Lesson 02
## Tổng quan về Git
1. Lịch sử ra đời: 
    - Cha đẻ của Git là Linux Torvalds 
    - Git và Github là hai khái niệm khác nhau 
    - Ưu điểm: dễ dùng, có nhiều tính năng vượt trội, free, phổ biến

2. Git states: 
    - Working directory: Các file mới hoặc file có thay đổi 
    - Staging area: Các file đưa vào vùng chuẩn bị commit (Tạo ra các phiên bản)
    - Repository: Các commit (Phiên bản)

3. Cấu hình git:
    - Set username, password riêng trong từng repo (đứng tại terminal của repo đó)
        * git config user.name "Alex" 
        * git config user.email "Alex@betterbytesvn.com"
    - Xem trạng thái file: git status (xanh: staging, đỏ: working directory)
    - Kiểm tra danh sách commit: git log 

4. Convention 
    - Convention giúp:
        * Cả team làm việc với nhau theo một quy tắc
        * Code gọn gàng, sạch đẹp hơn
        * Chuyên nghiệp hơn
    - Convention commit trong lớp học: <type>: <short_description>
    - Trong đó:
        * type (loại commit)
        * chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
        * feat: thêm tính năng mới, test case mới
        * fix: sửa lỗi một test trước đó
## JavaScript
### Lý thuyết
- Là một ngôn ngữ lập trình
- Ra đời năm 1995 bởi Brendan Eich
- Top language: StackOverflow Report
### JavaScript dùng để làm gì?
- Giúp cho browser hoạt động được.
- Thông thường JavaScript chạy được do browser engine hỗ trợ: Edge: Chakra, Firefox: SpiderMonkey, Chrome: V8
- Khi chạy trên máy tính: Không có browser engine => Cần công cụ khác để chạy JavaScript => NodeJS
### Cú pháp 
- console.log("nội dung");
- Có thể dùng nháy đơn hoặc nháy kép đều được.
- Nếu file nằm trong thư mục thì câu lệnh: node <đường_dẫn_tới_file>
- Comment: 
    * Comment 1 dòng: Thêm // vào trước đoạn code muốn comment
    * Có thể comment ở giữa dòng: const name = "Playwright Việt Nam" // Declare name variable
    * Comment nhiều dòng: Thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng.
### Biến (Variable)
- Biến là khái niệm cơ bản nhất trong lập trình. Từ "biến" trong "biến thiên", có nghĩa là thay đổi được.
- Cú pháp: <từ_khóa> <tên_biến> = <giá_trị>
- Phân biệt var và let: 
    * let: Ra đời sau, cú pháp hiện đại, an toàn hơn, let không cho phép khai báo lại, let có phạm vi block
    * var: Ra đời trước, cú pháp cũ, ít sử dụng, var cho phép khai báo lại, var có phạm vi global/function

### Hằng (Constant)
- Hằng là giá trị không thay đổi được. Từ "hằng" trong "hằng số".
- Dùng để khai báo các giá trị:
    * Không có nhu cầu thay đổi
    * Chỉ dùng một lần
- Cú pháp: const <tên_hằng> = <giá_trị>
- Mặc định dùng const
- Chỉ dùng let khi chắc chắn cần gán lại giá trị
- Không dùng var

### Kiểu dữ liệu (Data Types)
- Mỗi biến/hằng luôn có kiểu dữ liệu. Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang.
- JavaScript có 8 kiểu dữ liệu
    * Kiểu nguyên thủy (Primitive Types): Number, String, Boolean, Undefined, Null, Symbol, BigInt
    * Kiểu tham chiếu (Reference Types): Object
- Dùng hàm: typeof <variable> để kiểm tra kiểu dữ liệu

### Toán tử so sánh
- Toán tử so sánh dùng để so sánh 2 toán hạng.
- Có thể so sánh:
    * a > b ?
    * a < b ?
    * a == b ?
    * a <= b ?
    * a >= b ?
    * a != b ?
- So sánh bằng: == (So sánh giá trị sau khi chuyển đổi dữ liệu - Chỉ dùng so sánh khi không quan tâm tới kiểu dữ liệu), === (So sánh giá trị và kiểu dữ liệu - Không chuyển đổi kiểu - Nên dùng)
- So sánh không bằng: !=
- So sánh lớn hơn / nhỏ hơn: >, <, <=, >=

### Toán tử logic
- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về kiểu dữ liệu boolean.
- AND (&&): Trả về true nếu cả 2 vế của mệnh đề đều đúng.
- OR (||): Trả về true nếu ít nhất một trong hai vế đúng.

### Toán tử một ngôi
- Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện.
- Prefix: Toán tử nằm phía trước biến
    * ++x: tăng trước, trả về sau
    * --x: giảm trước, trả về sau
- Postfix: Toán tử nằm phía sau biến.
    * x++: trả về trước, tăng sau
    * x--: trả về trước, giảm sau

### Toán tử toán học
- Toán tử toán học tương tự các phép tính đã học: +, -, *, /

### Câu điều kiện
- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy.
- Nếu điều kiện đúng thì mới thực thi đoạn code bên trong.
- Các loại câu điều kiện
    * if
    * if...else
    * if...else if...else
    * switch...case
- Cú pháp: 
    if (<điều_kiện>) {
        // code...
    }

### Vòng lặp
- Vòng lặp dùng để lặp lại một đoạn logic.
- Có thể lặp:
    * Một số lần xác định
    * Cho đến khi điều kiện không còn đúng
    * Hoặc vô hạn (nếu viết sai điều kiện)
- Các loại vòng lặp trong JavaScript
    * for
    * for...of
    * forEach
    * for...in
    * while
    * do...while
- Vòng lặp for: 
    * Cú pháp: 
        for (<khởi_tạo>; <điều_kiện>; <cập_nhật>) {
        // code
        }
- Ý nghĩa từng phần: 
    * Điều kiện khởi tạo: Chạy một lần duy nhất khi vòng lặp bắt đầu. (let i = 0;)
    * Điều kiện lặp: Nếu đúng thì tiếp tục chạy. Nếu sai thì dừng. (i < 10)
    * Cập nhật: Chạy ở cuối mỗi vòng lặp. Thường dùng để tăng hoặc giảm biến đếm. (i++)

### Format code trong VS Code
- Dùng để căn chỉnh code theo đúng format: Alt + Shift + F