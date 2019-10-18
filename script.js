const url1 = "https://swapi.co/api/people/";
const url2 = "https://swapi.co/api/starships/";
const url3 = "https://swapi.co/api/vehicles/";
const url4 = "https://swapi.co/api/species/";

let form = document.querySelector("form");
let nav = document.querySelector(".randomNav");
let li = document.querySelectorAll("li");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");
let h6 = document.querySelector("h6");
// for (let i = 0; i < li.length; i++) {
li[0].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url1)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);

      let finder = res;
      console.log(res);
      h2.innerText += res.results[0].name;
      h3.innerText += res.results[0].birth_year;
      h4.innerText += res.results[0].gender;
      // h5.innerText += res.results[0].homeworld;

      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});

li[1].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url2)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);

      let finder = res;
      console.log(res);
      h2.innerText = res.results[0].name;

      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
li[2].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url3)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);

      let finder = res;
      console.log(res);
      h2.innerText = res.results[0].name;

      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
li[3].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url4)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);

      let finder = res;
      console.log(res);
      h2.innerText = res.results[0].name;
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
