
const actionCards = document.querySelectorAll('.card');
const searchBar = document.querySelector('.search-bar input');


actionCards.forEach(card => {                 //EL
    card.addEventListener('click', () => {
        const actionText = card.querySelector('p').textContent;
        searchBar.value = actionText;
        handleCardSelection(actionText); //handling
    });
});


function handleCardSelection(actionText) {
    console.log(`User selected: ${actionText}`);
}

document.getElementById("menu-icon").onclick = function() {
    var menuContent = document.getElementById("menu-content");
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
    } else {
        menuContent.style.display = "block";
    }
};


window.onclick = function(event) {      //close if outside
    if (!event.target.matches('#menu-icon, #menu-icon *')) {
        var menuContent = document.getElementById("menu-content");
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
        }
    }
};

document.getElementById("user-icon").onclick = function() {
    var dropdown = document.getElementById("user-dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
};


window.onclick = function(event) {             
    if (!event.target.matches('#user-icon, #user-icon *')) {
        var dropdown = document.getElementById("user-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        const query = searchInput.value.trim(); // debug*************(query not selecting)
        if (query) {
            console.log("User search query: " + query); 
            
        } else {
            alert("Please enter a search query.");
        }
    });
});

