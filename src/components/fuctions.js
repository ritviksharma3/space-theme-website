function Geeks() {
    var myDiv = document.getElementById("GFG");
     
    // creating button element
    var button = document.createElement('BUTTON');
     
    // creating text to be
    //displayed on button
    var text = document.createTextNode("Button");
     
    // appending text to button
    button.appendChild(text);
     
    // appending button to div
    myDiv.appendChild(button); ;
}