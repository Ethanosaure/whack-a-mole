import { tableau_score } from "./tableau_score.js";
export const killMole = (event) => {
  const moleDiv = event.target;
  tableau_score();
  moleDiv.style.backgroundColor = "white";
  moleDiv.removeEventListener("click", killMole);
};
