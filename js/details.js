import data from "./data.js"

/*
let detailContainer = document.querySelector("#cardDetail");
const fragment = document.createDocumentFragment();

const queryString = location.search

const params = new URLSearchParams(queryString)

const dataId = params.get('id')


const myArray = Object.values(data);
const events = data.events.find(myArray => myArray._id == id)
console.log(myArray)
function createDetails(Array, cardDetail) {

    let div = document.createElement('div')
    div.classList = 'card-big d-flex bg-light gap-2 rounded p-3'
    div.style = 'width: 90%; height: 90%;'
      
        div.innerHTML = ` 
        <div class= "card2">
        <img src="${data.image}" class="card-img-top" id="" alt="">
          <div class="card-body2">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.description}</p>
            <p>Date: ${data.date}</p>
            <p>U$s ${data.price}</p> 
          </div>
        </div>`
        fragment.appendChild(div)
    
}
createDetails(data, detailContainer)*/

let detailContainer = document.querySelector("#cardDetail");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const dataId = params.get('id');

const events = data.events.find(event => event._id == dataId);

function createDetails(events, cardDetail) {
    let div = document.createElement('div');
    div.classList = 'card-big d-flex bg-light gap-2 rounded p-3';
    div.style = 'width: 90%; height: 90%;';
    div.innerHTML = ` 
        <div class="card2">
            <img src="${events.image}" class="card-img-top" alt="">
            <div class="card-body2">
                <h5 class="card-title">${events.name}</h5>
                <p class="card-text">${events.description}</p>
                <p>Date: ${events.date}</p>
                <p>U$s ${events.price}</p> 
            </div>
        </div>`;
    cardDetail.appendChild(div);
}

createDetails(events, detailContainer);


