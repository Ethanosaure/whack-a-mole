const body = document.querySelector("body");
for (let i = 0; i <= 12; i++) {
  const divs = document.createElement("div");
  divs.classList.add("mole");
  body.appendChild(divs);
}
