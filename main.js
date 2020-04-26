$(document).ready(function() {
    //rotate
    $(window).scroll(function() {
        var theta = $(window).scrollTop() / 600 % Math.PI;
        $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
        return;
    });
    //Appear

    $(window).on('scroll', function() {
        var theta = $(window).scrollTop() / 300 % Math.PI;
        $('.section1').css({ opacity: 1 });
    });




});