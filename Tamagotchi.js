let hunger = 100, sleep = 100, fun = 100;

const thoughts = [
    "Ik heb honger!",
    "Ik ben moe!",
    "Ik wil spelen!",
    "Alles gaat goed!",
    "Nom nom... Lekker eten!",
    "ZZZ... ik hou van slapen!",
    "Ik heb zoveel plezier!",
    "Ik ben uitgeput en ik heb honger😭",
    "Ik heb honger en wil spelen😭",
    "Ik ben moe en wil spelen😭",
    "Ik ben uitgeput, hongerig en verveel me heel erg!😭"
];

let overrideImage = null;
let overrideText = null;

function getThoughtByState(stateIndex) {
    return thoughts[stateIndex] || "Unknown state";
}

function updateStatus() {
    document.getElementById("hunger-bar").style.width = `${hunger}%`;
    document.getElementById("sleep-bar").style.width = `${sleep}%`;
    document.getElementById("fun-bar").style.width = `${fun}%`;

    document.getElementById("hunger-value").textContent = hunger;
    document.getElementById("sleep-value").textContent = sleep;
    document.getElementById("fun-value").textContent = fun;

    let currentThought = getThoughtByState(3);
    let currentImage = "ABMovie_RedStanding-removebg-preview.png";

    if (hunger < 50 && sleep < 50 && fun < 50) {
        currentThought = getThoughtByState(10);
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (hunger < 50 && sleep < 50) {
        currentThought = getThoughtByState(7);
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (hunger < 50 && fun < 50) {
        currentThought = getThoughtByState(8);
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (sleep < 50 && fun < 50) {
        currentThought = getThoughtByState(9);
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (hunger < 50) {
        currentThought = getThoughtByState(0);
        currentImage = "Angry_Bird_Eating_Transparent-Photoroom.png";
    } else if (sleep < 50) {
        currentThought = getThoughtByState(1);
        currentImage = "0cc0ec48-682a-4a31-b579-1e09ded855d3-Photoroom.png";
    } else if (fun < 50) {
        currentThought = getThoughtByState(2);
        currentImage = "aaf89004b996f781_400x400ar.png";
    }

    if (overrideText) {
        document.querySelector(".chat-message").textContent = overrideText;
        overrideText = null;
    } else {
        document.querySelector(".chat-message").textContent = currentThought;
    }

    if (overrideImage) {
        document.querySelector(".tamagotchi-img").src = overrideImage;
        overrideImage = null;
    } else {
        document.querySelector(".tamagotchi-img").src = currentImage;
    }

    if (hunger <= 0 || sleep <= 0 || fun <= 0) {
        console.log("Game Over!");
        location.href = "gameover.html";
    }
}

setInterval(() => {
    hunger = Math.max(0, hunger - Math.floor(Math.random() * 15 + 1));
    sleep = Math.max(0, sleep - Math.floor(Math.random() * 15 + 1));
    fun = Math.max(0, fun - Math.floor(Math.random() * 15 + 1));

    updateStatus();
}, 2000);

document.querySelector(".btn-feed").addEventListener("click", () => {
    hunger = Math.min(100, hunger + 5);
    overrideImage = "Angry_Bird_Eating_Transparent-Photoroom.png";
    overrideText = getThoughtByState(4);
    updateStatus();
});

document.querySelector(".btn-play").addEventListener("click", () => {
    fun = Math.min(100, fun + 5);
    overrideImage = "aaf89004b996f781_400x400ar.png";
    overrideText = getThoughtByState(6);
    updateStatus();
});

document.querySelector(".btn-clean").addEventListener("click", () => {
    sleep = Math.min(100, sleep + 5);
    overrideImage = "0cc0ec48-682a-4a31-b579-1e09ded855d3-Photoroom.png";
    overrideText = getThoughtByState(5);
    updateStatus();
});
