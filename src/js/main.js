import * as bootstrap from 'bootstrap';

const { ScrollSpy } = bootstrap

const nav = {
  root: document.body,
  target: "#site-nav",
  items: [...document.getElementById("site-nav").querySelectorAll('.nav-link')],
  spy: new ScrollSpy(document.body, {
    target: "#site-nav"
  }),
  offset: () => {
    return document.querySelector("#site-nav").getBoundingClientRect().height
  }
}

nav.items.map(i => {
  i.onclick = (e) => {
    let target = document.querySelector(i.getAttribute('href'))
    let scrollPos = target.offsetTop - nav.offset()

    console.log(target.getBoundingClientRect());

    nav.root.parentNode.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    })
  }
})
