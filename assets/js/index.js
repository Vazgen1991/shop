$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#scroll').fadeIn();

        } else {
            $('#scroll').fadeOut();
        }

    });

    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 1500);
        return false;
    });

    $(".banner__btn").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".catalog").offset().top
        }, 1000);
    });

    $('.header__burger_img').click(function () {
        $('.rs_header_nav').toggleClass('active_toggle');
    });

    $('.catalog_form_cancel').click(function () {
        $('.catalog__order_form ').css("display", "none");
        $('body').removeClass('overlay');


    });

    window.onclick = function (event) {
        if (event.target.classList.contains('catalog__order_btn')) {
            $('.catalog__order_form').css("display", "flex");
            $('body').addClass('overlay');

        }
    };

    $('.catalog').each(function() {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.catalog__link').click(function() {
            ths.find('.catalog__link').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

});
