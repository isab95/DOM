//print document title in console
console.log(document.title);

//changing document title
document.title = "Modifying the DOM";

//changing the body background color
document.body.style.background = "#FF69B4";

//changing to a color in rgb format
document.body.style.backgroundColor = "rgb("+155+", "+213+", "+98+")";

//display all children of body
let elements = document.body.children;
for (let child of elements){
    console.log(child);
}
