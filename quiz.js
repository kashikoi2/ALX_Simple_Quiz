// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an option
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    // Get the user's answer
    const userAnswer = selectedOption.value;

    // Compare and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
