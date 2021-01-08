const options = {day: "numeric", month: "numeric", year: "numeric"};
document.getElementById("last_updated").textContent = new Date().toLocaleDateString('en-US', options)