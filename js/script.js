function loadHTML(id, filename) {
    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if ( file ) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {element.innerHTML = this.responseText;}
                if (this.status == 400) {element.innerHTML = "<h1>Page not found.</h1>"}
            }
        }
        xhttp.open("GET", `./${file}`, true);
        xhttp.send();
        return;
    }
}  

window.onload = function() {
    loadHTML("main", "home.html");
}