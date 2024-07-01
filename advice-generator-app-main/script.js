document.addEventListener("DOMContentLoaded", function() {
    const adviceText = document.getElementById("advice");
    const adviceCount = document.getElementById("count-advice");
    const button = document.querySelector(".button");

    async function getAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            adviceText.textContent = `"${data.slip.advice}"`;
            adviceCount.textContent = data.slip.id;
        } catch (error) {
            console.error("Error fetching advice:", error);
            adviceText.textContent = "Failed to load advice. Please try again.";
        }
    }

    button.addEventListener("click", getAdvice);

    // Fetch initial advice
    getAdvice();
});
