// Set the launch date
const launchDate = new Date("December 31, 2024 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    flipNumber("days", days);
    flipNumber("hours", hours);
    flipNumber("minutes", minutes);
    flipNumber("seconds", seconds);

    if (timeLeft < 0) {
        clearInterval(timer);
        document.querySelector(".timer").innerHTML = "LAUNCH TIME!";
    }
}

function flipNumber(id, newNumber) {
    const flipCard = document.getElementById(id);
    const top = flipCard.querySelector(".top");
    const bottom = flipCard.querySelector(".bottom");

    // Convert newNumber to a two-digit string
    const formattedNumber = String(newNumber).padStart(2, "0");

    // Check if the number has changed
    if (top.textContent !== formattedNumber) {
        // Create clones for animation
        const oldTop = top.cloneNode(true);
        const oldBottom = bottom.cloneNode(true);

        // Set the new number
        top.textContent = formattedNumber;
        bottom.textContent = formattedNumber;

        // Add animation class
        flipCard.classList.add("flip");

        // Replace old elements with new ones after animation
        setTimeout(() => {
            flipCard.classList.remove("flip");
            oldTop.remove();
            oldBottom.remove();
        }, 700);
    }
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown();