
// スクロール
$(function() {
    $('#about').click(function(){
        var target = $('.about').offset().top;
        $('html,body').animate({
            scrollTop: target
        }, 1000);
        return false;
    });
    $('#skills').click(function(){
        var target = $('.skills').offset().top;
        $('html,body').animate({
            scrollTop: target
        }, 1000);
        return false;
    });
    $('#contact').click(function(){
        var target = $('.contact').offset().top;
        $('html,body').animate({
            scrollTop: target
        }, 1000);
        return false;
    });
    $('#top').click(function(){
        var target = $('.top').offset().top;
        $('html,body').animate({
            scrollTop: target
        }, 1000);
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
            { src: 'https://miyavi-is-apple.github.io/vegas1.jpg' },
            { src: '../img/vegas2.jpg' },
            { src: '../img/vegas3.jpg' },
            { src: '../img/vegas4.jpg' }
        ],
        overlay: '../vegas/overlays/07.png',
        align:'center',
        valign:'center',
        transition: 'fade', 
        transitionDuration: 5000, 
        delay: 10000, 
        animation: 'kenburns',
        animationDuration: 15000, 
    });
});
