# Getting started
## Playwright là gì?
1. Giới thiệu
    - Là một framework
    - Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.
    - Website: https://playwright.dev/
    - Ra đời: 31/01/2020
    - Version mới nhất: v1.56
2. Ưu điểm 
    - Cross browser: Hỗ trợ các trình duyệt phổ biến: Chrome, Edge, Firefox, Safari và hỗ trợ lên tới 143 phiên bản trình duyệt
    - Cross platform: Code một lần, chạy trên các hệ điều hành phổ biến: Windows, Linux, MacOS
    - Bao gồm các tính năng xịn xò: Auto waiting, Auto-retry assertion giúp giảm Flaky tests (lúc pass, lúc fail)
    - Report đầy đủ thông tin: 
        * Pass/fail theo từng loại trình duyệt
        * Chi tiết ở từng thời điểm: Gọi API nào, Response trả về gì, Ứng với dòng code nào
## Cấu hình git
- Trước khi làm việc với Git, cần một số cấu hình mặc định:
    1. Config username (tên người dùng): git config --global user.name "<tên bạn>"
    2. Config email (địa chỉ email): git config --global user.email "<email của bạn>"
    3. Config branch default (nhánh mặc định): git config --global init.defaultBranch main

## Cài đặt Visual Studio Code
1. Lý thuyết
    - VS Code = IDE = Integrated Development Environment
    - Là công cụ để viết code
2. Đổi terminal mặc định
    - Window Powershell là terminal mặc định trên windows 
    - Powershell hay bị chặn/lỗi lặt vặt
    => Dùng git bash để tránh các lỗi này 

## Đưa code lên GitHub:
1. Tạo repo: 
    - Truy cập: https://github.com/new
    - Điền tên repository
    - Chọn "Public"

2. Khởi tạo: 
    - Khởi tạo repo local: git init
    - Liên kết repository vừa tạo với Git: git remote add origin <ssh_link>
    - Thêm code: git add .
    - Thêm commit: git commit -m "init project"
3. Push code
    - Push code: git push origin main
