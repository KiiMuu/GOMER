$(function () {

    'use strict';
    
    // Toggle like icon

    $('.blog-btn i').on('click', function() {
        $(this).toggleClass('liked');
    });

    $(".blog-btn i").on('click', function(){

        if ($(this).attr('uk-tooltip') === 'Like this') {

            $(this).attr('uk-tooltip', 'Unlike this');

         } else {

            $(this).attr('uk-tooltip', 'Like this');

         }
         
    });

    // Scroll Btn

    var scrollButton = $("#scroll-top");

    $(window).on('scroll', function () {

        if ($(this).scrollTop() >= 300) {
            scrollButton.fadeIn(300);
        } else {
            scrollButton.fadeOut(300);
        }
    });
    scrollButton.on('click', function () {

        $("html, body").animate({
            scrollTop: 0
        }, 1000);

    });


    // Navbar Links on Clicking

    $('.navbar li a').on('click', function () {

        $('html, body').animate({

            scrollTop: $("#" + $(this).data("value")).offset().top

        }, 1200);

    });


    $(".question .question-btn .qBTN").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1200);
    });
    

});


// Fire The Loading Screen...



$(window).on('load', function() {


    $(".loading-overlay .spinner").fadeOut(800, function(){

        $(".loading-overlay").slideUp(800, function() {

            $(this).remove();

        });

    });

});