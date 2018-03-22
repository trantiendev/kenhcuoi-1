new WOW().init();

$(function(){
  niceSelectFilter();
  countdown();
  mmenu();
  carousel();
  select();
  sidebar();
})

$(window).scroll(function(){
  scrollMenu();
});

function  select(){
  $('select').niceSelect();
  // $('input').niceSelect();
}



function sidebar(){
  if( $('body').is('.home-index-1') ){
    $('section.sidebar .postlist-nav ').css({'display':'none'});
  };
  if( $('body').is('.home-index-2') ){
    $('section.sidebar .ads ').css({'display':'none'});
  };
};

function scrollMenu(){
  if( $('header.header').offset().top > 100 ){
    $('section.header-banner').slideUp(400);
  }
  else{
    $('section.header-banner').slideDown(400);

  }
};


function carousel(){

  $('.owl-carousel-slider').owlCarousel({
    loop:true,
    // margin:50,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
      300:{
        items:1
    },
        400:{
            items:1
        },
        700:{
            items:1,
        },
        1000:{
            items:1
        }
    }
  });

  $('.owl-carousel-main-content-1').owlCarousel({
    loop:true,
    // margin:50,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
      300:{
        items:1
      },
        400:{
            items:1
        },
        700:{
            items:1,
        },
        1000:{
            items:1
        }
    }
  });

  $('.owl-carousel-home-gallery').owlCarousel({
    loop:true,
    // margin:50,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
      300:{
        items:1
      },
        400:{
            items:1
        },
        700:{
            items:1,
        },
        1000:{
            items:1
        }
    }
  });

}

function mmenu(){
  $("#my-menu").mmenu({
    "extensions": [
        "pagedim-black",
        "fx-menu-zoom",
        "fx-panels-zoom",
        "fx-listitems-slide"
     ],
     "counters": true,
        "navbars": [
           {
              "position": "top",
              "content": [
                 "searchfield"
              ]
           },
           {
              "position": "top"
           }
        ]
     }, {
        // configuration
        classNames: {
          selected: "active"
        }
     });

  // $('a.hamburger').on('click', function(e){
  //   $(this).addClass('is-active');

  // });

  // $('#mm-blocker').on('click', function(){
  //   $('a.hamburger').removeClass('is-active');
  // });


};

function  countdown(){
  $('#clock').countdown('2020/10/10').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''

    + '<span class="wrap-count">%-d<span class="break">NGÀY</span></span>'
    + '<span class="wrap-count">%H<span class="break">GIỜ</span></span>'
    + '<span class="wrap-count">%M<span class="break">PHÚT</span></span>'
    + '<span class="wrap-count">%S<span class="break">GIÂY</span></span> '));
});
}
