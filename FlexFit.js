// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
});

//Save form data locally

function save_data() {
  var input = document.getElementById("saveServer");
  localStorage.setItem("server", input.value); 
  var storedValue = localStorage.getItem("server"); 
  // etc..
}