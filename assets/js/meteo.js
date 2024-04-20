document.addEventListener("DOMContentLoaded", () => {
  const apiUrl =
    "https://dd.weather.gc.ca/citypage_weather/xml/QC/s0000635_f.xml";
  const corsProxyUrl = "https://corsproxy.io/?";

  fetch(corsProxyUrl + apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Reponse mauvaise");
      }
      return response.text();
    })
    .then((xmlData) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "text/xml");
      const temperature = xmlDoc.querySelector("currentConditions>temperature");
      const icone = xmlDoc.querySelector("currentConditions>iconCode");
      const temperature_valeur = temperature.textContent;
      const icone_valeur = icone.textContent;

      let imageUrl =
        "https://meteo.gc.ca/weathericons/" + icone_valeur + ".gif";

      let conteneur_temperature = document.querySelector(".temperature");
      let conteneur_icone_meteo = document.querySelector(".icone_meteo");

      console.log(temperature_valeur);
      conteneur_temperature.innerHTML = temperature_valeur + "&deg;C";
      //   conteneur_icone_meteo.src = imageUrl;
    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error);
    });
});
