$(function() {
    if(($('#sections-container').length > 0) && ($('.show-menu').length > 0)) {
        $('.show-menu').click(function() {
            $('#sections-container').toggleClass('visible');
        });
    }
});