//listen when a user clicks on the hamburger icon

$('.hamburger').on('click', function() {
    //if menu is closed, slide down
    if($('.menu').hasClass('open')){
        $('.menu').removeClass('open');
    } else {
        //if menu is open; slide updateCommands
	$('.menu').addClass('open');
    }
});
$('.menu a').on("click", function (){
    $('.menu').removeClass('open');
});
