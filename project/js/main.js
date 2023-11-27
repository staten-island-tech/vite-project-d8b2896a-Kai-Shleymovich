import {clothes} from './clothes'
const domselectors = {
    flexwrap : document.querySelector(".flex-wrapper")
}
function printcards(){
    clothes.forEach(cloth => {
    domselectors.flexwrap.insertAdjacentHTML( 
        "beforeEnd",
    `<div class="card">
      <h2>${cloth.name_of_peice}</h2>
      <img class="card-img" src=${cloth.img} alt="">
     <p class="desc"> ${cloth.Type_of_clothes}</p>
     <p>  ${cloth.seller}</p>
     </div>`)
})}
document.addEventListener("DOMContentLoaded", printcards); 
