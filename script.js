function updateUrl() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    const urlElement = document.getElementById('url');
    const baseUrl = "https://localhost:8080/";

    // Update the URL with the appropriate query string
    const updatedUrl = `${baseUrl}?name=${encodeURIComponent(name)}&year=${year}`;
    urlElement.textContent = updatedUrl;
}

