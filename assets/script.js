
var loader = document.querySelector(".loader-container")

window.addEventListener("load", ()=>{
    loader.style.display = "none"
    window.scrollTo(0, 0);
})
function reloadToTop() {
    window.location.reload(true);
    
}

// function createNewPage() {
//     // Open a new window
//     var newWindow = window.open();

//     // Write content to the new window
//     newWindow.document.write('<html><head><title>New Page</title></head><body>');
//     newWindow.document.write('<h1>This is a new page created dynamically with JavaScript!</h1>');
//     newWindow.document.write('</body></html>');

//     // Close the document to finish writing
//     newWindow.document.close();
// }

function createNewPage() {
    // Open a new window
    var newWindow = window.open();

    // Create elements and append them to the new window's document
    var newHeading = newWindow.document.createElement('h1');
    newHeading.textContent = 'This is a new page created dynamically with JavaScript!';

    newWindow.document.body.appendChild(newHeading);
}





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Section Animation Example</title>
//     <!-- Your other head elements go here -->
//     <style>
//         /* Add your animation styles here */
//         .section {
//             opacity: 0;
//             transform: translateY(20px);
//             transition: opacity 0.5s ease, transform 0.5s ease;
//         }

//         .section.visible {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     </style>
// </head>
// <body>

//     <!-- Section 1 -->
//     <section class="section" id="section1">
//         <h2>Section 1</h2>
//         <p>Your content goes here.</p>
//     </section>

//     <!-- Section 2 -->
//     <section class="section" id="section2">
//         <h2>Section 2</h2>
//         <p>Your content goes here.</p>
//     </section>

//     <!-- Your other page content goes here -->

//     <!-- Add this script at the end of your body tag -->
//     <script>
//         // Function to handle the intersection observer callback
//         function handleIntersection(entries, observer) {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }

//         // Create an intersection observer
//         var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

//         // Target sections to observe
//         var sections = document.querySelectorAll('.section');

//         // Observe each section
//         sections.forEach(section => {
//             observer.observe(section);
//         });
//     </script>
// </body>
// </html>
