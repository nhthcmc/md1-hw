// Bài 1: Viết function (boolean). Tìm số nguyên dương nhỏ nhất chia hết cho 5,7 và 11 và hiển thị kết quả
// Bài 2:
// a. Viết một function nhận vào một mảng số và trả về số lớn nhất trong mảng đó.
// b. Viết một function nhận vào một mảng số và trả về số lẻ lớn nhất trong mảng.
// c. Viết một function tính giai thừa của một số nguyên dương n.
// Bài 3: Viết function kiểm tra nguyên tố và hiển thị các số nguyên tố nhỏ hơn 100 và hiển thị 20 số nguyên tố đầu tiên.
// Số nguyên tố là một số nguyên dương chỉ chia hết cho 1 và chính nó.
// Bài 4: Đảo ngược chuỗi. Viết một function nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.
// Bài 5: Loại bỏ phần tử trùng. Viết một function nhận vào một mảng và trả về mảng mới chỉ chứa các phần tử không trùng lặp.
// Bài 6: Tìm ước chung lớn nhất (UCLN).Viết một function nhận vào hai số và trả về ước chung lớn nhất của chúng.
// Bài 7: Đảo ngược số nguyên.
// Viết một function nhận vào một số nguyên và trả về số nguyên đảo ngược.
// Nhập 1 số: 54321 -> 12345

// Bài tập về nhà: Cho người dùng nhập vào chuỗi kí tự và viết hàm kiểm tra xem đó có phải chuỗi kí tự đối xứng không
// B1: Bước 1: Cho người dùng nhập vào chuỗi kí tự. Khởi tạo biến input bằng giá trị người dùng nhập vào thông qua prompt
// B2: Bước 2: Tạo hàm kiểm tra tên isPalindrome(string)
// Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng, dấu câu
// Đảo ngược chuỗi
// So sánh chuỗi gốc với chuỗi đảo ngược
// Bước 3: Kiểm tra lại kết quả

//bài 1
// var n = 1
//
// function findData(n) {
//     while (true) {
//         if (n % 5 === 0 && n % 7 === 0 && n % 11 === 0) {
//             return n;
//         }
//         n++
//     }
// }
//
// alert(findData(n))

//bài 2.a
// const arr = [1, 5, 4, 3, 2]
// console.log(Math.max(...arr))
// let arr = [-5, -6, -10, -3]
//
// function findLargest(arr) {
//     let max = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max
// }
//
// alert(findLargest(arr))

//bài 2.b
// let arr = [1, 6, 7, 4, 3]
//
// function findOdd(arr) {
//     let newArr = arr.filter(n => n % 2 !== 0)
//     let max = newArr[0]
//     for (i = 0; i < newArr.length; i++) {
//         if (max < newArr [i]) {
//             max = newArr[i]
//         }
//     }
//     return max
// }
// alert(findOdd(arr))

//bài 2.c
// let n = parseInt(prompt("Nhập số nguyên dương cần tính giai thừa:"))
// function factorial(n){
//     let output = 1;
//     if (n === 0 || n === 1){
//         return output;
//     }
//     else if(n > 1){
//         for(var i = n; i >= 1; i--){
//             output *=i;
//         }
//         return output;
//     }
//     else{
//         alert("Nhập số dương")
//     }
// }
// let output = factorial(n)
// alert("Giai thừa của " + n + " là " + output);

//bài 3
// let n = 2
// function isPrime(n){
//     while (true){
//         if (i<=Math.sqrt(n)){
//             return i;
//         }
//         n++
//     }
// }
//
// alert(function (n));
//test
// (function (){
//     alert("Hello")
// })();


//bài 4
// let inputStr = prompt("Nhập chuỗi muốn đảo ngược:");
//
// function reverse(inputStr) {
//     let outputStr = ''
//     for (let i = inputStr.length - 1; i >= 0; i--) {
//         outputStr += inputStr[i];
//     }
//     return outputStr;
// }
//
// alert("Kết quả: " + reverse(inputStr));




//bài 5
// let arr = prompt("Nhập mảng cần lọc các kí tự trùng:")
// function delDup(arr){
//
// }

//bài 6
// let a = parseInt(prompt("Nhập giá trị a:"));
// let b = parseInt(prompt("Nhập giá trị b:"));
//
// function findUCLN(a, b) {
//
// }








