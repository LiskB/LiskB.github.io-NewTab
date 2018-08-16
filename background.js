/* This script chooses a user from unsplash.com (stored in an array), and pulls a random photo
from their profile to set as the background (through unsplash source). I selected users that had
landscape-type photos for the purpose of this website. */
let users = ["https://source.unsplash.com/user/aleskrivec", "https://source.unsplash.com/user/albertorestifo"]

let num = Math.floor(Math.random() * users.length);
let imgSrc = users[num];
document.getElementById('background').style.backgroundImage = "url(" + imgSrc + ")";