
// The search name
// e.g : const API_URL = "https://api.le-systeme-solaire.net/rest/bodies/";

// Offline fallback data
const PLANETS = [
  { name: "Mercury", group: "Terrestrial Planets", image: "imgs/Mercury.jpg", type: "Terrestrial", gravity: 3.7, mass: 0.33, period: 88, temp: 440, moons: 0, diameter: 4879, distance: 57.9 },
  { name: "Venus", group: "Terrestrial Planets", image: "imgs/Venus.jpg", type: "Terrestrial", gravity: 8.9, mass: 4.87, period: 225, temp: 737, moons: 0, diameter: 12104, distance: 108.2 },
  { name: "Earth", group: "Terrestrial Planets", image: "imgs/Earth.jpg", type: "Terrestrial", gravity: 9.8, mass: 5.97, period: 365, temp: 288, moons: 1, diameter: 12756, distance: 149.6, desc: "The only known planet to support life, with liquid water on its surface." },
  { name: "Mars", group: "Terrestrial Planets", image: "imgs/Mars.png", type: "Terrestrial", gravity: 3.7, mass: 0.642, period: 687, temp: 208, moons: 2, diameter: 6792, distance: 227.9 },
  { name: "Jupiter", group: "Gas Giants", image: "imgs/Jupiter.jpg", type: "Gas Giant", gravity: 23.1, mass: 1898, period: 4331, temp: 165, moons: 95, diameter: 142984, distance: 778.6 },
  { name: "Saturn", group: "Gas Giants", image: "imgs/Saturn1.jpeg", type: "Gas Giant", gravity: 9.0, mass: 568, period: 10747, temp: 134, moons: 146, diameter: 120536, distance: 1433.5 },
  { name: "Uranus", group: "Ice Giants", image: "imgs/Uranus.png", type: "Ice Giant", gravity: 8.7, mass: 86.8, period: 30589, temp: 76, moons: 28, diameter: 51118, distance: 2872.5 },
  { name: "Neptune", group: "Ice Giants", image: "imgs/Neptune.jpg", type: "Ice Giant", gravity: 11.0, mass: 102, period: 59800, temp: 72, moons: 16, diameter: 49528, distance: 4495.1 },
  { name: "Pluto", group: "Dwarf Planets", image: "imgs/Pluto.jpg", type: "Dwarf", gravity: 0.7, mass: 0.013, period: 90560, temp: 44, moons: 5, diameter: 2376, distance: 5906.4 },
];

const $ = (id) => document.getElementById(id);
const fmt = (n) => Number(n).toLocaleString("en-US", { maximumFractionDigits: 3 });

// ---- Theme ----
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  $("themeLabel").textContent = t === "dark" ? "LIGHT" : "DARK";
  $("themeIcon").textContent = t === "dark" ? "☀" : "☾";
  localStorage.setItem("theme", t);
}
$("theme").addEventListener("click", () =>
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
setTheme(localStorage.getItem("theme") || "dark");

// ---- Render ----
const icon = {
  temp: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M10 3a2 2 0 0 1 4 0v10a4 4 0 1 1-4 0z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  moon: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10z" fill="currentColor"/></svg>',
  dia: '<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="9" fill="currentColor"/></svg>',
  dist: '<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" stroke="currentColor" stroke-width="2"/></svg>',
};

function showPlanet(p) {
  $("err").hidden = true;
  document.querySelector(".search").classList.remove("bad");
  const img = p.image ? `<img class="pic" src="${p.image}" alt="${p.name}">` : `<div class="pic" role="img" aria-label="${p.name}"></div>`;
  $("result").innerHTML = `
    <article class="card">${img}
      <div class="info">
        <h2>${p.name}</h2><p class="type">${p.type}</p>
        <p class="desc">${p.desc || `${p.name} is a ${p.type.toLowerCase()} body in our solar system.`}</p>
        <div class="stats">
          <div><small>Gravity</small><b>${fmt(p.gravity)}</b></div>
          <div><small>Mass</small><b>${fmt(p.mass)}</b></div>
          <div><small>Period</small><b>${fmt(p.period)}</b></div>
        </div>
        <div class="meta">
          <div>${icon.temp}${fmt(p.temp)}</div><div>${icon.moon}${p.moons}</div>
          <div>${icon.dia}${fmt(p.diameter)}</div><div>${icon.dist}${fmt(p.distance)}</div>
        </div>
      </div>
    </article>`;
}

function showError() {
  $("err").hidden = false;
  document.querySelector(".search").classList.add("bad");
  $("result").innerHTML = `<div class="card empty"><h2>No results found!</h2>
    <p>We couldn't find any planet matching your search. Please double-check the name and try again.</p></div>`;
}

// Map API response → our shape (adjust to match YOUR API's fields)
function normalize(d) {
  return {
    name: d.englishName || d.name,
    type: d.type || "Planet",
    gravity: d.gravity, mass: d.mass ? d.mass.massValue : 0,
    period: d.sideralOrbit, temp: d.avgTemp,
    moons: d.moons ? d.moons.length : 0,
    diameter: d.meanRadius * 2, distance: d.semimajorAxis / 1e6,
  };
}

async function search(name) {
  const key = name.trim().toLowerCase();
  if (!key) return showError();
  const local = PLANETS.find((p) => p.name.toLowerCase() === key);
  try {
    const res = await fetch(API_URL + encodeURIComponent(key));
    if (!res.ok) throw new Error(res.status);
    const api = normalize(await res.json());
    showPlanet({ ...local, ...api, desc: local && local.desc, type: (local && local.type) || api.type });
  } catch (e) {
    local ? showPlanet(local) : showError(); // offline / not found
  }
}

$("searchForm").addEventListener("submit", (e) => { e.preventDefault(); search($("q").value); });
$("q").addEventListener("input", () => { $("err").hidden = true; document.querySelector(".search").classList.remove("bad"); });

// Default planet on load
showPlanet(PLANETS[2]);
