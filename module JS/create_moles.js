export function create_moles() {
  for (let i = 0; i <= 11; i++) {
    const divs = document.createElement("div");
    divs.setAttribute("id", `mole${i}`);
    divs.classList.add("mole");
    document.body.appendChild(divs);
  }
}
