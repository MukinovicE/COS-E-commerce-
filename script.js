function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function gallery(smallImg){
  var fullImg= document.getElementById("imageBox");
  fullImg.src = smallImg.src;
  }

  