const url1 = "https://swapi.co/api/people/?limit=85";
const url2 = "https://swapi.co/api/starships/";
const url3 = "https://swapi.co/api/vehicles/";
const url4 = "https://swapi.co/api/";

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
// for (let i = 0; i < li.length; i++) {
li[0].addEventListener("click", function(evt) {
  evt.preventDefault();
  let random = Math.floor(Math.random() * 9);
  fetch(url1)
    .then(res => res.json())

    .then(res => {
      console.log(res);

      h2.innerText = "Name: " + res.results[random].name;
      h3.innerText = "Birth-year: " + res.results[random].birth_year;
      p1.innerText =
        "Mass: " +
        res.results[random].mass +
        "    Height:  " +
        res.results[random].height;

      console.log();
      h4.innerText = "Gender: " + res.results[random].gender;

      h5.innerText = res.results[random].films;
      console.log(res.results[random].films);
    })
    .catch(err => console.log(err));



    fetch(res.results[random].films[1]);

      .then(res => res.json())

      .then(res => {

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
// li[1].addEventListener("click", function(evt) {
//   evt.preventDefault();
//
//   // fetch(url + input.value)
//   fetch(url2)
//     .then(res => res.json())
//
//     .then(res => {
//       console.log("YAY");
//       // console.log(res.message);
//
//       let finder = res;
//       console.log(res);
//       h2.innerText = res.results[0];
//       h3.innerText = res.results[0];
//       h4.innerText = res.results[0];
//
//       // cat.setAttribute("src", finder);
//     })
//     .catch(err => console.log(err));
// });
// li[2].addEventListener("click", function(evt) {
//   evt.preventDefault();
//
//   // fetch(url + input.value)
//   fetch(url3)
//     .then(res => res.json())
//
//     .then(res => {
//       console.log("YAY");
//       // console.log(res.message);
//
//       let finder = res;
//       console.log(res);
//       h2.innerText = res.results[0].name;
//
//       // cat.setAttribute("src", finder);
//     })
//     .catch(err => console.log(err));
// });
// li[3].addEventListener("click", function(evt) {
//   evt.preventDefault();
//
//   // fetch(url + input.value)
//   fetch(url4)
//     .then(res => res.json())
//
//     .then(res => {
//       console.log("YAY");
//       // console.log(res.message);
//       // log(res);
//
//       let finder = res;
//       console.log(res);
//       h5.innerText = res.results[random].title;
//       // cat.setAttribute("src", finder);
//     })
//     .catch(err => console.log(err));
// });
