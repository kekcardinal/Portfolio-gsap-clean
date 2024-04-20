document.addEventListener("DOMContentLoaded", (event) => {
  function updateClock() {
    var Temps = new Date();
    var heures = Temps.getHours();
    var minutes = Temps.getMinutes();
    var secondes = Temps.getSeconds();

    heures = (heures < 10 ? "0" : "") + heures;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    secondes = (secondes < 10 ? "0" : "") + secondes;

    var temps_formatter = heures + ":" + minutes + ":" + secondes;
    document.getElementById("heure").innerText = temps_formatter;
  }

  // Update the clock initially and then every second
  updateClock();
  setInterval(updateClock, 1000); // Update every 1000 milliseconds (1 second)
});
