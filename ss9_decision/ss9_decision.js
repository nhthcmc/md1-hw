// bài 3
// let gradeP = parseInt(prompt("Input Physics score:"))
// let gradeChem = parseInt(prompt("Input Chemistry score:"))
// let gradeB = parseInt(prompt("Input Biology score:"))
// let gradeM = parseInt(prompt("Input Mathematics score:"))
// let gradeCom = parseInt(prompt("Input Computer score:"))
// var average = ((gradeP + gradeChem + gradeB + gradeM + gradeCom) / 50) * 100;
// console.log("Average: " + average)
// if (average >= 90) console.log("Grade A")
// else {
//     if (average >= 80) console.log("Grade B")
//     else {
//         if (average >= 70) console.log("Grade C")
//         else {
//             if (average >= 60) console.log("Grade D")
//             else {
//                 if (average >= 40) console.log("Grade E")
//                 else {
//                     console.log("Grade F")
//                 }
//             }
//         }
//     }
// }

// bài 4
// let inputA =parseInt(prompt("Nhập giá trị a:"))
// let inputB =parseInt(prompt("Nhập giá trị b:"))
// let inputC =parseInt(prompt("Nhập giá trị c:"))
// let inputD =parseInt(prompt("Nhập giá trị d:"))
// var sequence= [inputA, inputB, inputC, inputD];
// sequence.sort(function (a, b){return (b-a)})
// console.log("Result: " +sequence)

// bài 5
// let inputYear = parseInt(prompt("Input year:"))
// if (inputYear % 400 === 0 || inputYear % 4 === 0 && inputYear % 100 !== 0) console.log(`Năm ${inputYear} là năm nhuận!`);
// else console.log(`Năm ${inputYear} không phải năm nhuận!`)

// bài 6
// let a=parseInt(prompt("Nhập kích thước cạnh thứ nhất:"))
// let b=parseInt(prompt("Nhập kích thước cạnh thứ hai:"))
// let c=parseInt(prompt("Nhập kích thước cạnh thứ ba:"))
// if ((input1*input1 === input2*input2+input3*input3))
// if (a===b && b===c && a===c) console.log("Equilateral triangle !")
// else if (a===b || a===c || b===c) console.log("Isosceles triangle !")
// else if
//     if ([input1 + input2]>input3 && [input2+input3]>input1 && [input1+input3]>input2) console.log("")

// bài 8
// let a = parseInt(prompt("Nhập giá trị a:"))
// let b = parseInt(prompt("Nhập giá trị b:"))
// let c = parseInt(prompt("Nhập giá trị c:"))
// if (a <= b && b <= c) console.log("Increasing")
// else {
//     if (a > b && b > c) console.log("Decreasing")
//     else console.log("Neither increasing nor decreasing order")
// }

// bài 9
// let a =parseInt(prompt("Nhập giá trị a:"))
// let c=prompt("Nhập kí tự:")
// let b=parseInt(prompt("Nhập giá trị b:"))
// switch (c){
//     case "+":
//         console.log(a+b)
//         break
//     case "-":
//         console.log(a-b)
//         break
//     case "*":
//         console.log(a*b)
//         break
//     case "/"
//         if (b !==0) console.log(a/b)
//         else console.log("b khác 0")
//         break
//     default:
//         console.log("Phép tính không hợp")
//
// }

// bài 10
// let inputY = parseInt(prompt("Nhập năm:"))
// let inputM = parseInt(prompt("Nhập tháng:"))
//
// switch (inputM) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Tháng này có 31 ngày")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Tháng này có 30 ngày")
//         break
//     case 2:
//         if (inputY % 400 === 0 || inputY % 4 === 0 && inputY % 100 !== 0) console.log("Tháng này có 29 ngày")
//         else console.log("Tháng này có 28 ngày")
//         break
//     default:
//         console.log("Không có tháng này")
//         break
// }








