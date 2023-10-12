// bài 1
// let data = [ 2, 4, 6]
// let isEven = data.every(function (x) {
//         return x % 2 === 0
//     });
// console.log(isEven)

//bài 2
// let data = [1, -2, 3, 4, -5];
// let isPositive = data.filter(number => number > 0);
// console.log(`Số dương: ${isPositive}`);

//bài 3
// let data=[-1, -2, 3, 4,-5];
// let isPositive= data.find(function (data,index){
//     return data > 0;
//     });
// console.log(`Số dương đầu tiên: ${isPositive}`)

//bài 4
// var data = []
// alert("Tìm số chia hết cho 5:")
// var a = parseInt(prompt("Nhập giá trị a:"))
// var b = parseInt(prompt("Nhập giá trị b:"))
// var c = parseInt(prompt("Nhập giá trị c:"))
// var d = parseInt(prompt("Nhập giá trị d:"))
//
// data.push(a, b, c, d);
// let output = []
// data.forEach(function (number) {
//     if (number % 5 === 0) {
//         output.push(number)
//     }});
// console.log(output.join(" "))


//bài 5
// let data =[1, 2, 3, 4, 5, 6]
// console.log(data.includes(5, 0))

//bài 6
// let data = ["A", "B", "C"];
// console.log(data.join(", "))

//bài 7
// let data = [2, -1, -8]
// let output=data.map(function (number){
//     return Math.abs(number)
// });
// console.log(output)


//bài 8
// let data=['A', 'B', 'C'];
// data.shift()
// data.pop()
// let output=data.push('X')
// console.log(output)

//bài 9
// var data = []
// alert("Tìm giá trị nhỏ nhất trong mảng:")
// var a = parseInt(prompt("Nhập giá trị a:"))
// var b = parseInt(prompt("Nhập giá trị b:"))
// var c = parseInt(prompt("Nhập giá trị c:"))
// var d = parseInt(prompt("Nhập giá trị d:"))
// var e = parseInt(prompt("Nhập giá trị e:"))
//
// data.push(a, b, c, d, e);
// let output=data.sort();
// console.log("Giá trị nhỏ nhất trong mảng= ",output[0]);

//## Bài tập 10:
//
// Trong phần này, chúng ta sẽ phát triển một chương trình thực hiện xoá một phần tử
// được nhập vào từ bàn phím ra khỏi mảng, nếu phần tử đó xuất hiện trong mảng.
//bài 10 3 4 5 4 4         4    3 5
// var data = []
// alert("Nhập các giá trị vào mảng:")
// var a = parseInt(prompt("Nhập giá trị a:"))
// var b = parseInt(prompt("Nhập giá trị b:"))
// var c = parseInt(prompt("Nhập giá trị c:"))
// var d = parseInt(prompt("Nhập giá trị d:"))
// var e = parseInt(prompt("Nhập giá trị e:"))
//
// data.push(a, b, c, d, e);

// let myString1 = "background-color-name";
// let myStringc=[]
//
// if (myString1.charAt(0)==="-"){
//     let myArr = myString1.split("-")
//     for (let i = 0; i < myArr.length; i++) {
//         var MyStringa = myArr[i].charAt(0).toUpperCase();
//         var MyStringb = myArr[i].slice(1);
//         myStringc[i] = [MyStringa + MyStringb];
//     }
//     console.log(myStringc.join(""))}
// else{
//     let myArr = myString1.split("-")
//     for (let i = 1; i < myArr.length; i++) {
//         var MyStringa = myArr[i].charAt(0).toUpperCase();
//         var MyStringb = myArr[i].slice(1);
//         myStringc[i] = [MyStringa + MyStringb];
//     }
//     console.log(myArr[0]+myStringc.join(""))
// }














