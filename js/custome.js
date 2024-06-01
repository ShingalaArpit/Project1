$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // loader js


    

});
$(document).ready(function(){

        $(window).scroll(function(){
        var h = $(window).scrollTop()
        if(h>200)
        {
            $('.navbar').addClass('fixed-header')
        }
        else{
            $('.navbar').removeClass('fixed-header')
        }
    })

    setInterval(function(){
        $('.loader').fadeOut(500)
    },2000)


    new WOW().init();
})