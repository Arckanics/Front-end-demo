import * as bootstrap from 'bootstrap';


console.log(bootstrap.ScrollSpy);

const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')

console.log(dataSpyList);

dataSpyList.forEach(dataSpyEl => {
  let instance = bootstrap.ScrollSpy.getInstance(dataSpyEl)
  console.log(instance)
})
