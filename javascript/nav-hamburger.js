// Get modal element
const modal = document.getElementById('simpleModal');

// Get modal button
const modalBtn = document.getElementById('modalBtn');

// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal () {
    modal.style.display = 'block';
    modal.style.animation = 'slide-in .3s';
}

// Function to close modal
function closeModal () {
    modal.style.animation = 'slide-out .3s';
    setTimeout(() =>{
        modal.style.display = 'none';
    }, 300);
}