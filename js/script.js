wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
});
wow.init();
document.getElementById("moar").addEventListener("click", function() {
  const newSection = document.createElement("section");
  newSection.className = "section--purple wow fadeInDown";
  newSection.style.visibility = "visible";
  newSection.style.animationName = "fadeInDown";
  newSection.style.height = "300px";
  newSection.style.margin = "60px 0";
  newSection.style.backgroundColor = "#9b59b6";
  document.getElementById("main").appendChild(newSection);
});
