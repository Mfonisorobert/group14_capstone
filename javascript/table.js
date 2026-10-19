const tableBody = document.getElementById("planetTableBody");

function createCell(content, className = "", options = {}) {
  const cell = document.createElement("td");
  cell.textContent = content;
  if (className) cell.className = className;
  if (options.rowSpan) cell.rowSpan = options.rowSpan;
  if (options.colSpan) cell.colSpan = options.colSpan;
  return cell;
}

function appendPlanetRow(planet, cells) {
  const row = document.createElement("tr");
  row.className = "planet-table-row";
  row.dataset.name = planet.name;
  cells.forEach((cell) => row.appendChild(cell));
  row.appendChild(createCell(planet.name, "planet-name-cell"));
  row.appendChild(createCell(planet.mass));
  row.appendChild(createCell(planet.diameter));

  row.addEventListener("click", () => {
    renderPlanet(planet);
    planetSearch.value = planet.name;
    searchMessage.textContent = "";
  });

  tableBody.appendChild(row);
}

// function renderTable() {
//   tableBody.innerHTML = "";

//   const terrestrial = planets.filter((planet) => planet.group === "Terrestrial Planets");
//   terrestrial.forEach((planet, index) => {
//     const categoryCells = index === 0
//       ? [createCell("Terrestrial Planets", "group-cell", { rowSpan: terrestrial.length, colSpan: 2 })]
//       : [];
//     appendPlanetRow(planet, categoryCells);
//   });

//   const gasGiants = planets.filter((planet) => planet.subgroup === "Gas Giants");
//   const iceGiants = planets.filter((planet) => planet.subgroup === "Ice Giants");
//   const jovian = [...gasGiants, ...iceGiants];

//   jovian.forEach((planet, index) => {
//     const categoryCells = [];
//     if (index === 0) categoryCells.push(createCell("Jovian Planets", "group-cell", { rowSpan: jovian.length }));
//     if (index === 0) categoryCells.push(createCell("Gas Giants", "group-cell", { rowSpan: gasGiants.length }));
//     if (index === gasGiants.length) categoryCells.push(createCell("Ice Giants", "group-cell", { rowSpan: iceGiants.length }));
//     appendPlanetRow(planet, categoryCells);
//   });

//   const dwarfPlanets = planets.filter((planet) => planet.group === "Dwarf Planets");
//   dwarfPlanets.forEach((planet, index) => {
//     const categoryCells = index === 0
//       ? [createCell("Dwarf Planets", "group-cell", { colSpan: 2 })]
//       : [];
//     appendPlanetRow(planet, categoryCells);
//   });
// }


function renderTable() {
  tableBody.innerHTML = "";

  // 1. Terrestrial Planets
  const terrestrial = planets.filter(
    (planet) => planet.group === "Terrestrial Planets"
  );

  terrestrial.forEach((planet, index) => {
    const categoryCells = [];

    if (index === 0) {
      categoryCells.push(
        createCell("Terrestrial Planets", "group-cell", {
          rowSpan: terrestrial.length,
          colSpan: 2
        })
      );
    }

    appendPlanetRow(planet, categoryCells);
  });

  // 2. Jovian Planets — Gas Giants and Ice Giants
  const gasGiants = planets.filter(
    (planet) => planet.subgroup === "Gas Giants"
  );

  const iceGiants = planets.filter(
    (planet) => planet.subgroup === "Ice Giants"
  );

  // Keep the intended order: Jupiter, Saturn, Uranus, Neptune.
  const jovian = [...gasGiants, ...iceGiants];

  jovian.forEach((planet, index) => {
    const categoryCells = [];

    // One merged cell spanning all four Jovian planets.
    if (index === 0) {
      categoryCells.push(
        createCell("Jovian Planets", "group-cell", {
          rowSpan: jovian.length
        })
      );
    }

    // Gas Giants spans Jupiter and Saturn.
    if (index === 0) {
      categoryCells.push(
        createCell("Gas Giants", "group-cell", {
          rowSpan: gasGiants.length
        })
      );
    }

    // Ice Giants spans Uranus and Neptune.
    if (index === gasGiants.length) {
      categoryCells.push(
        createCell("Ice Giants", "group-cell", {
          rowSpan: iceGiants.length
        })
      );
    }

    appendPlanetRow(planet, categoryCells);
  });

  // 3. Dwarf Planets
  const dwarfPlanets = planets.filter(
    (planet) => planet.group === "Dwarf Planets"
  );

  dwarfPlanets.forEach((planet, index) => {
    const categoryCells = [];

    if (index === 0) {
      categoryCells.push(
        createCell("Dwarf Planets", "group-cell", {
          colSpan: 2
        })
      );
    }

    appendPlanetRow(planet, categoryCells);
  });
}


renderTable();
renderPlanet(planets.find((planet) => planet.name === "Earth"));
document.getElementById("year").textContent = new Date().getFullYear();
