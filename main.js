import './src/app.css'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 


const header = document.getElementById('header');
let prevScroll = window.scrollY;
window.onscroll = () => {
  const currentScroll = window.scrollY;
  if (prevScroll > currentScroll) {
    console.log("up main")
    header.classList.remove('-translate-y-full');

  } else {
    header.classList.add('-translate-y-full');
    console.log("down main")

  }

  prevScroll = currentScroll;
}

Alpine.start()


//
//
