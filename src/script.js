const texts = [
    "Welcome to TechNova!",
    "Explore tech wonders.",
    "Your tech destination.",
    "Discover tech delights.",
    "Tech world awaits.",
    "Welcome tech enthusiasts.",
    "Tech shopping simplified.",
    "Your tech one-stop.",
    "Tech trends at your fingertips.",
    "Happy tech shopping",
];

const textDisplay = document.getElementById("text-display");

function showRandomText() {
    // Get a random index from the texts array
    const randomIndex = Math.floor(Math.random() * texts.length);
    // Display the random text
    textDisplay.textContent = texts[randomIndex];
}

// Show a random text every 1 second (1000 milliseconds)
setInterval(showRandomText, 1500);
