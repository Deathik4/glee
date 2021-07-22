$(function() {

    $('.related__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: false,
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
        starWidth: "16px",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
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
        starWidth: "10px",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
    });
    $(".products__item-star").rateYo({
        rating: 4,
        starWidth: "18px",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
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