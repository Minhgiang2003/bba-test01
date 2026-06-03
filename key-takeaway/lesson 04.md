# Lý thuyết buổi 04
## Phạm vi của biến: 
- Phạm vi (scope) xác định nơi mà biến có thể truy cập
- JS có 3 loại phạm vi: 
    1. Block scope (khối): Biến được khai báo trong cặp ngoặc nhọn 
        * var: không bị giới hạn bởi cặp ngoặc nhọn
        * let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị undefined
        if (true) {
            var varVariable = 'var không có block scope';
            let letVariable = 'let có block scope';
            const constVariable = 'const có block scope';
        }
        console.log(varVariable); //Vẫn trả ra được kết quả, không bị giới hạn bởi block
        console.log(letVariable); //error: letVariable is not defined
        console.log(constVariable); //error: constVariable is not defined
    2. Function scope (hàm): Biến được khai báo trong một hàm
        * Cả let/var/const ra ngoài hàm đều bị undefined
        function myFunction(){
            var functionScoped = 'Chỉ có thể truy cập trong hàm này';
            let alsoFunctionScoped = 'Tương tự';
            console.log(functionScoped); //In ra kết quả
        }
        console.log(alsoFunctionScoped); //error: alsoFunctionScoped is not defined
    3. Toàn cục (global): Biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm
        var globalVar = 'Tôi là biến toàn cục';
        let globalLet = 'Tôi cũng là biến toàn cục';
        function testFunction (){
            console.log(globalVar); // Truy cập được
            console.log(globalLet); //Truy cập được
        }
        testFunction(); //In ra kết quả

## Break & Continue
1. Break: Dùng để thoát khỏi hoàn toàn vòng lặp ngay lập tức
    //Thoát khi tìm thấy giá trị 
    for (let i = 0; i < 10; i++){
        if (i===5){
            break; //thoát khỏi vòng lặp khi i = 5
        }
        console.log(i);
    }
    //output: 0,1,2,3,4
2. Continue: Dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo
    //Bỏ qua số chẵn
    for (let i = 0; i < 10; i++){
        if (i%2===0){
            continue; //bỏ qua số chẵn
        }
        console.log(i);
    }
    //output: 1,3,5,7,9

## JS - Câu điều kiện nâng cao
### Câu điều kiện: if...else: Thực thi code khác nhau cho trường hợp true và false: 
    let score = 75; 
    if (score >= 60){
        console.log('Bạn đã qua môn');
    }else{
        console.log('Bạn cần học lại');
    }

### Câu điều kiện: if...else...if: Kiểm tra nhiều điều kiện theo thứ tự: 

    let score = 85;
    if (score >= 90){
        console.log('Xuất sắc');
    }else if (score >= 80) {
        console.log('Giỏi');
    }else if (score >= 70){
        console.log('Khá');
    }else if (score >= 60){
        console.log('Trung bình');
    }else{
        console.log('Yếu');
    }

## Ternary operator (Toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản 

    let age = 20;
    let status = (a>=18) ? 'Người lớn' : 'Trẻ em';
    console.log(status); //Người lớn
    
    //Có thể lồng nhau
    let score = 75;
    let grade = score >= 90 ? 'A': 
                score >= 80 ? 'B': 
                score >= 70 ? 'C': 
                score >= 60 ? 'D': 'F';

## for...in Loop: Dùng để duyệt qua các thuộc tính (properties) của một object
    //Với object
    const person = {
        name : 'Giang',
        age: 30,
        city: 'Ha Noi',
        quhuong : {
            tuoi: 10,
            lop: 13
        }
    };
    for (let key in person.quhuong) { //Khai báo biến key
        console.log(key + ':' + person.quhuong [key]); // key = thuộc tính = name, age, city, person[key] = giá trị thuộc tính
    }

    //Với array (Không khuyến khích)
    const colors = ['red', 'green', 'blue'];
    for (let index in colors){
        console.log(index + ':' + colors[index]);
    }
## Vòng lặp forEach: method của array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue 

    const numbers = [1,2,3,4,5];
    numbers.forEach(function(value)){ //Mỗi lần lặp sẽ lấy giá trị của mảng gán vào value và in ra giá trị
        console.log(value);
    }

## Utils function
- Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn, gọn hơn 
- Trong bài này, ta học 2 loại utils function thường sử dụng là: 
    1. String utils: Các hàm xử lý chuỗi
    2. Array utils: Các hàm xử lý mảng
### String utils
- Tổng quan các loại thao tác: 
    1. Bỏ khoảng trắng: Dùng hàm trim()
        * trim(): bỏ khoảng trắng 2 đầu 
        * trimStart(): bỏ khoảng trắng bên trái 
        * trimEnd(): bỏ khoảng trắng bên phải
            let text = '        hello      ';
            console.log(text.trim()); //Bỏ khoảng trắng 2 đầu 
            console.log(text.trimStart()); //Bỏ khoảng trắng bên trái 
            console.log(text.trimEnd()); //Bỏ khoảng trắng bên phải
    2. Chuyển đổi chữ hoa => thường và ngược lại 
        * toUpperCase(): chữ thường => chữ hoa 
        * toLowerCase(): chữ hoa => chữ thường
            let str = "JavaScript";
            str.toUpperCase(); //JAVASCRIPT
            str.toLowerCase(); //javascript
            console.log(str.toUpperCase());
            console.log(str.toLowerCase());
    3. Kiểm tra chuỗi có bao gồm chuỗi con không: Dùng hàm includes (có phân biệt hoa thường)
            let text = 'Hello world';
            //Kiểm tra chuỗi có chứa chuỗi con không 
            console.log(text.includes('world')); //true
            console.log(text.includes('HELLO')); //false
    4. Tách chuỗi thành các phần: Dùng hàm split
            let text = 'Hello world JavaScript';
            //cắt chuỗi theo khoảng trắng 
            console.log(text.split(''));
            //['Hello','world','JavaScript]
    5. Thay thế ký tự trong chuỗi: Dùng hàm replace
            let text = 'Hello world';
            //Thay thế chuỗi con 
            console.log(text.replace('World', 'JavaScript')); //'Hello JavaScript'
### Array utils
- Tổng quan các loại thao tác với mảng: 
    1. Thêm phần tử vào mảng (push, unshift, splice)
        * Thêm phần tử vào cuối: push(<phần tử>)
        * Thêm vào đầu: unshift(<phần tử>)
        * Thêm vào giữa: splice(<phần tử>)
            let arr = [1,2,3]
            //Thêm vào cuối 
            arr.push(4);
            console.log(arr); // 1,2,3,4
            arr.unshift(0);
            console.log(arr) //0,1,2,3
            arr.splice(2,0,1.5); (vị trí, 0, phần tử)
            console.log(arr) // 0,1,1.5,2,3
    2. Xóa phần tử vào mảng (pop, shift, splice)
        * Xóa ở cuối: pop()
        * Xóa ở đầu: shift()
        * Xóa ở giữa: splice(<vị trí>,<số phần tử cần xóa>)
            let arr = [1,2,3]
            arr.pop(); //Xóa 3
            arr.shift(); // Xóa 1
            arr.splice(1,1); //Xóa 1 phần tử tại vị trí index 1
    3. Tìm kiếm (find, filter)
        * Trả về phần tử đầu tiên hợp lệ: find()
        * Trả về tất cả các phần tử hợp lệ: filter()
            const number = [1,2,3,4];
            let first = numbers.find(num => num > 3);
            console.log(first); //4
            let all = numbers.filter(num => num > 1); 
            console.log(all); // 2,3,4
    4. Biến đổi mảng (map)
        * map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài 
            let numbers = [1,2,3,4,5];
            //Nhân mỗi phần tử với 2
            let doubled = numbers.map(num => num*2);
            console.log(doubled); //2,4,6,8,10
    5. Sắp xếp mảng (soft)
        * soft ((a,b) => a-b)
        * So sánh từng cặp phần tử a và b 
        * Trả về số âm: a đứng trước b 
        * Trả về số dương: b đứng trước a
        * Trả về 0: giữ nguyên thứ tự
            let numbers = [40, 100, 1, 5, 25, 10];
            //Sắp xếp tăng dần
            numbers.soft((a,b) => a-b);
            console.log(numbers); //1,5,10,25,40,100
            //sắp xếp giảm dần 
            numbers.soft(a,b) => b-a;
            console.log(numbers); //100,40,25,10,5,1
