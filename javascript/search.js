const searchForm = document.getElementById("searchForm");
const planetSearch = document.getElementById("planetSearch");
const searchMessage = document.getElementById("searchMessage");
const planetCard = document.getElementById("planetCard");

function findPlanet(query) {
  return planets.find((planet) => planet.name.toLowerCase() === query.toLowerCase());
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = planetSearch.value.trim();

  if (!query) {
    searchMessage.textContent = "Please enter a planet name.";
    planetSearch.focus();
    return;
  }

  const planet = findPlanet(query);
  if (!planet) {
    searchMessage.textContent = `No planet found for "${query}". Try Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune or Pluto.`;
    return;
  }

  searchMessage.textContent = "";
  renderPlanet(planet);
  planetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

planetSearch.addEventListener("input", () => {
  if (searchMessage.textContent) searchMessage.textContent = "";
});
