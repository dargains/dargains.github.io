$(document).ready(function () {
    $(".popupPortfolio").hide();

    $(".itemPortfolio").click(function () {
        var index = $(".itemPortfolio").index(this) + 1,
            itemPop = $(".popupPortfolio" + index);
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

    $(".hero-down").click(function(){
        $('html,body').animate({
        scrollTop: $('#hero-end').offset().top}, 'slow');
    });

});


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

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
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
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

// elements
var $page = $('.single');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
});
