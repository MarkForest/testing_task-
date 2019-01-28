$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        //autoplay: true,
        loop: true,
        //autoplayTimeout: 10000
    });
    document.querySelector('.owl-carousel .owl-nav button.owl-prev span').textContent = '';
    document.querySelector('.owl-carousel .owl-nav button.owl-next span').textContent = '';
});
