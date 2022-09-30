

// dropdown

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }

}


function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn1')) {
    var myDropdown1 = document.getElementById("myDropdown1");
      if (myDropdown1.classList.contains('show1')) {
        myDropdown1.classList.remove('show1');
      }
    }
  }
  $('dropdown-content').on('click', function(event){
    
    event.stopPropagation();
});



// dropdown

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }

}


function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn1')) {
  var myDropdown1 = document.getElementById("myDropdown1");
    if (myDropdown1.classList.contains('show1')) {
      myDropdown1.classList.remove('show1');
    }
  }
}
$('dropdown-content').on('click', function(event){
  
  event.stopPropagation();
});




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