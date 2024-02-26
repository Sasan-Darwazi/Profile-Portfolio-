const cake = document.querySelector('.header .nav-bar .nav-list .cake');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header.main');

// this is for activing the cake

cake.addEventListener('click', () => {
        cake.classList.toggle('active');
        mobile_menu.classList.toggle('active');

    });


    // this si for scroling the header or fallling the header
    document.addEventListener('scroll',()=>{
        var scroll_position = window.scrollY;
        if(scroll_position > 250){
            header.style.backgroundColor = "#29323c";
        }else{
            header.style.backgroundColor = "transparent"
        }
    })


    // this below code is for,while the user click the each nav-bars,
    // the cake automatically closed.
    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            cake.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    })