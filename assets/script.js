
var loader = document.querySelector(".loader-container")

window.addEventListener("load", ()=>{
    var header = document.getElementById("body").top
    loader.style.display = "none"
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})




// const sections = document.querySelectorAll('section');

//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         } else {
//           entry.target.classList.remove('visible');
//         }