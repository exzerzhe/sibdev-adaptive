const menu = [
    {
        id: 1,
        title: 'Каталог',
        svg: '../dist/img/icons/catalog.svg'
    },
    {
        id:2,
        title: 'Здоровье',
        svg: '../dist/img/icons/health.svg'
    },
    {
        id:3,
        title: 'Красота',
        svg: '../dist/img/icons/beauty.svg'
    },
    {
        id:4,
        title: 'Развлечения',
        svg: '../dist/img/icons/enjoy.svg'
    },
    {
        id:5,
        title: 'Авто',
        svg: '../dist/img/icons/car.svg'
    }
]

let out = ''
menu.forEach(({id, title, svg})=>{
    out+= `
        <div class="sidebar__content">
        <button class="content" type="button" name="${title}" id="${id}">
        <img src="${svg}" class="content__icon" id="svg" alt="">
        <p class="content__title">${title}</p>
        </button>
        </div>
    `
})
document.getElementById('menu').innerHTML = out;

const buttons = document.querySelectorAll(".content")
document.getElementById("1").classList.add("active")
document.getElementById("header-title").innerHTML = "Каталог"
buttons.forEach((btn)=>{
    btn.addEventListener("click", function (e){ chooseContent(e.currentTarget.id, e.currentTarget.name); })})

function chooseContent(id, name){
    document.getElementById("header-title").innerHTML = name
    const current = document.querySelectorAll(".active")
    current.forEach((el)=>{
        el.classList.remove("active")
    });
    document.getElementById(id).classList.add("active")
}

const openButton = document.getElementById("sidebar-container")
openButton.addEventListener("click", function (e){openMenu(e.target.id)})

window.addEventListener('resize', function() {
    const sideBarStatus = document.getElementById("sidebar").classList.contains("opened")
    if (window.innerWidth > 1000 && sideBarStatus){
        openButton.click()
    }
}, true)
function openMenu(id){
    if (id === "sidebar-container") {
        let options = document.querySelectorAll(".content__title")
        let sidebar = document.getElementById("sidebar")
        options.forEach((el) => {
            el.classList.toggle("opened")
        })
        sidebar.classList.toggle("opened")
    }
}