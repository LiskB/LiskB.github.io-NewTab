/* This script is used to create the clock element. */
if(window.addEventListener){
    window.addEventListener('load', startTime())
}


function startTime() {
    let date = new Date(); //get new date object, set the time elements to variables
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = formatTime(m); //call format method
    s = formatTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s; //assemble proper output
    let t = setTimeout(startTime, 500);
}
function formatTime(i) { //format the minutes and hours
    if (i < 10) {
        i = "0" + i
    };
    return i;
}