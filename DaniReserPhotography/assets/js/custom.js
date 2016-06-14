$(".menuTrigger").click(function() {
    
    if ($(".naviMenu").is(":visible")) {
        
        $(".naviMenu").slideUp(1000);
        $(".fa").css({'-webkit-transform' : 'rotate('+ 360 +'deg)',
                 '-moz-transform' : 'rotate('+ 360 +'deg)',
                 '-ms-transform' : 'rotate('+ 360 +'deg)',
                 'transform' : 'rotate('+ 360 +'deg)'});
        
    } else {
        
        $(".naviMenu").slideDown(1000);
        $(".fa").css({'-webkit-transform' : 'rotate('+ 180 +'deg)',
                 '-moz-transform' : 'rotate('+ 180 +'deg)',
                 '-ms-transform' : 'rotate('+ 180 +'deg)',
                 'transform' : 'rotate('+ 180 +'deg)'});
        
    };
    
    
    
});