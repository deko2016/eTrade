$(".slider").slick({

    // normal options...
    infinite: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 1500,
    
    // the magic
    responsive: [{
    
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
    
      }, {
    
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
    
      }, {
    
        breakpoint: 300,
        settings: "unslick" // destroys slick
    
      }]
    });
    
    
    AOS.init();
    
    
    AOS.init({
      once: true,
      easing: 'ease-in-out'
    });
    var iconButton = $("button");
    iconButton.on("click", function() {
      $(iconButton).removeClass('aos-animate');
      setTimeout(function() {
          $(iconButton).addClass('aos-animate');
      }, 400);
    });
    
    

    
$('.shop-content').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    
    // $('.shop-content').slick({
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: '53px',
    //     slidesToShow: 4,
        
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3,
              
              
    //         }
    //       },
    //       {
    //         breakpoint: 992,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3,
              
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });
            