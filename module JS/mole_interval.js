import { killMole } from "./kill_mole.js";
export function mole() {
  function mole_pop() {
    const moles_divs = document.querySelectorAll(".mole");
    let i = Math.floor(Math.random() * 12);
    moles_divs[i].classList.toggle("out");
    for (let t = 0; t < moles_divs.length; t++) {
      document.getElementById(`mole${t}`);
      moles_divs[t].style.backgroundColor = "white";
      moles_divs[t].removeEventListener("click", killMole);
    }

    if (moles_divs[i].classList == "mole out") {
      moles_divs[i].style.backgroundColor = "red";
      moles_divs[i].addEventListener("click", killMole);
    }
    if (moles_divs[i].classList == "mole") {
      moles_divs[i].style.backgroundColor = "white";
    }
  }
  setInterval(mole_pop, 1000);
}
