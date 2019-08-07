console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    para.textContent = "This is really cool!"
  });

function fetchImage() {
   return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderImages(json));

}

function renderImages(json) {
    const dogIMG = document.querySelector('dog-images-container')
    json.forEach(message => {
        const img = document.createElement('img')
        img.src = `<img src = ${message}>`
        dogIMG.appendChild(img)
    })

}