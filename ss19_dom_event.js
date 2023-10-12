// var h3Element = document.querySelectorAll("h3")
//all: lấy tất cả thẻ con trong thẻ h3
// console.log(h3Element);
// for (let i = 0; i < h3Element.length; i++) {
//     h3Element[i].onclick=function (event){
//         console.log(event.target)
//     }
// }


//DOM Element getAttribute()
//element.getAttribute(name)

// var ulElement=document.querySelector("ul")
// ulElement.onmousedown=function (e){
//     console.log(e.target)
// }
// console.log(ulElement)
//
// var btn=document.getElementById("btn")
// function task1(){
//     console.log("task1")
// }
// function task2(){
//     console.log("task2")
// }
// btn.addEventListener("click", task1)
// btn.addEventListener("click", task2)
//
// setTimeout(function (){
//     btn.removeEventListener("click",task1)
// }, 3000)

// btn.addEventListener('click', function onClick(event) {
//     document.body.style.backgroundColor = Math.random[color];
//bài 1
// const btn = document.getElementById('btn');
// var allChar = "0123456789ABCDEF";
// btn.addEventListener("click", changeBgc);
//
// function changeBgc() {
//     var randomColor = "";
//     for (var i = 0; i < 6; i++) {
//         randomColor += allChar[Math.floor(Math.random() * 16)];
//     }
//     document.body.style.backgroundColor = "#" + randomColor;
// }

//## Bài tập 2: Scroll to top
//
// Hướng dẫn các bước làm:
// // B1: Lắng nghe sự kiện cuộn trang (scroll)
// // B1.1: Lấy tham chiếu đến phần tử có id "scrollToTopButton"
// // B1.2: Kiểm tra vị trí cuộn của trang (scrollY) và so sánh với 300
// // B1.3: Nếu vị trí cuộn lớn hơn 300 pixels, hiển thị nút "scrollToTopButton"
// Nếu vị trí cuộn nhỏ hơn hoặc bằng 300 pixels, ẩn nút "scrollToTopButton"
// // B2: Lắng nghe sự kiện click vào nút "Scroll to Top"
// // B2.1: Khi nút "scrollToTopButton" được nhấp, di chuyển trang lên đầu (top: 0) với hiệu ứng mượt (behavior: "smooth")
//bài 2
// let btn = document.getElementById("scrollToTopButton");
// window.onscroll = function () {
//     scrollFunction()
// };
//
// function scrollFunction() {
//     if (document.documentElement.scrollTop > 300) {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none"
//     }
// }
//
// function topFunction() {
//     document.documentElement.scrollTop = 0;
// }

//## Bài tập 3: Menu toggle
//
// // B1: Lấy phần tử có class "menu-toggle" và lưu vào biến menuToggle
// // B2: Lấy phần tử có class "menu" và lưu vào biến menu
// // B3: Bắt đầu lắng nghe sự kiện click trên phần tử menuToggle (được sử dụng để mở/closed menu)
// // B3.1: Khi menuToggle được click, thêm hoặc xóa class "is-show" trên phần tử menu (hiển thị/ẩn menu)
// // B3.2: Đồng thời, thay đổi biểu tượng của menuToggle bằng cách thêm hoặc xóa class "fa-bars" và "fa-times" (biểu tượng
// thanh burger và biểu tượng "x")
// // B4: Bắt đầu lắng nghe sự kiện click trên toàn bộ tài liệu (document)
// (nghiên cứu .contains và event.target.matches)
// // B4.1: Kiểm tra xem sự kiện click không phải là trên phần tử menu và không phải là trên phần tử có class "menu-toggle"
// // B4.2: Nếu không phải là menu hoặc menu-toggle, thì ẩn menu bằng cách loại bỏ class "is-show"
// (nghiên cứu .classList.remove, .classList.add)
// // B4.3: Đồng thời, thay đổi biểu tượng của menuToggle bằng cách loại bỏ class "fa-times" và thêm class "fa-bars"

//bài 3
// const menuToggle = document.querySelector(".menu-toggle")
// const menu=document.querySelector("menu")
// // const menu = document.querySelector(".header-menu");
// const activeClass = "is-show";
// menuToggle.addEventListener("click", function () {
//     menu.classList.add(activeClass);
// })
// window.addEventListener("click", function (e) {
//     if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//         menu.classList.remove(activeClass);
//     }
// })

//bài 4

