const p1ScoreText = document.querySelector("#p1-score");
const p2ScoreText = document.querySelector("#p2-score");

let p1Score = 0;
let p2Score = 0;

const finishPointSelector = document.querySelector("#finishPoint");
let finishPoint = finishPointSelector.value;
finishPointSelector.addEventListener("input", () => {
    finishPoint = finishPointSelector.value;
});

const p1Btn = document.querySelector(".btn-p1");
const p2Btn = document.querySelector(".btn-p2");
const resetBtn = document.querySelector(".btn-reset");

const addScore = function () {
    //arrow function's this refers window
    if (this === p1Btn) {
        p1Score++;
        p1ScoreText.innerText = p1Score;
    }
    else if (this === p2Btn) {
        p2Score++;
        p2ScoreText.innerText = p2Score;
    }
    finishPointSelector.setAttribute("disabled", true);
}

const checkScore = () => {
    if (p1Score >= finishPoint || p2Score >= finishPoint) {
        p1Btn.toggleAttribute("disabled");
        p2Btn.toggleAttribute("disabled");

        const winner = p1Score > p2Score ? p1ScoreText : p2ScoreText;
        const loser = winner === p1ScoreText ? p2ScoreText : p1ScoreText;

        winner.classList.add("winner");
        loser.classList.add("loser");
    }
}

const reset = () => {
    p1Score = 0;
    p1ScoreText.innerText = "0";
    p2Score = 0;
    p2ScoreText.innerText = "0";

    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
    finishPointSelector.removeAttribute("disabled");

    p1ScoreText.classList.remove("winner");
    p1ScoreText.classList.remove("loser");
    p2ScoreText.classList.remove("winner");
    p2ScoreText.classList.remove("loser");
}

p1Btn.addEventListener("click", addScore);
p1Btn.addEventListener("click", checkScore);

p2Btn.addEventListener("click", addScore);
p2Btn.addEventListener("click", checkScore);

resetBtn.addEventListener("click", reset);
