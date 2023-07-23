$(document).ready(function(){
    // 햄버거 버튼 누르면 나오는 서브 메뉴박스
   $('#menu-btn').click(function(){
        $('.menu-bar-box').toggleClass('active');
    });

    //background color 변경
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        console.log(sct);

        var sec2 = $('.sec-2').offset().top;
        var sec3 = $('.sec-3').offset().top;

        var sec4 = $('.sec-4').offset().top;
        var sec6 = $('.sec-6').offset().top;

        if(sct >= sec2 && sct < sec3){
            $('#wrap').addClass('active');
        }else if(sct >= sec4 && sct < sec6){
            $('#wrap').addClass('active');
            $('.sec-4').addClass('active');
        }else{
            $('#wrap').removeClass('active');
        }

    });
 
});
