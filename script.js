const url1 = "https://swapi.co/api/people/?limit=85";
const url2 = "https://swapi.co/api/starships/";
const url3 = "https://swapi.co/api/vehicles/";
const url4 = "https://swapi.co/api/films/";
const url5 = "https://swapi.co/api/species/";

let form = document.querySelector("form");
let nav = document.querySelector(".randomNav");
let li = document.querySelectorAll("li");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");
let h6 = document.querySelector("h6");
let p = document.querySelector("p");
let p1 = document.querySelector("p1");
let br = document.querySelector("br");
let hr = document.querySelector("hr");
let filmStorer = [];
// for (let i = 0; i < li.length; i++) {
li[0].addEventListener("click", function(evt) {
  filmStorer = [];
  evt.preventDefault();
  let random = Math.floor(Math.random() * 9);
  fetch(url1)
    .then(res => res.json())

    .then(res => {
      for (var i = 0; i < res.results[random].films.length; i++) {
        filmStorer.push(res.results[random].films[i]);
      }
      console.log(filmStorer);

      h2.innerText = "Name: " + res.results[random].name;
      h3.innerText = "Birth-year: " + res.results[random].birth_year;
      p1.innerText =
        "Mass: " +
        res.results[random].mass +
        "    Height:  " +
        res.results[random].height;

      console.log();
      h4.innerText = "Gender: " + res.results[random].gender;

      // h5.innerText = res.results[random].films;
      // console.log(res.results[random].films);
    })
    .catch(err => console.log(err));

  fetch(url4)
    .then(res => res.json())

    .then(res => {
      h5.innerText = "title: ";
      let p = 0;
      let finder = [];
      while (filmStorer.length != 0) {
        let x = "";
        x = filmStorer[0].split("");
        x.pop();
        console.log(res.results[p].title);
        h5.innerText += "  " + res.results[p].title;

        finder.push(x.pop());
        p += 1;
        filmStorer.shift();
      }
      console.log(finder);

      evt.preventDefault();
    })
    .catch(err => console.log(err));
});

// fetch("https://swapi.co/api/species/")
//   .then(res => res.json())
//
//   .then(res => {
//     h5.innerText = res.results[random].name;
//   })
//   .catch(err => console.log(err));
//
// fetch("https://swapi.co/api/starships/")
//   .then(res => res.json())
//
//   .then(res => {
//     console.log(res);
//     h6.innerText = "Starship class: " + res.results[random].name;
//   })
//   .catch(err => console.log(err));
//
// fetch("https://swapi.co/api/films/")
//   .then(res => res.json())
//
//   .then(res => {
//     console.log(res);
//     p.innerText = "Yea bois films: " + res.results[random].title;
//   })
//   .catch(err => console.log(err));

//NEW PAGE
//NEW PAGE
//NEW PAGE
//NEW PAGE
//NEW PAGE
//NEW PAGE
li[1].addEventListener("click", function(evt) {
  let random = Math.floor(Math.random() * 9);
  p1.innerText = "";
  h3.innerText = "";
  h4.innerText = "";

  h5.innerText = "";
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url2)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);

      let finder = res;
      console.log(res);
      h2.innerText = res.results[random].name;
      p1.innerText = "MODEL: " + res.results[random].model;

      h3.innerText = "MGLT: " + res.results[random].MGLT;
      h4.innerText = "CARGOCAP: " + res.results[random].cargo_capacity;
      h5.innerText = "CREW SIZE: " + res.results[random].crew;
      h6.innerText = "CLASS: " + res.results[random].starship_class;

      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
li[2].addEventListener("click", function(evt) {
  let random = Math.floor(Math.random() * 9);

  evt.preventDefault();

  p1.innerText = "";
  h3.innerText = "";
  h4.innerText = "";
  h2.innerText = "";
  h6.innerText = "";

  h5.innerText = "";
  fetch(url3)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);

      let finder = res;
      console.log(res);
      h2.innerText = res.results[random].name;
      p1.innerText = "MODEL: " + res.results[random].model;

      h3.innerText = "MGLT: " + res.results[random].MGLT;
      h4.innerText = "CARGOCAP: " + res.results[random].cargo_capacity;
      h5.innerText = "CREW SIZE: " + res.results[random].crew;
      h6.innerText = "Price: " + res.results[random].cost_in_credits;

      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
li[3].addEventListener("click", function(evt) {
  let random = Math.floor(Math.random() * 9);

  evt.preventDefault();

  p1.innerText = "";
  h3.innerText = "";
  h4.innerText = "";
  h2.innerText = "";
  h6.innerText = "";

  h5.innerText = "";

  // fetch(url + input.value)
  fetch(url5)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);

      let finder = res;
      console.log(res);
      h2.innerText = res.results[random].name;
      p1.innerText = "classification: " + res.results[random].classification;

      h3.innerText = "average height: " + res.results[random].average_height;
      h4.innerText =
        "average lifespan: " + res.results[random].average_lifespan;
      h5.innerText = "skin colors: " + res.results[random].skin_colors;
      h6.innerText = "language: " + res.results[random].language;
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
