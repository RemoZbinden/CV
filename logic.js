document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'J' || event.key === 'j') {
            fetchJoke();
        }
    });

    jokeContainer.addEventListener('click', fetchJoke); // Changed from 'mouseover' to 'click'

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(joke => {
                jokeContainer.innerHTML = `<p>${joke.setup} <br> ${joke.punchline}</p>`;
            })
            .catch(error => console.log('Error:', error));
    }
});
