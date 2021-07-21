$(function() {

    $('.arrow').on('click', function() {
        $('.arrow').removeClass('arrow--active');
        $(this).addClass('arrow--active');
    });

    $('.related__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');
        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $('.product-info__input').styler();

    $('.product-info__star').rateYo({
        rating: 4,
        starWidth: "16px"
    });

    $('.product-slide__mini').slick({
        asNavFor: '.product-slide__big',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__mini',
        draggable: false,
        arrows: false,
        fade: true
    });

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