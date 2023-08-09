$(function () {
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  $('.burger').on('click', function () {
    $(this).toggleClass('burger-active');
    $('.header-mobile').slideToggle();
  });

  $('.header-search-btn').on('click', function () {
    $('.header-search').toggleClass('active');
    $('.overlay').toggleClass('show');
  });

  $('.header-compare').hover(
    function () {
      $('.header-compare-popup').addClass('visible');
    },
    function () {
      $('.header-compare-popup').removeClass('visible');
    }
  );

  $('.overlay').on('click', function () {
    $('.overlay').removeClass('show');
    $('.header-search').removeClass('active');
  });

  $('.footer-menu-title').on('click', function () {
    var currentItem = $(this).parent();
    $('.footer-menu-content').each(function (i, el) {
      if ($(el).parent().is(currentItem)) {
        $(el).prev().toggleClass('is-open');
        $(el).next().toggleClass('is-open');
        $(el).slideToggle();
      }
    });
  });

  $('.filter-show-btn').on('click', function () {
    $('.filter').slideToggle();
  });

  $('.filter-close-btn').on('click', function () {
    $('.filter').slideToggle();
  });

  $('.filter-item-header').on('click', function () {
    var currentItem = $(this).parent();
    $('.filter-item-body').each(function (i, el) {
      if ($(el).parent().is(currentItem)) {
        $(el).prev().toggleClass('is-open');
        $(el).next().toggleClass('is-open');
        $(el).slideToggle();
      }
    });
  });

  $('#range-slider').ionRangeSlider({
    skin: 'round',
    type: 'double',
    hide_min_max: true,
    min: 0,
    max: 35000,
    from: 1000,
    to: 18000,
    prefix: '₽ ',
    hide_from_to: true,
    onChange(data) {
      $('#min-price').val(data.from);
      $('#max-price').val(data.to);
    },
  });

  var catalogCardSlider = new Swiper('.catalog-card-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    pagination: {
      el: '.catalog-card-slider .slider-pagination',
      clickable: true,
    },
  });

  var withItBuySlider = new Swiper('.with-it-buy-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    autoHeight: 'true',
    navigation: {
      nextEl: '.with-it-buy-slider-wrapper .slider-btn-next',
      prevEl: '.with-it-buy-slider-wrapper .slider-btn-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  var productCardSliderThumbs = new Swiper('.product-card-slider-thumbs', {
    spaceBetween: 15,
    slidesPerView: '4',
    speed: 600,
    direction: 'vertical',
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.product-card-slider-col-thumbs .slider-btn-next',
      prevEl: '.product-card-slider-col-thumbs .slider-btn-prev',
    },
  });

  var productCardSliderMain = new Swiper('.product-card-slider-main', {
    speed: 600,
    mousewheel: true,
    grabCursor: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    direction: 'horizontal',
    effect: 'fade',
    thumbs: {
      swiper: productCardSliderThumbs,
    },
    navigation: {
      nextEl: '.product-card-slider-col-main .slider-btn-next',
      prevEl: '.product-card-slider-col-main .slider-btn-prev',
    },
  });

  var compareSlider = new Swiper('.compare-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    autoHeight: 'true',
    navigation: {
      nextEl: '.compare-slider-wrapper .slider-btn-next',
      prevEl: '.compare-slider-wrapper .slider-btn-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
});
