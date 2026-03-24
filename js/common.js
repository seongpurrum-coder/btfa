$(document).ready(function () {//시작

  AOS.init();

  //header
  $("header nav .gnb > li").mouseenter(function () {
    $(this).children(".depth2").stop().fadeIn();
  });
  $("header nav .gnb > li").mouseleave(function () {
    $(this).children(".depth2").stop().fadeOut();
  });
  $(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });

  $(".btn_menu").click(function () {
    $(".mgnb-wrap").animate({ left: '0' });
  });

  $(".mgnb-close").click(function () {
    $(".mgnb-wrap").animate({ left: '100%' });
  });

  $(".mgnb-language li a").eq(0).addClass("active");
  $(".mgnb-language li a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });



  /*sub-banner nav*/
  $(".depth1-wrap, .depth2-wrap").click(function () {
    $(this).toggleClass("active");
    $(this).children('ul').slideToggle();
  });

  //search
  $(".btn_search").click(function () {
    $(".search").slideDown();
  });
  $(".close").click(function () {
    $(".search").slideUp();
  });

  //util
  $(".util .language li a").eq(0).addClass("active");
  $(".util .language li a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  /*mb*/
  const mb = new Swiper('.mb', {
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  //notice tab
  $("#section02 .tab-box > ul > li").not(":first").hide();
  $("#section02 .tab-title .left > li").eq(0).addClass("active");

  $("#section02 .tab-title .left > li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var idx = $(this).index();
    $("#section02 .tab-box > ul > li").eq(idx).fadeIn().siblings().hide();
  });


  //photo-list
const photo_list = new Swiper('.photo-list', {
  loop: true,
  speed: 800,

  centeredSlides: true,
  slidesPerView: "auto",

  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },

  spaceBetween: 12,

  breakpoints: {
    768: { spaceBetween: 18 },
    1400: { spaceBetween: 45 },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true
  },
});

  //recruit tab
  $("#section05 .recruit-list > ul").not(":first").hide();
  $("#section05 .section5-tab > li").eq(0).addClass("active");

  $("#section05 .section5-tab > li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var idx = $(this).index();
    $("#section05 .recruit-list > ul").eq(idx).fadeIn().siblings().hide();
  });

  //popup
  $(".popup-txt > li").click(function () {
    $(".popup").hide();
  });


  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });

  //business
  $(".business-list>div").not(":first").hide();
  $(".business-tab li").eq(0).addClass("active");

  $(".business-tab li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var idx = $(this).index();
    $(".business-list>div").eq(idx).fadeIn().siblings().hide();
  });

  //pagination
  $(".pagination-wrap ul li.num").eq(0).addClass("active");
  $(".pagination-wrap ul li.num").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });


});//끝

