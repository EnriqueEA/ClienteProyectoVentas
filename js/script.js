/* jshint esversion: 10 */

function get(url) {
    fetch(url)
        .then(r => r.json())
        .then(r => {
            // console.log(r);
            return r;
        })
        .then(r => {
            generateCards(r.results);
        });
}

window.onload = () => {
    get("https://rickandmortyapi.com/api/character");

    addEventsClick();
};

function generateCards(array = []) {
    let d = document.querySelector('.container');
    d.innerHTML = '';

    array.forEach((v, i) => {
        let content = `
            <article class="item">
                <div class="header-item">
                    <img class="img-responsive" src=${v.image} alt="${v.image}">
                </div>
                <div class="body-item">
                    <h3 class="text-center">${i+1}. ${v.name}</h3>
                    <div><b>Gender: </b><span>${v.gender}</span></div>
                    <div><b>Species: </b><span>${v.species}</span></div>
                    <div><b>Status: </b><span>${v.status}</span></div>
                    <div><b>Location: </b><span>${v.location.name}</span></div>
                </div>
            </article>`;

        d.innerHTML += content;
    });
}

function addEventsClick() {
    let categoriesToggle = document.querySelectorAll('.close-filter, #filter');
    let stnC = document.querySelector('.section-categories');
    let ordersToggle = document.querySelectorAll('.close-order, #order');
    let stnO = document.querySelector('.section-order');

    categoriesToggle.forEach((v) => {
        v.addEventListener('click', () => {
            stnC.classList.toggle('slide-out-left');
        });
    });

    ordersToggle.forEach((v) => {
        v.addEventListener('click', () => {
            stnO.classList.toggle('slide-out-right');
        });
    });
}

/* function changePage() {
    get("https://rickandmortyapi.com/api/character")
        .then(r => r.json())
        .then(r => r.info);
}

document.querySelector("button").onclick = function() {
    console.log("ok");
    changePage();
}; */