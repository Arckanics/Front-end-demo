import * as bootstrap from 'bootstrap';

const { ScrollSpy } = bootstrap

const ofs = ($m) => {
  let menu = document.querySelector($m)
  let rect = menu.getBoundingClientRect()
  return rect.height;
}

const nav = {
  root: document.body,
  target: "#site-nav",
  offset: ofs("#site-nav"),
  items: [...document.getElementById("site-nav").querySelectorAll('.nav-link')],
  spy: new ScrollSpy(document.body, {
    target: "#site-nav"
  })
}

  nav.items.map(i => {
    i.onclick = null
    i.onclick = (e) => {
      let target = document.querySelector(i.getAttribute('href'))
      let scrollPos = target.offsetTop - nav.offset + 1
  
      console.log(target.getBoundingClientRect());
  
      nav.root.parentNode.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
      })
    }
  })
