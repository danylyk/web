window.addEventListener("scroll", function(e){
  document.body.style.backgroundColor = "hsl("+((window.pageYOffset / (document.body.clientHeight - window.innerHeight))*255)+", 57%, 88%)";
});

document.addEventListener("DOMContentLoaded", function(){
  alert("HTML is ready.");
});