$(function () {
  /* 메뉴 */
  $('header nav ul.gnb>li,.nav_bg').hover(function () {
    $('.nav_bg,ul.sub').stop().slideDown();
  }, function () {
    $('.nav_bg,ul.sub').stop().slideUp();
  });


  /* 메인비쥬얼 슬라이드 */
  let swiper1 = new Swiper(".mainSwiper", {
    loop: true,
    cssMode: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "main .swiper-button-next",
      prevEl: "main .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    keyboard: true,
  });
 /*  $('.mainSwiper .pause').on('click', function () {
    swiper1.autoplay.stop();
  })
  $('.mainSwiper .play').on('click', function () {
    swiper1.autoplay.start();
  }); */
  $('.swiper-slide').on('mouseover', function(){
    swiper1.autoplay.stop();
  });
  $('.swiper-slide').on('mouseout', function(){
    swiper1.autoplay.start();
  });

  /* 교육 슬라이드 */
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.35,
    spaceBetween: 25,
    navigation: {
      nextEl: ".contents section.program .prog_tit .swiper-button-next",
      prevEl: ".contents section.program .prog_tit .swiper-button-prev",
    },
  });

  /* 문화행사 */
  // 초기 상태에서는 첫 번째 .eve_con을 보이게 설정
  $(".eve_con").hide();
  $(".eve_con:first").show();

  // .bullet의 각 div를 클릭했을 때
  $(".bullet div").click(function() {
      // 모든 .bullet의 div에게 on 클래스 제거
      $(".bullet div").removeClass("on");

      // 클릭한 div에게 on 클래스 추가
      $(this).addClass("on");

      // 클릭한 div의 인덱스를 가져와서 해당 인덱스에 해당하는 .eve_con 보이게 하기
      var index = $(this).index();
      $(".eve_con").hide();
      $(".eve_con:eq(" + index + ")").show();
  });

});