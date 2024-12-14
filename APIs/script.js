const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=7F7pB17B0O3bMOHtXtFct6Zj9b3deXzV&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });

