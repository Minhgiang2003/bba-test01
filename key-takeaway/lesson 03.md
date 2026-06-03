# Kiến thức buổi 3
## Cách đưa file từ vùng staging và repository về working directory 
1. Staging => working directory: 
- Đưa từng file: git restore --staged <file_name>
- Đưa tất cả file: git restore --staged .
2. Repository => working directory: 
- git reset HEAD ~<so_commit> //VD: Reset 2 commit: git reset HEAD~2 => đưa 2 file thay đổi trong commit mới nhất quay trở về vùng working directory

## Branching
- Câu lệnh tạo nhánh: git branch <ten_nhanh> //VD: git branch lesson-03
- Câu lệnh chuyển nhánh: git checkout <ten_nhanh> //VD: git checkout lesson-03
- Tra cứu lịch sử commit: git log
- Xem danh sách nhánh: git branch
- Vừa tạo, vừa chuyển sang nhánh mới: git checkout -b <ten_nhanh>
- Xóa branch: git branch -D <ten_nhanh>
- Lưu ý: 1. Đứng ở nhánh khác trước khi xóa
         2. Luôn pull code về trước khi tạo nhánh mới


## Ignore file 
- File .gitignore là file cấu hình quan trọng trong Git, giúp bạn chỉ định những file và thư mục nào sẽ không được theo dõi bởi Git
- Tại sao cần: Trong dự án có nhiều file không cần thiết phải đưa vào git repo như: 
    1. file tạm thời của hệ điều hành (.DS_Store, thumb.db)
    2. Thư mục dependencies (node_modules/vendor)
    3. File build và artifacts (dist/build/*exe)
    4. File cấu hình cá nhân (IDE setting, environment variables)
    5. File nhạy cảm (API keys, passwords, certificates)
    6. File log và database local


## Convention 
- Convention giúp: 
    1. Code theo format chung, dễ nhìn
    2. Người khác trong team dễ đọc code
- Có nhiều loại convention: 
    1. Đặt tên file 
    2. Đặt tên biến 
    3. Đặt tên commit
- Một số convention phổ biến: 
    1. snake_case
    2. kebab-case
    3. camelCase
    4. PascalCase
## Git Amend 
1. Giới thiệu
- git commit --amend là lệnh cho phép bạn sửa đổi commit gần nhất - thay đổi message, thêm bớt file, hoặc cả hai. Thay vì tạo commit mới, nó viết lại commit cuối cùng

2. Khi nào dùng git amend
- Viết sai commit message (Lỗi chính tả, thiếu thông tin)
- Quên thêm 1 file vào commit
- Muốn bỏ bớt file khỏi commit cuối 
- Cần sửa nhỏ mà không muốn tạo commit mới "rác" 
- Nguyên tắc vàng: Chỉ amend commit chưa push lên remote. Nếu đã push, amend sẽ gây conflict cho người khác 

3. Các trường hợp sử dụng 
- Sửa commit message: git commit --amend -m "message mới chính xác hơn" (Hoặc chỉ chạy git commit -amend để mở editor và sửa)
- Thêm file quên stage: 
    git add utils.py
    git commit --amend --no-edit
(--no edit giữ nguyên message cũ, chỉ thêm file vào commit) 
- Vừa thêm file vừa sửa message:
    git add forgot ten_file.py
    git commit --amend -m "feat: Thêm chức năng login và utils"
- Bỏ file khỏi commit cuối: 
    git reset HEAD~ --file_to_remove.py
    git commit --amend --no-edit

4. Cách hoạt động bên trong
- Khi chạy git commit --amend, git thực chất: 
    1. Lấy nội dung của commit cuối (parent, tree, author)
    2. Kết hợp với staging area hiện tại 
    3. Tạo một commit mới với hash khác thay thế commit cũ 
    4. Commit cũ vẫn tồn tại trong redflog nhưng không còn trên branch 
    Trước amend: A--B--C
    Sau amend: A--B--C' (C' thay thế C, hash khác)

5. Amend với commit đã push
- Nếu bắt buộc phải amend commit đã push: 
    git commit -amend -m "message sửa"
    git push --force-with-lease 
-- force-with-lease an toàn hơn --force vì nó kiểm tra xem remote có thay đổi từ người khác không trước khi ghi đè
- Lưu ý: Chỉ làm điều này trên brance cá nhân, không bao giờ force push lên main/develop chung

## Console log
- Console log là một công cụ quan trọng giúp debug và theo dõi code
VD1: 
let myName = "Giang";
let queQuan = "Phú Thọ"
console.log(`Toi là ${myName}, toi den tu ${queQuan}`);


- Object là một trong những kiểu dữ liệu quan trọng nhất trong JavaScript, dùng để lưu trữ dữ liệu dạng key-value
    Cú pháp: 
    const/let <variable_name> = {
        key1: value1;
        key2: value2;
        Key 3: {
        address:'Ha Noi'
        }
    }
    VD2:  
    const myInfo = {
        myName1: 'Giang',
        myBirthday: 04012003,
        myAddress: 'Phu Tho',
        'Tam tru': 'Ha Noi',
        isLovecoding: true,
        congTy: {
            diaChi: 'Yen Hoa'
        }
    }
    console.log(myInfo.myAddress);
    console.log(myInfo.congTy.diaChi);
    console.log(myInfo['myName1']);
    console.log(myInfo['congTy']['diaChi']);

    Trong đó: 
    <Key>: giống quy tắc đặt tên biến
    <value>: có kiểu giống biến, hoặc là 1 object khác
            - Chứa giá trị 
            - Có thể là String, Number, Boolean hoặc là một object khác

- Array(mảng)
    1. Tạo mảng: 
        - Khai báo 
        - Sử dụng 
2. Truy xuất mảng: 
        - Độ dài mảng: length 
        - Lấy phần tử theo index [0],[1],[2]

    VD3: 
    const arr1 = [1,3,5,7,9];
    console.log(arr1[4]);
    console.log(arr1.length);

- Function: Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể. 
    Khai báo: 
        function <nameFunction> (){
            //code
        }
    VD4:
    function tinhDienTich(doDai, doRong){
        const dienTich = doDai*doRong;
        // console.log(`Dien tich hinh chu nhat la (${doDai} x ${doRong}) = ${dienTich}`);
        return dienTich;
    }
    // tinhDienTich(5,10);
    // tinhDienTich(10,20);
    console.log(tinhDienTich(5,10));
- Logical operator: 
    1. &&: Cả 2 vế của mệnh đề đều đúng 
    2. ||: Một trong 2 vế đúng 
    3. !: Đảo ngược lại giá trị của mệnh đề

    //a%2===0 => số chẵn
    //a%2!==0 => số lẻ

    function kiemTraChanLe(number){
        if(number%2===0){
            return "chan";
        }else{
            return "le";
        }
    }

    console.log(kiemTraChanLe(19));

    //array with for 
    arr = [24, 11, 26, 39];
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }


