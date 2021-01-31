//firtst attempt
// const container = document.querySelector(".search");
// const button = document.querySelector(".button");
// const input = document.querySelector(".input");

// button.addEventListener("click", () => {
//   console.log(container);
//   if (container.classList.contains("active")) {
//     container.classList.remove("active");
//   } else {
//     container.classList.add("active");
//     input.focus();
//   }
// });

//better
const search = document.querySelector(".search");
const btn = document.querySelector(".button");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
