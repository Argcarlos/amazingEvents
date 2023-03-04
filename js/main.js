import data from "./data.js"
console.log([document])

/*let cardTemplate= document.getElementById("cardTemplate");*/
const fragment = document.createDocumentFragment();
let cardTemplate = document.querySelector("#cardTemplate")

const myArray = Object.values(data);

  function createCards(Array, cardTemplate){
    for(let data of Array){
        let div = document.createElement("div");
        div.className = "card"
        div.innerHTML += `
       
        <img src="${data.image}" class="card-img-top" id="" alt="">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.description}</p>
          <p>Date: ${data.date}</p>
          <p>U$s ${data.price}</p>

          <a href="./pages/details.html" class="btn btn-primary">View details</a>
        </div>
      </div>
       `
      fragment.appendChild(div);
    }
    cardTemplate.appendChild(fragment);
}
createCards(data.events, cardTemplate)