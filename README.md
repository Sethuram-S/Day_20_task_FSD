# Random Dog Image Fetcher

### Overview

This JavaScript code fetches a random dog image from the Dog CEO API and displays it on a web page.

## Code Explanation

### Event Listener

The code sets up an event listener for the DOMContentLoaded event, which is triggered when the HTML document has finished loading. When this event occurs, the fetchDogImage, fetchWeather, and fetchQuote functions are called.

```
document.addEventListener('DOMContentLoaded', () => {
    fetchDogImage();
    fetchWeather();
    fetchQuote();
});
```
### fetchDogImage

The `fetchDogImage` function sends a GET request to the Dog CEO API to retrieve a random dog image. The response is expected to be in JSON format.

```
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            displayDogImage(data.message);
        })
        .catch(error => console.error('Error fetching dog image:', error));
}
```
Here's what happens in this function:

1. Send GET request
The `fetch` function sends a GET request to the specified URL.

2. Parse response as JSON
The `then` method is used to handle the response. The first `then` block parses the response as JSON.

3. Extract image URL
The second `then` block extracts the `message` property from the parsed JSON data, which contains the URL of the dog image.

4. Display dog image
The `displayDogImage` function is called with the image URL as an argument.

5. Error handling
If an error occurs during the fetch process, the catch block logs an error message to the console.

### Displaying Dog Image

The `displayDogImage` function creates an `img` element and sets its `src` attribute to the provided image URL. It also adds an `alt` attribute and a CSS class (`img-fluid my-3`) to the image element. Finally, it appends the image element to an HTML element with the id `content`.

```
function displayDogImage(imageUrl) {
    const content = document.getElementById('content');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog';
    img.className = 'img-fluid my-3';
    content.appendChild(img);
}
```