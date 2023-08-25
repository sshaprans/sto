"use strict"
// modal
const modal = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".modal_btn_js");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.querySelector(".overlay");
modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add("open");
        modal.classList.add("open");
        modal.classList.add("modal-an");
        document.querySelector('body').style.overflow = 'hidden';
    })
})
closeBtn.onclick = function() {
    overlay.classList.remove("open");
    modal.classList.remove("open");
    document.querySelector('body').removeAttribute('style');
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("open");
        overlay.classList.remove("open");
        document.querySelector('body').removeAttribute('style');

    }
}


// services
const services = document.querySelectorAll(".services_list_item");
const car = document.querySelector(".car");
const listItems = document.querySelectorAll('.services_list_item');
const carBox = document.querySelectorAll('.anim');

services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        car.classList.add('opacity_car');
    });
});
services.forEach(service => {
    service.addEventListener('mouseleave', () => {
        car.classList.remove('opacity_car');
    });
});
listItems.forEach(item => {

    item.addEventListener('mouseenter', () => {
        const dataServices = item.getAttribute('data-services');

        carBox.forEach(car => {
            const pic = car.getAttribute('data-services-pic');
            if(dataServices === pic) {
                car.classList.add('opacity_norm')
            }
            if(dataServices === pic && pic >= 5 && pic <= 6 ) {
                car.classList.add('opacity_light')
            }
        })
    });
    item.addEventListener('mouseleave', () => {
        carBox.forEach(pic => pic.classList.remove('opacity_norm', 'opacity_light'));
    });
});


//swier
const gallery = new Swiper('.gallery', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 80,
    slidesPerView: 4,

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        1720: {
            spaceBetween: 80,
            slidesPerView: 4,

        },
        1550: {
            spaceBetween: 60,
            slidesPerView: 3,

        },
        1250: {
            spaceBetween: 60,
            slidesPerView: 3,
        },

        851: {
            spaceBetween: 40,
            slidesPerView: 3,
        },

        600: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        406: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        0: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
    },
});
//bg menu
const burger = document.querySelector('.btn_burger');
burger.addEventListener('click', () => {
    document.querySelector('.mobile_menu').classList.toggle('is-active');
})