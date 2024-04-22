//changing title attribute of all element of a class
const importantItem = document.querySelectorAll (".important");
for (let item of importantItem){
    item.setAttribute ("title", "This is an important item");
}//end loop for

//modifying the img display if they are not important
const allImage = document.querySelectorAll ("img");
for (let image of allImage){
    if (!image.classList.contains("important")){
        image.style.display = "none";
    }//end if
}//end loop for

//display the content of all p in the console add there class if they have some

const allParagraphs = document.querySelectorAll ("p");
for (let Paragraph of allParagraphs) {
    if (Paragraph.classList.length > 0){
        console.log("text : " + Paragraph.innerText + ", class : " + Paragraph.classList);
    }//end if
    else{
        console.log("text : " + Paragraph.innerText)
        //give a bgc to all paragraph that doesn't have a class
        Paragraph.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    }//end else
}//end loop for