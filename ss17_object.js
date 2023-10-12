// let myInfo ={
//     name: "Tran",
//     age: 10,
//     address: "123 abc",
//     getName:function (){
//         return this.name
//     }
// }
// console.log(myInfo.age)


// var today = new Date()
// var yyyy = today.getFullYear()
// var mm = today.getMonth()
// var dd = today.getDate()
//
// console.log("dd/mm/yyyy: ", )

// var date = new Date()
// var month = date.getMonth()
// var year = date.getFullYear()
// console.log(`${date.getDate()}/${month+1}/${year}`)

//rest dùng cho tham số, spread dùng cho mảng
//window là global, cửa sổ trình duyệt
//key và value trùng nhau thì chỉ cần giữ lại 1 cái
//function: arrow function ko có con trỏ this, sẽ hiểu là con trỏ của hàm gọi nó (ptu cha chứa nó)

//bài 1
// let name = "Tom";
// let year_of_birth = 1988;
//
// let date = new Date();
// let current_year = date.getFullYear();
//
// let person = {
//     name,
//     year_of_birth,
//     address: "Ha Noi"
// };
//
// let age = current_year - year_of_birth;
//
// console.log(person);
//
// console.log(`${name} is ${age} years old`);

//bài 2
// let object1 = {foo: "bar", a: 5};
// let object2 = {name: "foo", d: 10};
//
// object2 = {...object2, ...object1};
//
// console.log(object2);
//
//cách assign
// let output = Object.assign(object2, object1);
// console.log(output)
//
//cách JSON.stringify()
// let output = JSON.stringify(object1, object2)
// console.log(JSON.parse(output))

//bài 3


//bài 4
// let yearOfBirth = prompt("Nhập năm sinh của bạn:");
//
// let date = new Date();
// let currentYear = date.getFullYear();
//
// let age = currentYear - parseInt(yearOfBirth);
//
// alert(`Năm nay bạn ${age} tuổi.`);

// function abc(...rest){
// }
// console.log(abc(1,2,3,4,5))






