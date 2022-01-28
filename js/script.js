var myFullpage = new fullpage('#fullpage', {
    anchors: ['', '', '', '', ''],
    sectionsColor: ['#FFFF99', '#FFFFCC', '#D0E9EC', 'transparent', '#FFFFEE' ],
    navigation: true,
    navigationPosition: 'right'
});


$(".gnb>li").on("mouseover mouseenter",function(){
    $(this).children(".submenu").stop().fadeIn(400);
});
$(".gnb>li").on("mouseleave mouseout",function(){
    $(this).children(".submenu").stop().fadeOut(400);
});

$(".main_text,.sub_text").css("display","none");

setTimeout(function(){
    $(".main_text").fadeIn(1000);
},50);

setTimeout(function(){
    $(".sub_text").fadeIn(1000);
},1050);


var SlideWidth = 28.888; // 슬라이드 (이동) 할애의 가로 사이즈
function nextSlide(){
    $(".slideShow").animate({"left":"-"+SlideWidth+"%"},function(){
        $(".slideShow").css("left",0);
    });
    $(".slideShow").append($(".slideShow ul").first().clone());
    $(".slideShow ul").first().remove();
}
function prevSlide(){
    $(".slideShow").prepend($(".slideShow ul").last().clone().css("right",0));
    $(".slideShow ul").last().remove();
    $(".slideShow").animate({"left":SlideWidth + "%"},function(){
        $(".slideShow").css("left",0);
    });
}

var AutoSlide = setInterval(function(){nextSlide()},3000);

$(".slideWrap").hover(function(){
    clearInterval(AutoSlide);
},function(){
    AutoSlide = setInterval(function(){nextSlide()},3000);
});






