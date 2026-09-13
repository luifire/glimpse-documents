/* Sprachumschalter der Dokumentseiten. Die Wahl liegt unter demselben
   Schluessel wie auf /get/ und /how-it-works/, damit sie beim Seitenwechsel haelt. */
(function () {
  "use strict";
  var root = document.documentElement;
  var buttons = document.querySelectorAll(".lang button");

  function apply(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.set === lang));
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.dataset.set;
      apply(lang);
      try { localStorage.setItem("glimpse-lang", lang); } catch (e) {}
      var url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    });
  });

  apply(root.dataset.lang === "en" ? "en" : "de");
})();
