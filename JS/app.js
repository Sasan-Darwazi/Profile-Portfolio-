const cake = document.querySelector('.header .nav-bar .nav-list .cake');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header.main');


cake.addEventListener('click', () => {
        cake.classList.toggle('active');
        mobile_menu.classList.toggle('active');

    });


    document.addEventListener('scroll',()=>{
        var scroll_position = window.scrollY;
        if(scroll_position > 250){
            header.style.backgroundColor = "#29323c";
        }else{
            header.style.backgroundColor = "rgba(12, 9, 9, .3)";
        }
    })


    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            cake.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    })