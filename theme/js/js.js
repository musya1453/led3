(function ($) {

  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false,
      prevText: "",
      nextText: ""
    });
  });

  $(document).ready(function () {
    var $summtext = $('.summ').text();

    $("#slider").slider({
      value: 1600,//Значение, которое будет выставлено слайдеру при загрузке
      min: 1600,//Минимально возможное значение на ползунке
      max: 8000,//Максимально возможное значение на ползунке
      step: 1,//Шаг, с которым будет двигаться ползунок
      create: function (event, ui) {
        val = $("#slider").slider("value");//При создании слайдера, получаем его значение в перемен. val
        $("#contentSlider").html(val);//Заполняем этим значением элемент с id contentSlider
      },
      slide: function (event, ui) {
        $("#contentSlider").html(ui.value);//При изменении значения ползунка заполняем элемент с id contentSlider
        $('#slider .back-sum').css('width', $('#slider .ui-slider-handle').position().left);

        var $sum = $('.summ'),
          $slide1 = $("#contentSlider").text(),
          $slide2 = $("#contentSlider2").text();

        $('#slider2 .back-sum').css('width', $('#slider2 .ui-slider-handle').position().left);

        $sum.text(parseInt($slide1)  + parseInt($slide2) + parseInt($summtext));
      }
    });
  });

  $(document).ready(function () {
    var $summtext = $('.summ').text();

    $("#slider2").slider({
      value: 160,//Значение, которое будет выставлено слайдеру при загрузке
      min: 160,//Минимально возможное значение на ползунке
      max: 1280,//Максимально возможное значение на ползунке
      step: 1,//Шаг, с которым будет двигаться ползунок
      create: function (event, ui) {
        val = $("#slider2").slider("value");//При создании слайдера, получаем его значение в перемен. val
        $("#contentSlider2").html(val);//Заполняем этим значением элемент с id contentSlider
      },

      slide: function (event, ui) {
        $("#contentSlider2").html(ui.value);//При изменении значения ползунка заполняем элемент с id contentSlider

        var $sum = $('.summ'),
          $slide1 = $("#contentSlider").text(),
          $slide2 = $("#contentSlider2").text();

        $('#slider2 .back-sum').css('width', $('#slider2 .ui-slider-handle').position().left);

        $sum.text(parseInt($slide1)  + parseInt($slide2) + parseInt($summtext));
      }
    });
  });

  function initCalc() {


  }

  $(window).load(function () {
    var $summtext = $('.summ').text();
    $('.summ').text(parseInt($("#contentSlider").text())  + parseInt($("#contentSlider2").text()) + parseInt($summtext));

    var $sum = $('.summ'),
      data1 = 1000,
      data2 = 2000,
      data3 = 3000,
      $btns = $('.btns a');

    $('.btn-1').on('click touch', function (e) {
      e.preventDefault();
      var act = $('.btns .active').data('int');
      var data = $(this).data('int');

      $btns.removeClass('active');
      $(this).addClass('active');
      $sum.text(parseInt($sum.text()) + parseInt(data) - parseInt(act));
    });

    $('.btn-2').on('click touch', function (e) {
      e.preventDefault();
      var act = $('.btns .active').data('int');
      var data = $(this).data('int');

      $btns.removeClass('active');
      $(this).addClass('active');
      $sum.text(parseInt($sum.text()) + parseInt(data) - parseInt(act));
    });

    $('.btn-3').on('click touch', function (e) {
      e.preventDefault();
      var act = $('.btns .active').data('int');
      var data = $(this).data('int');

      $btns.removeClass('active');
      $(this).addClass('active');
      $sum.text(parseInt($sum.text()) + parseInt(data) - parseInt(act));
    });
  })


})(jQuery);

