const ul = document .querySelector("ul");
const elements = ul.childNodes
console.log(elements)
for (let elem of elements) {
    if (child.nodeType === 1){
        if (elem.textContent === "Fast and Furious"){
            if (ul.firstChild !== elem){
                //move elem to first position
                ul.insertBefore(elem, ul.firstChild)
            }
            elem.classname ="important"
        }
    }//end if
}//end loop for

function AlertOnClick(){
    
}
// if (ul.hasChildNodes){
        
//         let children =  ul.childNodes;
//         console.log(children);
// }