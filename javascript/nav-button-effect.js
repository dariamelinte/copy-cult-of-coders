// Activate the button when you are on the current page 

const navItem = document.querySelectorAll(".nav-item a");

// searching for url
navItem.forEach( (item) =>{
    if(item.href == window.location.href){
        item.classList.add("active");    
        item.classList.add("underline");   
    }
    else
        item.classList.remove("active");
});
