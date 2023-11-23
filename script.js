// your code here
function updateUrl() {
        var name = encodeURIComponent(document.getElementById("name").value);
        var year = encodeURIComponent(document.getElementById("year").value);

        var url = "https://localhost:8080/?name=" + name + "&year=" + year;
        document.getElementById("url").textContent = url;
}
