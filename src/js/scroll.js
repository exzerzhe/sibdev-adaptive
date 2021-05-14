window.onscroll = function () {scroll()};
const header = document.getElementById('header')
const headerInput = document.getElementById("header-input")

function scroll(){
    if (window.pageYOffset > 0){
        console.log(window.pageYOffset)
        header.classList.add("sticky")
        headerInput.style.setProperty('margin', "27px 21px 27px 68px")
    } else {
        header.classList.remove("sticky")
        headerInput.style.setProperty('margin', "30px 60px 40px")
    }
}