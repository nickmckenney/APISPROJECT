const url = "https://swapi.co/api/";
let form = document.querySelector("form");
let nav = document.querySelector(".randomNav");
let li = document.querySelectorAll(".li");
// for (let i = 0; i < li.length; i++) {
li[0].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);

      let finder = res.people;
      console.log(res);
      console.log(finder);
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});

li[1].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);

      let finder = res.people;
      console.log(res);
      console.log(finder);
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
li[2].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);

      let finder = res.people;
      console.log(res);
      console.log(finder);
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
li[3].addEventListener("click", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);

      let finder = res.people;
      console.log(res);
      console.log(finder);
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
