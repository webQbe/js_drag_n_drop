
// Select box with fill class
const fill = document.querySelector('.fill');

// Select empty boxes
const empties = document.querySelectorAll('.empty');

// Listen for drags from fill
fill.addEventListener('dragstart', dragStart);
