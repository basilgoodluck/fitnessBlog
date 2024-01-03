
var loader = document.querySelector(".loader-container")

window.addEventListener("load", ()=>{
    loader.style.display = "none"
    loader.style.zIndex = "0"
    document.body.style.overflowY = "scroll"
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

let options = {
    root: document.querySelector(".homeContent"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  let observer = new IntersectionObserver(() => {
    document.querySelector(".homeContent h1").style.animation = "dropDownText 3s ease 1s"
    // document.querySelector('.mission').style.animation = "moveUpText 3s ease 1s"
  }, options);
  
  observer.observe(document.querySelector(".homeContent h1"))

  // observer.observe(document.querySelector('.mission'))


document.querySelector('.btn').addEventListener('click', (btn)=>{
  document.querySelector('.btn').classList.toggle('toggledhamburger')

})