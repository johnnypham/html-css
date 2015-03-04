$(document).ready(function () {
  $('#main-slider .slider').bxSlider();
  $(".size").kendoDropDownList();
  $('.bx-prev').append( "<span>prev</span>" );
  $('.bx-next').append( "<span>prev</span>" );

//  showMenuList();
//  ramdomNews();
  ramdomNewsOption2();
//  calcHeight();
});

var showMenuList = function () {
  var mainMenu = $('.main-menu');
  var subMenu = $('.sub-menu');
  mainMenu.find('li').hover(function () {
    if ($(this).hasClass('active-menu')) {
      return;
    }
    mainMenu.find('li').removeClass('active-menu');
    subMenu.hide();
    var menuId = $(this).addClass('active-menu').data('menu');
    $('#' + menuId).css({display: 'table'})
  })
};

var ramdomNews = function () {
  var news = $('.news');
  news.each(function () {
    var figureNew = $(this).find('.figure-news');
    var numberPost = figureNew.length;
    var showNews = Math.floor(Math.random() * numberPost);
    $(this).find('.figure-news').hide();
    console.log(showNews);
    $(this).find('.figure-news:eq(' + showNews + ')').show();
  });
};

var ramdomNewsOption2 = function () {
  var news = $('.news');
  var figureNew = $('.news:eq(0)').find('.figure-news');
  news.find('.figure-news').hide();
  var numberPost = figureNew.length;
  var showNews = Math.floor(Math.random() * numberPost);
  news.find('.figure-news:eq('+showNews+')').show();

};

var calcHeight = function () {
  var home = $('.home-page');
  var html = $('html');
  var windows = $(window);
  heightWD = windows.outerHeight();
  alert(heightWD);
  heightHTML = html.outerHeight();

  alert(heightHTML);
  if (heightWD < heightHTML) {
    html.css({height: '3000'});
  }
};