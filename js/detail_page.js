$(document).ready(function(){


    //네비게이션
    $(".submenu, .submenu_wrap").hide();

    $(".gnb > li > a").mouseenter(function(){
        $("header").css("box-shadow", "none");
        $(".submenu, .submenu_wrap").stop().slideDown(500);
    })
    $("header").mouseleave(function(){
        $(".submenu, .submenu_wrap").stop().slideUp(500);
        $("header").css("box-shadow", "");
    })


    //탭 기능
    $(".tabs li").click(function(){
        const index = $(this).index();

        $(".tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_content").removeClass("active");
        $(".tab_content").eq(index).addClass("active");

            //메인 height 지정
        var newHeight = $(".detail_box").outerHeight();
        $(".main_wrap").height(newHeight + 300 + 'px');
    })

    //페이지 로드 시 메인 높이 초기값
    var initialHeight = $(".detail_box").outerHeight();
    $(".main_wrap").height(initialHeight + 300 + 'px');

})