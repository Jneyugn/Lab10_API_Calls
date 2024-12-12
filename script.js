document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayData(data) {
    const tableBody = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous data

    data.data.forEach(currency => {
        const row = document.createElement('tr');
        const cellId = document.createElement('td');
        cellId.textContent = currency.id;
        const cellName = document.createElement('td');
        cellName.textContent = currency.name;
        const cellMinSize = document.createElement('td');
        cellMinSize.textContent = currency.min_size;

        row.appendChild(cellId);
        row.appendChild(cellName);
        row.appendChild(cellMinSize);
        tableBody.appendChild(row);
    });
}