/* This script creates an action lister for the enter key, and when pressed,
submits the text captured in the input box into a google search */

function search(){
    if(event.key === 'Enter'){
        let link = document.getElementById("search").value;
        if (link != ""){ //check to make sure input isn't empty
            let url = "https://www.google.ca/search?q=" + link;
            window.open(url);
            document.getElementById("search").value = "";
        }
    }
}