
// Select box with fill class
const fill = document.querySelector('.fill');

// Select empty boxes
const empties = document.querySelectorAll('.empty');



// Listen for Fill 

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

    this.className = 'fill'; // This returns image back to .fill box on mouse release

}


// Listen for Empty Boxes

// Loop through empties array & call drag events
for(const empty of empties){

    // Listen for when image is dragged over 
    empty.addEventListener('dragover', dragOver);

    // Listen for when image is entered
    empty.addEventListener('dragenter', dragEnter);

    // Listen for when image is left 
    empty.addEventListener('dragleave', dragLeave);

    // Listen for when image is dropped
    empty.addEventListener('drop', dragDrop);

}
