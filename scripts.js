function startQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h3>Only correct answers pls</h3>
        <p>Did I do a good job?</p>
        <button onclick="checkAnswer('Yes')">Yes</button>
        <button onclick="checkAnswer('Yes')">Yes</button>
        <p>Arent you so beutiful and smart</p>
        <button onclick="checkAnswer('yes, a lot')">yes, a lot</button>
        <button onclick="checkAnswer('yes, a lot')">yes, a lot</button>
    `;
}

function checkAnswer(answer) {
    if (answer === 'Yes' || answer === 'yes, a lot') {
        alert('Correct! 🎉');
    } else {
        alert('Oops, try again!');
    }
}

async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('random-quote').innerText = `"${data.content}" - ${data.author}`;
    } catch (error) {
        document.getElementById('random-quote').innerText = "Could not load quote. Try again later.";
    }
}

document.addEventListener('DOMContentLoaded', fetchQuote);
