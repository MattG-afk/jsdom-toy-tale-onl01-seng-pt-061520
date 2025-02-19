let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyCollection = document.querySelector('#toy-collection')

  function renderToy(toy) {
    let card = document.createElement('div')
    card.classList.add("card")
    toyCollection.appendChild(card)

    let name = document.createElement('h2')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let btn = document.createElement('button')

    name.innerText = toy.name
    img.src = toy.image
    img.classList.add("toy-avatar")
    p.innerText = `liked ${toy.likes} time(s)`
    btn.innerText = "Like <3"
    btn.classList.add("like-btn")

    card.appendChild(name)
    card.appendChild(img)
    card.appendChild(p)
    card.appendChild(btn)
  }

  fetch('http://localhost:3000/toys')
    .then(function (response) {
      return response.json()
    })
    .then(function (json){
      for (let toy of json) {
        renderToy(toy)
      }
    });

