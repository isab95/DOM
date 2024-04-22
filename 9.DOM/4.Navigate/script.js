const ol =document.querySelector("ol");
// console.log(ol.childNodes);
const a = ol.children[0];
const b = ol.children[4];

ol.insertBefore(b, a);

const section = document.querySelectorAll("section");
let secondh2 = section[1].querySelector("h2");
let thirdh2 = section[2].querySelector("h2");

[secondh2.innerHTML, thirdh2.innerHTML] = [thirdh2.innerHTML, secondh2.innerHTML];

section[2].remove();