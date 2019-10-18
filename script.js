const url = "https://swapi.co/api/";
let form = document.querySelector("form");
let input = document.querySelector("#input-field");
let cat = document.querySelector(".randomCatImage");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();

  // fetch(url + input.value)
  fetch(url)
    .then(res => res.json())

    .then(res => {
      console.log("YAY");
      // console.log(res.message);
      // log(res);
      let finder = res.results;
      console.log(res);
      console.log(finder);
      // cat.setAttribute("src", finder);
    })
    .catch(err => console.log(err));
});
