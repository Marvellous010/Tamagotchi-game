let hunger = 100, sleep = 100, fun = 100;

const thoughts = {
    hungry: "Ik heb honger!",
    tired: "Ik ben moe!",
    bored: "Ik wil spelen!",
    happy: "Alles gaat goed!",
    eating: "Nom nom... Lekker eten!",
    sleeping: "ZZZ... ik hou van slapen!",
    playing: "Ik heb zoveel plezier!",
    hungryAndTired: "Ik ben uitgeput en ik heb honger😭",
    hungryAndBored: "Ik heb honger en wil spelen😭",
    tiredAndBored: "Ik ben moe en wil spelen😭",
    allNeedsLow: "Ik ben uitgeput, hongerig en verveel me heel erg!😭"
};

let overrideImage = null;
let overrideText = null;

function updateStatus() {
    document.getElementById("hunger-bar").style.width = `${hunger}%`;
    document.getElementById("sleep-bar").style.width = `${sleep}%`;
    document.getElementById("fun-bar").style.width = `${fun}%`;

    document.getElementById("hunger-value").textContent = hunger;
    document.getElementById("sleep-value").textContent = sleep;
    document.getElementById("fun-value").textContent = fun;

    let currentThought = thoughts.happy;
    let currentImage = "ABMovie_RedStanding-removebg-preview.png";

    if (hunger < 50 && sleep < 50 && fun < 50) {
        currentThought = thoughts.allNeedsLow;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (hunger < 50 && sleep < 50) {
        currentThought = thoughts.hungryAndTired;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (hunger < 50 && fun < 50) {
        currentThought = thoughts.hungryAndBored;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (sleep < 50 && fun < 50) {
        currentThought = thoughts.tiredAndBored;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png";
    } else if (hunger < 50) {
        currentThought = thoughts.hungry;
        currentImage = "Angry_Bird_Eating_Transparent-Photoroom.png";
    } else if (sleep < 50) {
        currentThought = thoughts.tired;
        currentImage = "0cc0ec48-682a-4a31-b579-1e09ded855d3-Photoroom.png";
    } else if (fun < 50) {
        currentThought = thoughts.bored;
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
    overrideText = thoughts.eating;
    updateStatus();
});

document.querySelector(".btn-play").addEventListener("click", () => {
    fun = Math.min(100, fun + 5);
    overrideImage = "aaf89004b996f781_400x400ar.png";
    overrideText = thoughts.playing;
    updateStatus();
});

document.querySelector(".btn-clean").addEventListener("click", () => {
    sleep = Math.min(100, sleep + 5);
    overrideImage = "0cc0ec48-682a-4a31-b579-1e09ded855d3-Photoroom.png";
    overrideText = thoughts.sleeping;
    updateStatus();
});