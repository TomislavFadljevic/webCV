jQuery(document).ready(function() {

    jQuery('.nameHolder').addClass("unsee").viewportChecker({
        classToAdd: 'see animated pulse',
        offset: 100
       });
    jQuery('.barContent').addClass("unsee").viewportChecker({
        classToAdd: 'see animated fadeIn',
        offset: 100
       });
    jQuery('.iconContainer').addClass("unsee").viewportChecker({
        classToAdd: 'see animated fadeIn',
        offset: 100
       });
});