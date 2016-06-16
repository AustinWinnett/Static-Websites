var $loading = $('#loadingDiv'), timer;

$loading.hide()
$(document)
    .ajaxStart(function () {
        timer && clearTimeout(timer);
        timer = setTimeout(function() {
            $loading.show();
        }, 1000);
    })
    .ajaxStop(function () {
        clearTimeout(timer);
        $loading.hide();
    });

/* ---- */

$(document).ready(function() {
    
    $("body").fadeIn(1000);
    
});

$.get("home.html", function(data){
    $("#content").html(data).fadeIn(500);
});

function menuChoice(choice) {
    
    var page = choice;
    $("li").removeClass("active");
    $("#content, #footer").fadeOut(500);
    
    setTimeout(function() {
        $.get(page + ".html", function(data){
            $("#content").html(data).fadeIn(500);
            $("#footer").fadeIn(500);
        });
    }, 500);
    
};

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

$(".naviMenu").find("li").click(function() {
    
    $(".naviMenu").slideUp(1000);
    $(".fa").css({'-webkit-transform' : 'rotate('+ 360 +'deg)',
                 '-moz-transform' : 'rotate('+ 360 +'deg)',
                 '-ms-transform' : 'rotate('+ 360 +'deg)',
                 'transform' : 'rotate('+ 360 +'deg)'});
    
})

$(".home").click(function() {
    
    menuChoice("home");
    $(".home").addClass("active");
    
});

$(".family").click(function() {
    
    menuChoice("family");
    $(".family").addClass("active");
    
});

$(".wedding").click(function() {
    
    menuChoice("wedding");
    $(".wedding").addClass("active");
    
});

$(".event").click(function() {
    
    menuChoice("event");
    $(".event").addClass("active");
    
});

$(".contact").click(function() {
    
    menuChoice("contact");
    $(".contact").addClass("active");
    
});