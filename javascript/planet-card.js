const planetCardElements = {
  image: document.getElementById("planetImage"),
  name: document.getElementById("planetName"),
  type: document.getElementById("planetType"),
  description: document.getElementById("planetDescription"),
  gravity: document.getElementById("gravity"),
  mass: document.getElementById("mass"),
  period: document.getElementById("period"),
  temperature: document.getElementById("temperature"),
  moons: document.getElementById("moons"),
  diameter: document.getElementById("diameter"),
  distance: document.getElementById("distance")
};

function renderPlanet(planet) {
  if (!planet) return;

  planetCardElements.image.src = planet.image;
  planetCardElements.image.alt = `${planet.name} viewed from space`;
  planetCardElements.name.textContent = planet.name;
  planetCardElements.type.textContent = planet.type;
  planetCardElements.description.textContent = planet.description;
  planetCardElements.gravity.textContent = planet.gravity;
  planetCardElements.mass.textContent = planet.mass;
  planetCardElements.period.textContent = planet.period;
  planetCardElements.temperature.textContent = planet.temperature;
  planetCardElements.moons.textContent = planet.moons;
  planetCardElements.diameter.textContent = planet.diameter;
  planetCardElements.distance.textContent = planet.distance;

  document.querySelectorAll(".planet-table-row").forEach((row) => {
    row.classList.toggle("selected-row", row.dataset.name === planet.name);
  });
}
