const hotspots = document.querySelectorAll(".hotspot");
const title = document.querySelector(".info-text .title");
const placeholder = document.querySelector(".info-text .placeholder");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

let activeHotspot = null;

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    if (activeHotspot === hotspot) {
      resetInfo();
      hotspot.classList.remove("active");
      activeHotspot = null;
      return;
    }

    activeHotspot = hotspot;

    hotspots.forEach((h) => h.classList.remove("active"));
    hotspot.classList.add("active");

    if (hotspot.id === "circle-hotspot1") {
      updateInfoboxMobil();
    } else if (hotspot.id === "circle-hotspot2") {
      updateInfoboxBil();
    } else if (hotspot.id === "circle-hotspot3") {
      updateInfoboxBagagerum();
    }
  });
});

function resetInfo() {
  title.textContent = "Roadtrip Red Alert";
  placeholder.innerHTML = "<p>Tryk på et hotspot (mobil, bil eller bagagerum) for at få fif, grin og hjælp til din nødsituation.</p>";
  efficiency.innerHTML = "<h2>Godt at vide</h2>";
  requirement.innerHTML = "<h2>Bonus tip</h2>";
}

function updateInfoboxMobil() {
  title.textContent = "📱 Mobiltelefon - Når signalet svigter";
  placeholder.innerHTML = "<p>Ingen dækning? Gå mod højere grund, men bliv tæt på bilen. Brug strømmen med omtanke - ingen memes, før hjælp er på vej.</p>";
  efficiency.innerHTML = "<h2>🔋 Spar på strømmen</h2><p>Skru ned for lysstyrken, luk apps - og glem Tiktok for en stund";
  requirement.innerHTML = "<h2>📞 Nødopkald</h2><p>112 virker uden simkort og netværk. Men ikke hvis du står midt i en tunnel!</p>";
}

function updateInfoboxBil() {
  title.textContent = "🚗 Bilen - Den dovne helt på landevejen";
  placeholder.innerHTML = "<p>Kør ind til siden, tænd katastrofeblink og sæt advarselstrekanten 50 meter bag bilen.</p>";
  efficiency.innerHTML = "<h2>⚠️ Bliv synlig</h2><p>Refleksvest på! Du skal ses, ikke stresses.</p>";
  requirement.innerHTML = "<h2>🔧 Tjek motoren?</h2><p>Hvis du ikke ved, hvad du kigger på under motorhjelmen, så lad den blive lukket.</p>";
}

function updateInfoboxBagagerum() {
  title.textContent = "🎒 Bagagerummet - Din overlevelsesststion";
  placeholder.innerHTML = "<p>Hvem sagde nødsituation? Du har snacks, tæppe og powerbank - du er klar til alt (næsten).</p>";
  efficiency.innerHTML = "<h2>🍫 Snack-strategi</h2><p>Del med omtanke - det er nødproviant, ikke roadtrip-buffet.";
  requirement.innerHTML = "<h2>🧃 Hydration hero</h2><p>Hav altid lidt vand i bagagerummet - kaffe tæller ikke, desværre.";
}
