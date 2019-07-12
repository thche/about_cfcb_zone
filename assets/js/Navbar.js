$(document).ready(function(){
    var stoptransparency = innerHeight; // when to stop the transparent menu
    var hidingmenu = innerHeight; // when to hide the menu
    var lastScrollTop = 0, delta = 0;
    $(this).scrollTop(0);
	$(window).on('scroll load resize', function() {
		var position = $(this).scrollTop();
		if(position > stoptransparency) {
			$('#transmenu').removeClass('transparency');
		} else {
			$('#transmenu').addClass('transparency');
		}
        if(Math.abs(lastScrollTop - position) <= delta)
            return;
        if (position > hidingmenu && position > lastScrollTop){
            $('#transmenu').fadeOut(0);
        } else {
            $('#transmenu').fadeIn(0);
        }
        lastScrollTop = position;  
	});
    
    $('#transmenu .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(0);
    });

    $('#transmenu .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(0);
    });
});

$(".blur3310").draggable();
$(".blur6605").draggable();