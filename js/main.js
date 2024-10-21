
// Select box with fill class
const fill = document.querySelector('.fill');

// Select empty boxes
const empties = document.querySelectorAll('.empty');

// Listen for drags starts
fill.addEventListener('dragstart', dragStart);

// Listen for drags ends
fill.addEventListener('dragend', dragEnd);

// Drag Functions
function dragStart(){

    // Add classes to fill element
    this.className += ' hold'; // This does not clear the box
    setTimeout(() => (this.className = 'invisible'), 0); // This adds invisible class & clears box when pulling image
}

function dragEnd(){

    this.className = 'fill'; // This returns image back to .fill on mouse release

}