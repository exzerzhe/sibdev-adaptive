window.onscroll = function () {scroll()};
const header = document.getElementById('header')
const headerInput = document.getElementById("header-input")
const menuIcon = document.getElementById("input-img")
const inputForm = document.getElementById("input-form")

function scroll(){
    if (window.innerWidth < 321 && window.pageYOffset === 0){
        menuIcon.style.setProperty('display', "inline")
        inputForm.style.setProperty("padding-left", "44px")
    } else {
        menuIcon.style.setProperty('display', "none")
        inputForm.style.setProperty("padding-left", "16px")
    }
    if (window.innerWidth > 321){
        menuIcon.style.setProperty('display', "inline")
        inputForm.style.setProperty("padding-left", "44px")
    }
    if (window.pageYOffset > 0){
        header.classList.add("sticky")
        headerInput.style.setProperty('margin', "27px 21px 27px 68px")
    } else {
        header.classList.remove("sticky")
        headerInput.style.setProperty('margin', "27px 20px 27px 20px")
        if (window.innerWidth > 450){
            headerInput.style.setProperty('margin', "30px 60px 40px")
        } else {
            headerInput.style.setProperty('margin', "27px 20px 27px 20px")
        }
        if (window.innerWidth < 1000){
            headerInput.style.setProperty('margin', "30px 27px")
        } else {
            headerInput.style.setProperty('margin', "30px 60px 40px")
        }
    }
}
