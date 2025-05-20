$(document).ready(function(){

    // 네비게이션
    $(".submenu, .submenu_wrap").hide();

    $(".gnb > li > a").mouseenter(function(){
        $("header").css("box-shadow", "none");
        $(".submenu, .submenu_wrap").stop().slideDown(500);
    })
    $("header").mouseleave(function(){
        $(".submenu, .submenu_wrap").stop().slideUp(500);
        $("header").css("box-shadow", "");
    })


    // 도서 슬라이드
    sWidth = $('.sub_book_box').width() + 40;
    let cnt = 0;
    const totalSlides = $('.sub_book_box').length;
    
    function slide(){
        $('.sub_book').stop().animate({marginLeft: (cnt * -sWidth) + "px"}, 400);
    }
    
    //sub_book_box clone 만들기
    const lastClones = $(".sub_book_box").slice(0, 3).clone();
    $(".sub_book_box").parent().append(lastClones);
    const firstClones = $(".sub_book_box").eq(5).clone();
    $(".sub_book_box").parent().prepend(firstClones);


    //main_book img 파일면 변경 이벤트 선언
    let newSrc;
    $(".book_detail").eq(0).addClass("visible");

    // 애니메이팅 중 클릭 막기
    let isAnimating = false;

    $('.arrow_r').on('click', function(){
        if (isAnimating) return;
        isAnimating = true;


        if (cnt < totalSlides){
            cnt++;

            //sub_book 슬라이드
            slide();
            //main_book img 변경
            newSrc = "./img/main/책" + (cnt + 1) + ".png";
            $(".imgSlide img").attr("src", newSrc);
            //main_book_detail 변경
            $(".book_detail").removeClass("visible");
            $(".book_detail").eq(cnt).addClass("visible");  
        } 
        if (cnt === totalSlides){

            cnt = 0;

            newSrc = "./img/main/책" + (cnt + 1) + ".png";
            $(".imgSlide img").attr("src", newSrc);
            $(".book_detail").removeClass("visible");
            $(".book_detail").eq(cnt).addClass("visible");  

            setTimeout(() => {
             $(".sub_book").css("margin-left", "0px").css("display", "none")
             .css("display", "block");
           }, 500);
        }

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    })

    $('.arrow_l').on('click', function(){
        if (isAnimating) return;
        isAnimating = true;

        if (cnt > 0){
            cnt--;
            
            slide();

            newSrc = "./img/main/책" + (cnt + 1) + ".png";
            $(".imgSlide img").attr("src", newSrc); 

            $(".book_detail").removeClass("visible");
            $(".book_detail").eq(cnt).addClass("visible");
        }
        if (cnt === 0){
            cnt = 7;

            setTimeout(() => {
                $(".sub_book").animate({marginLeft : cnt * -sWidth + "px"},0)
                .css("display", "none").css("display","block");
            }, 500);
        }
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    })


})