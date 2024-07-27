document.addEventListener('DOMContentLoaded', () => {
    fetchDogImage();
    fetchWeather();
    fetchQuote();
});

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

function displayDogImage(imageUrl) {
    const content = document.getElementById('content');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog';
    img.className = 'img-fluid my-3';
    content.appendChild(img);
}