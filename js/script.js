(function($) {

  "use strict";

  // Responsive Navigation with Button
  var initHamburgerMenu = function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu-list");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("responsive");
    }

    const navLink = document.querySelectorAll(".item-anchor");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("responsive");
    }
  };

  // Tab Section
  var initTabs = function(){
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });
  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-img"), {
      keepImg: true,
    });
  }
        
  // document ready
  $(document).ready(function() {
    initHamburgerMenu();
    initTabs();
    initJarallax();

    jQuery('.stellarnav').stellarNav({
      theme: 'plain',
      closingDelay: 250,
    });

    $(".user-items .icon-search").click(function(){
      $(".search-box").toggleClass('active');
      $(".search-box .search-input").focus();
    });
    $(".close-button").click(function(){
      $(".search-box").toggleClass('active');
    });

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      loop: true,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: "#billboard .swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper("#featured-products .product-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: "#featured-products .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        599: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1099: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1599: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper("#flash-sales .product-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: "#flash-sales .product-swiper .swiper-pagination",
        clickable: true,
      },
      /*navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },*/
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1299: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
    });

  }); // End of a document

})(jQuery);