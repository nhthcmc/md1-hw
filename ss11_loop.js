// bài 1
// var sum = 0
// var start = parseInt(prompt("Nhập số đầu:"))
// var end = parseInt(prompt("Nhập số cuối:"))
// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// document.write(`Tổng các số chẵn trong dãy là: ${sum}`)

// bài 2
// var n = parseInt(prompt("Nhập số cần tính giai thừa:"));
// var output=1;
// for (var i = 1; i <= n; i++) {
//     output*= i;
// }
// document.write(`Kết quả: ${output}`)

// bài 3
// let array = parseInt(prompt("Nhập mảng:"))
// let sum = 0
// for (let i of array) {
//     if (i >= 0) {
//         sum += i
//     }
// }
// document.write(`Kết quả: ${sum}`)


// bài 4
// let array = [1, 3, 4, 6, 12, 5, 4, 9];
// for (let i of array) {
//     if (i % 4 === 0 && i % 3 === 0) {
//         break;
//     } else if (i % 4 === 0) {
//         continue;
//     } else {
//         console.log(i)
//     }
// }


// bài 5.1
// let str_input = prompt("Nhập chuỗi muốn đảo ngược:");
// let str_output = '';
// for (let i = str_input.length - 1; i >= 0; i--) {
//     str_output += str_input[i];
// }
// document.write(`Kết quả: ${str_output}`)

// bài 5.2
// while (false) {
//     var choose = parseInt(prompt("1.Kiểm tra tính chẵn lẻ của 1 số.\n" +
//         "2. Kiểm tra số nguyên tố.\n" +
//         "3. Kiểm tra một số có chia hết cho 3 không.\n" +
//         "4. Thoát"))
//
//     switch (choose) {
//         case 1:
//             var n1 = parseInt(prompt("Nhập số:"))
//         {
//             if (n1 % 2 === 0)
//                 console.log("Đây là số chẵn")
//             else
//                 console.log("Đây là số lẻ")
//         }
//             break;
//
//         case 2:
//             var n2 = parseInt(prompt("Nhập số:"))
//             for (let i = 2; i < Math.sqrt(n2); i++) {
//                 if (n2 % i !== 0)
//                     console.log("Đây là số nguyên tố.")
//                 else console.log("Đây không phải số nguyên tố")
//             }
//             break;
//
//         case 3:
//             var n3 = parseInt(prompt("Nhập số:"))
//         {
//             if (n3 % 3 === 0)
//                 console.log("Chia hết cho 3")
//             else
//                 console.log("Không chia hết cho 3")
//         }
//             break;
//
//         case 4:
//             console.log("Bạn đã thoát")
//             break;
//         default:
//             alert("Yêu cầu nhập lại");
//             continue
//     }
//     break;
// }


// bài 6
// var shouldExit = false;
// while (!shouldExit) {
//     var choose = parseInt(prompt("1. Tính chu vi và diện tích hình chữ nhật .\n" +
//         "2. Tính chu vi và diện tích hình tam giác.\n" +
//         "3. Tính chu vi và diện tích hình tròn.\n" +
//         "4. Thoát"))
//     switch (choose) {
//         case 1:
//             var length1 = parseInt(prompt("Nhập chiều dài:"))
//             var length2 = parseInt(prompt("Nhập chiều rộng:"))
//             var choose1 = prompt("a. Tính chu vi\n" + "b. Tính diện tích")
//             switch (choose1) {
//                 case "a":
//                     alert((length1 + length2) * 2)
//                     break;
//                 case "b":
//                     alert(length1 * length2)
//                     break;
//             }
//             break;
//         case 2:
//             var canh1 = parseInt(prompt("Nhập cạnh thứ nhất:"))
//             var canh2 = parseInt(prompt("Nhập cạnh thứ hai:"))
//             var canh3 = parseInt(prompt("Nhập cạnh thứ ba:"))
//             var choose2 = prompt("a. Tính chu vi\n" + "b. Tính diện tích")
//             switch (choose2) {
//                 case "a":
//                     alert(canh1 + canh2 + canh3)
//                     break;
//                 case "b":
//                     alert((Math.sqrt((canh1+canh2+canh3)*(canh1+canh2-canh3)*(canh2+canh3-canh1)*(canh3+canh1-canh2)))/4)
//                     break;
//             }
//             break;
//         case 3:
//             var r = parseInt(prompt("Nhập bán kính:"))
//             var choose3 = prompt("a. Tính chu vi\n" + "b. Tính diện tích")
//             switch (choose3) {
//                 case "a":
//                     alert(2 * r * Math.PI)
//                     break;
//                 case "b":
//                     alert(r * r * Math.PI)
//                     break;
//             }
//             break;
//         default:
//             alert("Yêu cầu nhập lại");
//             shouldExit = true
//             break
//     }
// }


// bài 8
// var shouldExit = false;
// while (!shouldExit) {
// var a = parseInt(prompt("Nhập cạnh thứ nhất:"))
// var b = parseInt(prompt("Nhập cạnh thứ hai:"))
// var c = parseInt(prompt("Nhập cạnh thứ ba:"))
//     for (let i >0;)
// var choose = prompt("a. Tính chu vi\n" + "b. Tính diện tích")}


