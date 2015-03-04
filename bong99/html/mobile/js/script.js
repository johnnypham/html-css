$(document).ready(function () {
  var i=0;
  var count = $('.casino-bxslider').length;
  $('.casino-bxslider').each(function(){
    $(this).bxSlider({
      auto: false,
      captions: true,
      onSliderLoad: function(){
        i++;
        if(i==count)
          $("#tabs").tabs();
      }
    });
  })

  $(".size").kendoDropDownList();
});