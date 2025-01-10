// Set the date we're counting down to
var countDownDate = new Date("Dec 23, 2025").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "broken :-(";
  }
}, 1000);


//photography changing wow!

var pics = [
  "https://cdn.glitch.global/8cc87ae8-2401-45b0-98ad-907c24699c04/c7b48853-0264-47fb-ac26-0bff96f7ede5.jfif?v=1736538712386",
  "https://cdn.glitch.global/8cc87ae8-2401-45b0-98ad-907c24699c04/aeb38cae-0be8-46e4-882f-b5c1154c8d5e.jfif?v=1736538718752",
  "https://cdn.glitch.global/8cc87ae8-2401-45b0-98ad-907c24699c04/77693718-d98e-4148-b574-2a1d250dac6a.jfif?v=1736538722343",
  "https://cdn.glitch.global/8cc87ae8-2401-45b0-98ad-907c24699c04/594ff053-fee0-42f7-a1de-5dfe9e6dfbfb.jfif?v=1736538726165",
  "https://cdn.glitch.global/8cc87ae8-2401-45b0-98ad-907c24699c04/6d0e86be-1acb-4996-933e-554172c9b484.jfif?v=1736538733813",
  "https://cdn.glitch.global/8cc87ae8-2401-45b0-98ad-907c24699c04/6c9d8593-d122-49b7-b9ad-c3c279e4ba93.jfif?v=1736538738945",
]

var imgState = 0;

var imgTag = document.getElementById("coolimg");

imgTag.addEventListener("click", function (event) {
  imgState = ++imgState % images.length;
  event.target.src = images[imgState];
});

