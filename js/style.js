// nav
var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


function toggleReadMore(button) {
  var dotId = button.getAttribute('data-dot');
  var moreId = button.getAttribute('data-more');
  var dots = document.getElementById(dotId);
  var moreText = document.getElementById(moreId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}