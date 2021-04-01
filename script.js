const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const record = [];
var score = 0;
var cpuScore = 0;
var options = ["stone", "paper", "scissors"];
const scoreTable = document.querySelector("#scoreTable");
document.
    querySelectorAll(".selection")
    .forEach(
        elem => elem.addEventListener("click", (e) => {
            play(e.target.id);
            scoreTable.innerHTML = "";
            let revarray = record.reverse();
            Array.prototype.forEach.call(revarray, element => scoreTable.appendChild(element));
            {
                const youscoreElem = document.querySelector("#youscore");
                youscoreElem.innerHTML = `${score}`;
                const cpuscoreElem = document.querySelector("#cpuscore");
                cpuscoreElem.innerHTML = `${cpuScore}`;
            }
            setTimeout(undefined, 1000);
            if (record.length >= 10) {
                document.querySelector("#hid").style.display = "initial";
                document.querySelector("#show").style.display = "none";
                document.querySelector("body").style.overflow = "hidden";
                Array.prototype.forEach.call(document.querySelectorAll("#scoreTable td"), (td) => td.style.fontSize = "1.345em");
                const info = document.querySelector(".info");
                const player = document.querySelector("#player");
                const emoji = document.querySelector("#emoji");
                if (score > cpuScore) {
                    player.innerText = "You WIN";
                    emoji.innerText = "😃";
                } else if (score < cpuScore) {
                    player.innerText = "Computer wins";
                    emoji.innerText = "🙁";
                }
                else if (score == cpuScore) {
                    player.innerText = "It's a draw";
                    emoji.innerText = "😐";
                }
                document.querySelector("#score").innerText = `You : ${score} Computer : ${cpuScore}`;
                info.style.display = "initial";
            }
        }));
function play(id) {
    options.splice(options.indexOf(id), 1);
    cpuChoice = options[Math.floor(Math.random() * options.length)];
    switch (id) {
        case cpuChoice:
            addToList(id, cpuChoice, "draw");
        case "stone":
            {
                if (cpuChoice == "paper") addToList(id, cpuChoice, false);
                else if (cpuChoice == "scissors") addToList(id, cpuChoice, true);
            }
            break;
        case "paper":
            {
                if (cpuChoice == "scissors") addToList(id, cpuChoice, false);
                else if (cpuChoice == "stone") addToList(id, cpuChoice, true);
            }
            break;
        case "scissors":
            {
                if (cpuChoice == "stone") addToList(id, cpuChoice, false);
                else if (cpuChoice == "paper") addToList(id, cpuChoice, true);
            }
            break;
    }
}
function addToList(user, cpu, win) {
    //scoreTable.appendChild(document.createElement("tr").appendChild(document.createElement("td")));
    let uDis, cDis, uElem, cElem;
    uElem = document.createElement("td");
    cElem = document.createElement("td");
    switch (user) {
        case "stone":
            uDis = "✊";
            break;
        case "paper":
            uDis = "✋";
            break;
        case "scissors":
            uDis = "✌";
            break;
    }
    switch (cpu) {
        case "stone":
            cDis = "✊";
            break;
        case "paper":
            cDis = "✋";
            break;
        case "scissors":
            cDis = "✌";
            break;
    }
    switch (win) {
        // case "draw": {
        //     uElem.style.fontSize = "2em";
        //     uElem.style.opacity = "50%";
        //     cElem.style.fontSize = "2em";
        //     cElem.style.opacity = "50%";
        //     break;
        // }
        case true: {
            cElem.style.fontSize = "2em";
            cElem.style.opacity = "50%";
            score++;
            break;
        }
        case false: {
            uElem.style.fontSize = "2em";
            uElem.style.opacity = "50%";
            cpuScore++;
            break;
        }
    }
    var cTr = document.createElement("tr");
    uElem.innerHTML = uDis;
    cElem.innerHTML = cDis;
    cTr.appendChild(uElem);
    cTr.appendChild(cElem);
    record.push(cTr);
    options = ["stone", "paper", "scissors"];
}