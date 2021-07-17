$(function() {

    $('.products__item-inner--cart').on('click', function() {
        $('.products__item-btn').addClass('products__item-btn--active');
        $('.products__item-inner').addClass('products__item-inner--active');
    });

    $('.products__item-btn').on('click', function() {
        $('.products__item-btn').removeClass('products__item-btn--active');
        $('.products__item-inner').removeClass('products__item-inner--active');
    });

    $(".filter-products__star").rateYo({
        rating: 4,
        starWidth: "10px"
    });
    $(".products__item-star").rateYo({
        rating: 4,
        starWidth: "18px"
    });

    $(".filter-price__input").ionRangeSlider({

        onStart: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        }

    });

    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true
    });

    var mixer = mixitup('.products__items');
});