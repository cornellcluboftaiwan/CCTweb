/*smoothly fades everything into view when ready*/
// $(document).ready(function() {
//     $('.main-content').fadeIn(800, 'swing');
// });

/*for smooth navigation*/
var padding = 0;
$('.navbar-nav li a, .scroll-down.animated, .navbar-brand').bind('click', function (event) {
    var $anchor = $(this);
    console.log($(this));
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - padding
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});