addEventListener("DOMContentLoaded", (event) => {
  var userLanguage = navigator.language || navigator.userLanguage;
  let btns_fr = document.querySelectorAll(".choix_langue_fr");
  let btns_en = document.querySelectorAll(".choix_langue_en");

  if (userLanguage.startsWith("fr")) {
    btns_en.forEach((btn) => btn.classList.remove("langue_active"));
    btns_fr.forEach((btn) => btn.classList.add("langue_active"));
    document.documentElement.lang = "fr";
  } else if (userLanguage.startsWith("en")) {
    btns_fr.forEach((btn) => btn.classList.remove("langue_active"));
    btns_en.forEach((btn) => btn.classList.add("langue_active"));
    document.documentElement.lang = "en";
  } else {
    btns_fr.forEach((btn) => btn.classList.remove("langue_active"));
    btns_en.forEach((btn) => btn.classList.add("langue_active"));
    document.documentElement.lang = "en";
    console.log("User has a language preference other than French or English");
  }

  btns_fr.forEach((btn_fr) => {
    btn_fr.addEventListener("click", function () {
      btns_en.forEach((btn) => btn.classList.remove("langue_active"));
      btns_fr.forEach((btn) => btn.classList.add("langue_active"));
      document.documentElement.lang = "fr";
    });
  });

  btns_en.forEach((btn_en) => {
    btn_en.addEventListener("click", function () {
      btns_fr.forEach((btn) => btn.classList.remove("langue_active"));
      btns_en.forEach((btn) => btn.classList.add("langue_active"));
      document.documentElement.lang = "en";
    });
  });
});
