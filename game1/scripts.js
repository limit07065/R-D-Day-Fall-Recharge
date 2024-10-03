// JavaScript for handling button clicks

function fetchRandomCountries() {
    if (!countries) {
        fetch('countries.txt')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                document.getElementById('item').innerText = randomLine;
                countries = lines;
            })
            .catch(error => {
                document.getElementById('item').innerText = "Error loading data.";
                console.error('Error:', error);
            });
    }
    else{
        const randomLine = countries[Math.floor(Math.random() * countries.length)];
        document.getElementById('item').innerText = randomLine;
    }
}

function fetchRandomLandmarks() {
    if (!landmarks) {
        fetch('landmarks.txt')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                document.getElementById('item').innerText = randomLine;
                landmarks = lines;
            })
            .catch(error => {
                document.getElementById('item').innerText = "Error loading data.";
                console.error('Error:', error);
            });
    }
    else{
        const randomLine = landmarks[Math.floor(Math.random() * landmarks.length)];
        document.getElementById('item').innerText = randomLine;
    }
}

function fetchRandomEvents() {
    if (!events) {
        fetch('events.txt')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                document.getElementById('item').innerText = randomLine;
                events = lines;
            })
            .catch(error => {
                document.getElementById('item').innerText = "Error loading data.";
                console.error('Error:', error);
            });
    }
    else{
        const randomLine = events[Math.floor(Math.random() * events.length)];
        document.getElementById('item').innerText = randomLine;
    }
}

// Fetch a random item when the page loads
var landmarks;
var events;
var countries;
