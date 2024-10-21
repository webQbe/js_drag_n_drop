
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

    console.log('Dragging started!');

}

function dragEnd(){

    console.log('Dragging ended!');

}