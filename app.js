

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


// function myDiv() {
//   document.getElementById("btn").style.borderRadius = "80%";
// }


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})




let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})






