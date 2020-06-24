// スクロール
$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 2000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    $('#top').click(function(){
        var target = $('.top').offset().top;
        $('html,body').animate({
            scrollTop: target
        }, 2000);
        return false;
    });
});
// フェードインアウト
$(function() {
    $(window).scroll(function() {
        $('.fade-in, .fade-in-2, .fade-in-3').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});
// ハンバーガーメニュー
$(function() {
    $('.menu-trigger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.nav').addClass('active');
        } else {
            $('.nav').removeClass('active');
        }
    });
});
// vegas-header
$(function() {
    $('#vegas-header').vegas({
        slides: [
            { src: '../img/vegas1.jpg' },
            { src: '../img/vegas2.jpg' },
            { src: '../img/vegas3.jpg' },
            { src: '../img/vegas4.jpg' }
        ],
        overlay: '../img/07.png',
        align:'center',
        valign:'center',
        transition: 'fade', 
        transitionDuration: 5000, 
        delay: 10000, 
        animation: 'kenburns',
        animationDuration: 15000, 
    });
});
