// VARIABLES //
var chatWidget = $('#main .cta-links .chat');
var headerNavDropdown = $('#upper-header .float-r .dropdown');
var headerNavToggle = $('#upper-header .float-r .toggle');

$(document).ready(function () {
    isMobile();
});

$(window).resize(function () {
    isMobile();
});

// MOBILE NAVIGATION //
headerNavToggle.click(function () {
    headerNavDropdown.parent().addClass('mobile');                            headerNavDropdown.slideToggle();
});

// CHAT WIDGET //
chatWidget.click(function () {
    window.alert("This will invoke the chat widget..... sorry run out of time to implement");
});


function isMobile(){
    var viewportWidth = $(window).width();  
    if (viewportWidth <= 767 ) {
        $('body').addClass('mobile');
        headerNavDropdown.removeAttr('style');
    } else {
        $('body').removeClass('mobile');
    }
}