$(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {        // If page is scrolled more than 300px
            $('.toTop').fadeIn(300);     // Fade in the arrow
        } else {
            $('.toTop').fadeOut(300);    // Else fade out the arrow
            $('.toTop').fadeOut(300);    // Else fade out the arrow
        }
        });
        