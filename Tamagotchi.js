// Waarden
let hunger = 100, sleep = 100, fun = 100;

// Gedachten op basis van status
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

// Variabele om de knopactie-afbeelding en tekst tijdelijk op te slaan
let overrideImage = null;
let overrideText = null;

// Update status en emoties
function updateStatus() {
    // Update balken en tekstwaarden
    document.getElementById("hunger-bar").style.width = `${hunger}%`;
    document.getElementById("sleep-bar").style.width = `${sleep}%`;
    document.getElementById("fun-bar").style.width = `${fun}%`;

    document.getElementById("hunger-value").textContent = hunger;
    document.getElementById("sleep-value").textContent = sleep;
    document.getElementById("fun-value").textContent = fun;

    // Bepaal de gedachte op basis van waardes
    let currentThought = thoughts.happy;
    let currentImage = "ABMovie_RedStanding-removebg-preview.png"; // Standaard afbeelding

    // Controleer op meerdere behoeften tegelijk
    if (hunger < 50 && sleep < 50 && fun < 50) {
        currentThought = thoughts.allNeedsLow;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png"; // Voeg een afbeelding toe voor alle lage waarden
    } else if (hunger < 50 && sleep < 50) {
        currentThought = thoughts.hungryAndTired;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png"; // Afbeelding voor honger + moe
    } else if (hunger < 50 && fun < 50) {
        currentThought = thoughts.hungryAndBored;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png"; // Afbeelding voor honger + spelen
    } else if (sleep < 50 && fun < 50) {
        currentThought = thoughts.tiredAndBored;
        currentImage = "4ef205ac-7e6a-4d4b-914e-8e234675c585-Photoroom.png"; // Afbeelding voor moe + spelen
    } else if (hunger < 50) {
        currentThought = thoughts.hungry;
        currentImage = "Angry_Bird_Eating_Transparent-Photoroom.png"; // Afbeelding voor honger
    } else if (sleep < 50) {
        currentThought = thoughts.tired;
        currentImage = "0cc0ec48-682a-4a31-b579-1e09ded855d3-Photoroom.png"; // Afbeelding voor moe
    } else if (fun < 50) {
        currentThought = thoughts.bored;
        currentImage = "aaf89004b996f781_400x400ar.png"; // Afbeelding voor plezier
    }

    // Update chatbericht
    if (overrideText) {
        document.querySelector(".chat-message").textContent = overrideText;
        overrideText = null; // Reset de override na het instellen
    } else {
        document.querySelector(".chat-message").textContent = currentThought;
    }

    // Update afbeelding, maar geef prioriteit aan knopacties
    if (overrideImage) {
        document.querySelector(".tamagotchi-img").src = overrideImage;
        overrideImage = null; // Reset de override na het instellen
    } else {
        document.querySelector(".tamagotchi-img").src = currentImage;
    }

    // Controleer Game Over
    if (hunger <= 0 || sleep <= 0 || fun <= 0) {
        console.log("Game Over!");
        location.href = "gameover.html";
    }
}

// Waarden verminderen na verloop van tijd
setInterval(() => {
    // Trek een willekeurige waarde af (tussen 1 en 20)
    hunger = Math.max(0, hunger - Math.floor(Math.random() * 15 + 1));
    sleep = Math.max(0, sleep - Math.floor(Math.random() * 15 + 1));
    fun = Math.max(0, fun - Math.floor(Math.random() * 15 + 1));

    updateStatus();
}, 2000); // Update elke 2 seconden (2000 milliseconden)200);

// Knoppen voor interactie
document.querySelector(".btn-feed").addEventListener("click", () => {
    hunger = Math.min(100, hunger + 8);

    // Stel tijdelijke afbeelding en tekst in
    overrideImage = "Angry_Bird_Eating_Transparent-Photoroom.png";
    overrideText = thoughts.eating;

    updateStatus();
});

document.querySelector(".btn-play").addEventListener("click", () => {
    fun = Math.min(100, fun + 8);

    // Stel tijdelijke afbeelding en tekst in
    overrideImage = "aaf89004b996f781_400x400ar.png";
    overrideText = thoughts.playing;

    updateStatus();
});

document.querySelector(".btn-clean").addEventListener("click", () => {
    sleep = Math.min(100, sleep + 8);

    // Stel tijdelijke afbeelding en tekst in
    overrideImage = "0cc0ec48-682a-4a31-b579-1e09ded855d3-Photoroom.png";
    overrideText = thoughts.sleeping;

    updateStatus();
});
