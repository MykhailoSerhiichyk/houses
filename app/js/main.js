$(function(){

    $('.projects-content__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.projects-content__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.projects-content__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });

    $('.projects__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
    });

});




