const year = {year: "numeric"};
document.getElementById("current_year").textContent = new Date().toLocaleDateString('en-US', year);

document.getElementById("last_updated").textContent = new Date(document.lastModified);