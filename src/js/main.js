import * as bootstrap from 'bootstrap';

const { ScrollSpy } = bootstrap

const nav = {
  root: document.body,
  target: "#site-nav",
  items: [...document.getElementById("site-nav").querySelectorAll('.nav-link')],
  spy: new ScrollSpy(document.body, {
    target: "#site-nav"
  })
}

  nav.items.map(i => {
    i.onclick = null
    i.onclick = (e) => {
      let target = document.querySelector(i.getAttribute('href'))
      let scrollPos = target.offsetTop - 80
  
      console.log(target.getBoundingClientRect());
  
      nav.root.parentNode.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
      })
    }
  })
