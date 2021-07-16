$(function() {

    $(".filter-products__star").rateYo({
        rating: 4,
        starWidth: "10px"
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