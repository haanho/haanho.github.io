let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/kotik-cannabis.png" ) {
        myImage.setAttribute('src', 'images/360_F_412414694_rGaT4HZIqIt0HLo2SoWkxtiGS8GFPXc7.jpg');
    } else {
        myImage.setAttribute('src', "images/kotik-cannabis.png");
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = "Wassup'," + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Wassup'," + storedName;
}myButton.onclick = function() {
    setUserName();
}