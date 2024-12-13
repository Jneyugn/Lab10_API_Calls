document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed.');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('fetchTitle').textContent = 'Title: ' + data.title;
            document.getElementById('fetchBody').textContent = 'Body: ' + data.body;
        })
        .catch(error => {
            console.error('Error fetching data with fetch():', error);
            document.getElementById('fetchTitle').textContent = 'Error: Could not fetch data';
            document.getElementById('fetchBody').textContent = 'Please try again later.';
        });
});

document.getElementById('xhrButton').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('xhrTitle').textContent = 'Title: ' + data.title;
            document.getElementById('xhrBody').textContent = 'Body: ' + data.body;
        } else {
            console.error('Error fetching data with XHR:', xhr.statusText);
            document.getElementById('xhrTitle').textContent = 'Error: Could not fetch data';
            document.getElementById('xhrBody').textContent = 'Please try again later.';
        }
    };

    xhr.onerror = function() {
        console.error('Request failed with XHR');
        document.getElementById('xhrTitle').textContent = 'Error: Network problem';
        document.getElementById('xhrBody').textContent = 'Please check your network connection.';
    };

    xhr.send();
});
