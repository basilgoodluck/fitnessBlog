
var loader = document.querySelector(".loader-container")

window.addEventListener("load", ()=>{
    loader.style.display = "none"
    document.body.style.overflowY = "scroll"
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