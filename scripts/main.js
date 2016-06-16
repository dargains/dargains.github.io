$(document).ready(function () {
    $(".popupPortfolio").hide();

    $(".itemPortfolio").click(function () {
        var index = $(".itemPortfolio").index(this) + 1
            , itemPop = $(".popupPortfolio" + index);
        $(".popupPortfolio").show();
        itemPop.show();
        $(".popupPortfolio").css("top", Math.max(0, (($(window).height() - $($(".popupPortfolio")).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        $(".popupPortfolio").css("left", Math.max(0, (($(window).width() - $($(".popupPortfolio")).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        disableScroll();
    });

    $(".closePortfolio").click(function () {
        $(this).parent().parent().hide();
        $(".popupPortfolio").hide();
        enableScroll();
    });

    $(".hero-down").click(function () {
        $('html,body').animate({
            scrollTop: $('#hero-end').offset().top
        }, 'slow');
    });




    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {
        37: 1
        , 38: 1
        , 39: 1
        , 40: 1
    };

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }


    /* ~~~~~~~~~~~ HEADER ~~~~~~~~~~~~ */

    // variables
    var $page = $('.single');
    var lastPos = undefined;
    var menuOpen = false;

    $('.menu_toggle').on('click', function () {
        $page.toggleClass('shazam');
    });

    $('.content').on('click', function () {
        $page.removeClass('shazam');
    });




    var goTo = function (clicked, dest) {
        $(clicked).on('click', function () {

            $page.removeClass('shazam');


            $('html, body').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {

                $('html, body').stop();
            });

            $('html, body').stop(true, false).animate({
                scrollTop: $(dest).offset().top
            }, 1500, function () {
                $('html, body').off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                $('html, body').stop();
            });

        });
    }

    goTo("#menu-about", "#about-start");
    goTo("#menu-portfolio", "#portfolio-start");
    goTo("#menu-contact", "#contact-start");
    //
    //    /* scroll to Portfolio */
    //    $('#menu-portfolio').on('click', function () {
    //
    //        $page.removeClass('shazam');
    //
    //
    //        $(".content").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'
    //            , function () {
    //                $('html, body').animate({
    //                    scrollTop: $("#portfolio-start").offset().top
    //                }, 1500);
    //
    //            });
    //    })
    //
    //    /* scroll to Contact */
    //    $('#menu-contact').on('click', function () {
    //
    //        $page.removeClass('shazam');
    //
    //
    //        $(".content").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'
    //            , function () {
    //                $('html, body').animate({
    //                    scrollTop: $("#contact-start").offset().top
    //                }, 1500);
    //
    //            });
    //    })


    /* ----------- FOOTER -------------- */
    $('.click-heart').on('click', function () {
        $(this).addClass("animated-heart").delay(300).queue(function (next) {
            $(this).removeClass("animated-heart");
            next();
        });

        $('.footer p:first-child').addClass("wobble").delay(1000).queue(function (next) {
            $(this).removeClass("wobble");
            next();
        });

        $('.footer p:last-child').addClass("shake").delay(1000).queue(function (next) {
            $(this).removeClass("shake");
            next();
        });
    });

    /* ----------- MISC -------------- */

    /* URL bar resize fix for mobile */
    var screenHeight = $(window).height();
    $('.single').css('height', screenHeight + 'px');


});