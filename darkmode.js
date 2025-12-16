
//uzeto sa: https://chatgpt.com/

//dark/light mode
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
}

if (darkmode === "active") enableDarkmode();


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});

//Scroll to the top button

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 

/*progress bar*/
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop; // how far you scrolled
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // total scrollable height
  const progress = (scrollTop / scrollHeight) * 100; // percent scrolled
  document.getElementById("progress-bar").style.width = progress + "%";
});