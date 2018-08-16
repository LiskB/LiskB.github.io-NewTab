/* This script controls the behaviour of the dropdown menu */
//this function toggles the show class when required
function displayLinks() {
    document.getElementById("links").classList.toggle("show");
}

//creates a listener for a click on the correct element
window.onclick = function(e){
    if (!e.target.matches(".dropbtn")){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }
}