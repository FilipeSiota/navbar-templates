/*=====================================
# DROPDOWN MENU - MOBILE
=====================================*/
const $nav = $('nav');
const $menuIcon = $('#menu-icon');
const $iconLine = $('.line');

$iconLine.addClass('switch-icon'); // switch the X icon to the HAMBURGUER icon

$menuIcon.on('click', function() {

    $nav.slideToggle(400); // slide the dropdown menu
    $iconLine.toggleClass('switch-icon'); // switch the icon shape
    $('body').toggleClass('scroll-hidden'); // disable/enable the body scroll
});

/*=====================================
# FIXING BUGS WHEN RESIZING THE WINDOW
(SWITCHING BETWEEN MOBILE AND DESKTOP LAYOUTS)
=====================================*/
let opened = false; // used to execute some actions only once when resizing the window (not everytime it is resized)

$(window).on('resize', function() {

    if ($(window).width() > 980 && !opened) // when switch to desktop layout
    {
        $nav.css('display', 'block'); // always maintain the nav content appearing

        opened = true;
    }
    else if ($(window).width() <= 980 && opened) // when switch to mobile layout
    {
        $nav.css('display', 'none'); // always hide the nav content
        $iconLine.addClass('switch-icon'); // turn the icon shape to HAMBURGUER
        $('body').removeClass('scroll-hidden'); // and enable the body scroll

        opened = false;
    }
});