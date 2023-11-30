import {clothes} from './clothes'
const domselectors = {
    flexwrap : document.querySelector(".flex-wrapper"),
    skater : document.querySelector("#skater"),
    hype : document.querySelector('#hype'),
    all : docum
}

let filteredclothes=clothes

function printcards(){
    filteredclothes.forEach(cloth => {
    domselectors.flexwrap.insertAdjacentHTML( 
        "beforeEnd",
    `<div class="card">
      <h2>${cloth.name_of_peice}</h2>
      <img class="card-img" src=${cloth.img} alt="">
     <p class="desc"> ${cloth.Type_of_clothes}</p>
     <p class='desc'>  ${cloth.seller}</p>
     <p class='desc'> $${cloth.Price_in_usd} </p>
     </div>`)
})}
function filter(x){
    while(domselectors.flexwrap.lastChild){
        domselectors.flexwrap.firstChild.remove()
    }
    filteredclothes=clothes.filter(cloth => cloth.style.includes(x)===true)
    printcards();
}
domselectors.skater.addEventListener("click", function (event){
    filter("skater")
    })
    domselectors.hype.addEventListener("click", function (event){
        filter("hypebeast")
        })
        domselectors.hype.addEventListener("click", function (event){
            filter("hypebeast")
            })
    

document.addEventListener("DOMContentLoaded", printcards); 
