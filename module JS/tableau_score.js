let s = 0;
const tableau_de_score = document.createElement("div");
tableau_de_score.classList.add("tableau_de_score");
document.body.appendChild(tableau_de_score);
export function tableau_score() {
  tableau_de_score.innerText = `Score : ${s}`;
  s++;
}
