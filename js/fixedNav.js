$(document).ready(function() {
        var nav = $('.nav');
        var logo = $('.logo');
        var list = $('.nav a');
        var ham = $('.hamburger');
        var banner = $('.banner');
        var pos = nav.position();
            
        $(window).scroll(function() {
                
            var windowpos = $(window).scrollTop();
                
            if(windowpos>=banner.outerHeight()) {
                nav.addClass('fixedTop');
                logo.addClass('shrink');
                list.addClass('shrink2');
                ham.addClass('shrink3');
            }
            else {
                nav.removeClass('fixedTop');
                logo.removeClass('shrink');
                list.removeClass('shrink2');
                ham.removeClass('shrink3');
            }
        });
});