var topHeight = $("#top").height();
var bgCol = "#FF80AB";

$(document).ready(function() {
    
    $("#focus").hide();
    
});

/*------------------*/

/* Shows desc on hover */
$(".cat").hover(function() {
    
    $(this).find(".desc").css("color", "#333");
    
}, function() {
    
    $(this).find(".desc").css("color", "transparent");
});

/* Updates and shows focus box */
$(".cat").click(function() {

    if ($(this).hasClass("love")) {
        
        var bgCol = "#FF80AB";
        
    } else if ($(this).hasClass("littles")) {
        
        var bgCol = "#B39DDB";
        
    } else if ($(this).hasClass("adoration")) {
        
        var bgCol = "#80DEEA";
        
    } else if ($(this).hasClass("tunes")) {
        
        var bgCol = "#FFCDD2";
        
    } else if ($(this).hasClass("quotes")) {
        
        var bgCol = "#EA80FC";
        
    } else if ($(this).hasClass("etc")) {
        
        var bgCol = "#7E57C2";
        
    };
        
    var artTitle = $(this).find(".desc").text();
    $("#bottom").fadeOut(500);
    $(this).addClass("animated rotateOut");
    $("#artTitle").text(artTitle);

    
    setTimeout(function() {
        
        $(".cat").removeClass("rotateOut");
        $("#focus").css("background-color", bgCol);
        $(".artBox a").hide();
        $("#focus").show();
        $("#focus").addClass("animated slideInDown");
        $("html, body").animate({ scrollTop: $(document).height() }, 3000);
        return false;
        
    }, 900);
    
    setTimeout(function() {
        
        $(".artBox").find('a[data-tag*="' + artTitle + '"]').attr('data-lightbox', artTitle).fadeIn(500);
        
    }, 1500);
    
});

$('#searchbar').keypress(function (e) {
  if (e.which == 13) {
    var searchTerms = $('#searchbar').val();
    $("#bottom").fadeOut(500);
    $("#artTitle").text(searchTerms);

    
    setTimeout(function() {
        
        $(".artBox a").hide();
        $("#focus").show();
        $("#focus").addClass("animated slideInDown");
        $("html, body").animate({ scrollTop: $(document).height() }, 3000);
        return false;
        
    }, 900);
    
    setTimeout(function() {
        
        $(".artBox").find('a[data-search*="' + searchTerms.toLowerCase() + '"]').attr('data-lightbox', searchTerms).delay(500).fadeIn(500);
        
    }, 1500);
    return false;    //<---- Add this line
  }
});

/* Closes the box */
$("#close").click(function() {
    
    $("#focus").removeClass("slideInDown").addClass("animated slideOutUp");
    $("html, body").animate({
         scrollTop:0
         },300);
    
    setTimeout(function() {
        
        $("#focus").removeAttr("style");
        $("#focus").hide();
        $(".animated").addClass("rotateIn");
        $("#bottom").not(".cat .animated").fadeIn(500);
        
    }, 1000);
    
    setTimeout(function() {
        
        $("#focus").removeClass("animated slideOutUp");
        $(".cat").removeClass("animated rotateIn")
        
    }, 2000);
    
});

$(".info").click(function() {
   
    $(".topContent").fadeOut(1000);
    
    setTimeout(function() {
        
        $("#info").show();
        $("#info").addClass("animated slideInDown");
         
    }, 1100);
    
    setTimeout(function() {
        
        $(".infoClose, .infoContent").fadeIn(1000);

    }, 1800);
    
});

$(".infoClose").click(function() {
    
    
    $(".infoClose, .infoContent").fadeOut(500);
    
    setTimeout(function() {
        
        $("#info").removeClass("slideInDown").addClass("slideOutUp");
        
        
    }, 600);
    
    setTimeout(function() {
        
        $("#info").hide();
        $(".topContent").fadeIn(1000);
        $("#info").removeClass("animated slideOutUp")
        
    }, 1500);
    
});

$(".aboutIcon").click(function() {
    
    $(this).css("color", "#167B88");
    $(".pricingIcon, .contactIcon").removeAttr("style");
    $(".pricing, .contact").fadeOut(500);
    
    setTimeout(function() {
        
        $(".about").fadeIn(500);
        
    }, 550);
    
});

$(".pricingIcon").click(function() {
    
    $(this).css("color", "#B3003D");
    $(".aboutIcon, .contactIcon").removeAttr("style");
    $(".about, .contact").fadeOut(500);
    
    setTimeout(function() {
        
        $(".pricing").fadeIn(500);
        
    }, 550);
    
});

$(".contactIcon").click(function() {
    
    $(this).css("color", "#4A2E7E");
    $(".aboutIcon, .pricingIcon").removeAttr("style");
    $(".about, .pricing").fadeOut(500);
    
    setTimeout(function() {
        
        $(".contact").fadeIn(500);
        
    }, 550);
    
});
