
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