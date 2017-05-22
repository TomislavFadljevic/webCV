$(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 300px
            $('.toTop').fadeIn(200);     // Fade in the arrow
        } else {
            $('.toTop').fadeOut(200);    // Else fade out the arrow
            $('.toTop').fadeOut(200);    // Else fade out the arrow
        }
});
$('.toTop').each(function(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 5 }, 'slow');
        return false; 
    });
});