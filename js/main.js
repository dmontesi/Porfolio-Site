//1. NAV BAR SCROLLS DOWN

// var nav = document.getElementById("navbar");
// var logo = document.getElementById("navbar_logo");

// window.onscroll = function() {

//   if (window.pageYOffset > 100) {
//     nav.style.background = "#fff";
//     nav.style.paddingTop = "0px";
//     logo.style.zoom = 1.5;
//     logo.style.MozTransform = 'scale(.8)';
//     logo.style.WebkitTransform = 'scale(.8)';
//     // headlogo.style.opacity = "0";
//   }

//   else {
//     nav.style.background = "#fff";
//     nav.style.paddingTop = "60px";
//     logo.style.zoom = 1.2;
//     logo.style.MozTransform = 'scale(1)';
//     logo.style.WebkitTransform = 'scale(1)';
//   }

// }

//2. Intercept

const faders = document.querySelectorAll('.fade-in');

const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px 0px 100px 0px',
  threshold: 0,
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})
