const animals = [
  { name: "Asian Elephant", category: "Mammal", status: "Endangered", location: "Periyar", season: "Monsoon", description: "A social giant of forest edges, wetlands, and grasslands.", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80" },
  { name: "Bengal Tiger", category: "Mammal", status: "Endangered", location: "Wayanad", season: "Winter", description: "A powerful apex predator that moves silently through dense cover.", image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Leopard", category: "Mammal", status: "Vulnerable", location: "Silent Valley", season: "Summer", description: "An adaptable spotted cat often seen near rocky forest corridors.", image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=900&q=80" },
  { name: "Sambar Deer", category: "Mammal", status: "Vulnerable", location: "Periyar", season: "Monsoon", description: "A large forest deer with a deep alarm call and twilight habits.", image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=900&q=80" },
  { name: "Spotted Deer", category: "Mammal", status: "Least Concern", location: "Wayanad", season: "Spring", description: "Graceful herds with white-flecked coats that shine in broken light.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Gaur", category: "Mammal", status: "Vulnerable", location: "Silent Valley", season: "Monsoon", description: "A muscular wild bovine with pale stockings and a high ridgeback.", image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=900&q=80" },
  { name: "Malabar Giant Squirrel", category: "Mammal", status: "Least Concern", location: "Thattekad", season: "Monsoon", description: "A vivid canopy acrobat with rust, cream, and black fur.", image: "https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Peafowl", category: "Bird", status: "Least Concern", location: "Periyar", season: "Spring", description: "A radiant bird known for courtship displays and ringing calls.", image: "https://p2.piqsels.com/preview/271/444/951/peacock-bird-plumage-pheasant.jpg", imagePosition: "center 35%" },
  { name: "Great Hornbill", category: "Bird", status: "Vulnerable", location: "Thattekad", season: "Summer", description: "A huge forest bird with a golden casque and heavy wingbeats.", image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=900&q=80" },
  { name: "King Cobra", category: "Reptile", status: "Vulnerable", location: "Eravikulam", season: "Monsoon", description: "A long, alert forest serpent and one of the world's most iconic reptiles.", image: "https://www.worldatlas.com/r/w768/upload/50/54/3a/shutterstock-2653816315-s3cdn.jpg", imagePosition: "center 28%" }
];

const places = [
  { name: "Periyar", habitat: "Lake forest and wet evergreen edges", encounters: 39, image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80" },
  { name: "Wayanad", habitat: "Moist deciduous forest corridors", encounters: 27, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80" },
  { name: "Silent Valley", habitat: "Rainforest, streams, and canopy trails", encounters: 21, image: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=1000&q=80" },
  { name: "Thattekad", habitat: "Riparian bird habitat", encounters: 18, image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1000&q=80" },
  { name: "Eravikulam", habitat: "High grassland and shola forest", encounters: 14, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80" }
];

const encounters = [
  { animal: "Asian Elephant", location: "Periyar", date: "2026-09-19", labelDate: "19 September 2026", time: "6:42 PM", season: "Monsoon", image: animals[0].image },
  { animal: "Sambar Deer", location: "Wayanad", date: "2026-08-12", labelDate: "12 August 2026", time: "7:15 AM", season: "Monsoon", image: animals[3].image },
  { animal: "Indian Gaur", location: "Silent Valley", date: "2026-07-02", labelDate: "02 July 2026", time: "5:30 PM", season: "Monsoon", image: animals[5].image },
  { animal: "Bengal Tiger", location: "Wayanad", date: "2026-01-24", labelDate: "24 January 2026", time: "6:10 AM", season: "Winter", image: animals[1].image },
  { animal: "Indian Peafowl", location: "Periyar", date: "2026-03-15", labelDate: "15 March 2026", time: "8:05 AM", season: "Spring", image: animals[7].image },
  { animal: "King Cobra", location: "Eravikulam", date: "2026-06-08", labelDate: "08 June 2026", time: "4:20 PM", season: "Summer", image: animals[9].image }
];

const suggestions = {
  Periyar: ["Asian Elephant", "Sambar Deer"],
  Wayanad: ["Sambar Deer", "Bengal Tiger"],
  "Silent Valley": ["Indian Gaur", "Indian Leopard"],
  Thattekad: ["Great Hornbill", "Malabar Giant Squirrel"],
  Eravikulam: ["King Cobra", "Indian Gaur"]
};

const seasonWildlife = {
  Spring: ["Indian Peafowl", "Spotted Deer", "Great Hornbill", "Indian Leopard"],
  Summer: ["Bengal Tiger", "Great Hornbill", "Indian Leopard", "Spotted Deer"],
  Monsoon: ["Asian Elephant", "Sambar Deer", "Indian Gaur", "Malabar Giant Squirrel"],
  Winter: ["Bengal Tiger", "Sambar Deer", "Spotted Deer", "Indian Peafowl"]
};

applySavedTheme();

document.addEventListener("DOMContentLoaded", () => {
  buildNavigation();
  setActiveNavigation();
  initThemeToggle();
  initCommonDateTime();

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "wildlife") initWildlife();
  if (page === "animal") initAnimalGuide();
  if (page === "places") initPlaces();
  if (page === "place") initPlaceGuide();
  if (page === "animal-map") initMap();
  if (page === "seasons") initSeasons();
  if (page === "identifier") initIdentifier();
  if (page === "my-wildlife") initMyWildlife();
  if (page === "encounter") initEncounterForm();
  if (page === "insights") initInsights();
  initReveal();
  initCounters();
});

function buildNavigation() {
  const emptyHeader = document.querySelector(".site-header:empty");
  if (!emptyHeader) return;
  emptyHeader.innerHTML = `
    <nav class="nav-shell">
      <a class="logo" href="index.html"><span>🐾</span> Wildlife Explorer</a>
      <button class="menu-toggle" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <div class="nav-links">
        <a href="index.html" data-nav="home">Home</a>
        <a href="wildlife.html" data-nav="wildlife">Wildlife</a>
        <a href="places.html" data-nav="places">Places</a>
        <a href="seasons.html" data-nav="seasons">Seasons</a>
        <a href="identifier.html" data-nav="identifier">Identifier</a>
        <a href="my-wildlife.html" data-nav="my-wildlife">My Wildlife</a>
        <a href="insights.html" data-nav="insights">Insights</a>
        <a href="conservation.html" data-nav="conservation">Conservation</a>
        <button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch theme"><span class="theme-icon">☾</span></button>
        <a class="btn btn-primary nav-cta" href="encounter.html">+ Record Encounter</a>
      </div>
    </nav>`;
}

function setActiveNavigation() {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === page) link.classList.add("active");
  });
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("wildlife-theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
}

function initThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-icon");
  if (!button || !icon) return;

  const sync = () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    icon.textContent = isDark ? "☀" : "☾";
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  };

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("wildlife-theme", nextTheme);
    sync();
  });

  sync();
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function animateInserted(root) {
  const items = root.querySelectorAll(".reveal");
  items.forEach((item, index) => {
    item.classList.remove("visible");
    item.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 55}ms`);
  });
  requestAnimationFrame(() => {
    items.forEach(item => item.classList.add("visible"));
  });
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 34));
      const tick = () => {
        value = Math.min(target, value + step);
        el.textContent = value;
        if (value < target) requestAnimationFrame(tick);
      };
      tick();
      observer.unobserve(el);
    });
  });
  counters.forEach(counter => observer.observe(counter));
}

function initCommonDateTime() {
  const dateEl = document.querySelector("[data-current-date]");
  const timeEl = document.querySelector("[data-current-time]");
  if (dateEl) dateEl.textContent = formatDate(new Date());
  if (timeEl) {
    const update = () => timeEl.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" });
    update();
    setInterval(update, 1000);
  }
}

function initHome() {
  const stats = [
    ["🐘", "Asian Elephant", "Last Reported Animal"],
    ["📍", "Periyar", "Last Reported Location"],
    ["🌦️", getSeason(new Date()), "Current Season"],
    ["📅", `<span data-current-date>${formatDate(new Date())}</span>`, "Today's Date"],
    ["🕐", `<span data-current-time></span>`, "Current Time"]
  ];
  const homeStats = document.getElementById("homeStats");
  const featuredAnimals = document.getElementById("featuredAnimals");
  homeStats.innerHTML = stats.map(([icon, value, label]) => `<article class="stat-card reveal"><span class="icon">${icon}</span><strong>${value}</strong><span>${label}</span></article>`).join("");
  initCommonDateTime();
  featuredAnimals.innerHTML = animals.slice(0, 4).map(animalCard).join("");
  animateInserted(homeStats);
  animateInserted(featuredAnimals);
}

function initWildlife() {
  const grid = document.getElementById("wildlifeGrid");
  const search = document.getElementById("wildlifeSearch");
  const buttons = document.querySelectorAll("#categoryFilters .chip");
  let active = "All";

  const render = () => {
    const term = search.value.toLowerCase();
    const filtered = animals.filter(animal => {
      const matchesCategory = active === "All" || animal.category === active;
      const matchesSearch = animal.name.toLowerCase().includes(term) || animal.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
    grid.innerHTML = filtered.map(animalCard).join("") || `<p class="empty-state">No wildlife matches that search.</p>`;
    animateInserted(grid);
  };

  search.addEventListener("input", render);
  buttons.forEach(button => button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    active = button.dataset.category;
    render();
  }));
  render();
}

function animalCard(animal) {
  const guideUrl = `animal.html?animal=${encodeURIComponent(animal.name)}`;
  return `
    <article class="animal-card reveal" data-category="${animal.category}">
      <div class="image-frame"><img src="${animal.image}" alt="${animal.name}" style="object-position:${animal.imagePosition || "center"}" onerror="this.style.display='none'"></div>
      <div class="card-body">
        <h3>${animal.name}</h3>
        <p>${animal.category}</p>
        <p>${animal.description}</p>
        <div class="card-actions">
          <span class="status-pill ${animal.status === "Endangered" ? "endangered" : ""}">${animal.status}</span>
          <a class="btn btn-primary" href="${guideUrl}">View Guide</a>
        </div>
      </div>
    </article>`;
}

function initAnimalGuide() {
  const requestedAnimal = new URLSearchParams(window.location.search).get("animal") || "Asian Elephant";
  const animal = animals.find(item => item.name.toLowerCase() === requestedAnimal.toLowerCase()) || animals[0];
  const details = getAnimalDetails(animal);

  document.title = `Wildlife Explorer | ${animal.name}`;
  document.getElementById("animalHero").style.setProperty("--hero", `url('${animal.image.replace("w=900", "w=1800")}')`);
  document.getElementById("animalHero").style.backgroundPosition = `center, ${animal.imagePosition || "center"}, center`;
  document.getElementById("animalName").textContent = animal.name;
  document.getElementById("animalCategory").textContent = animal.category;
  const status = document.getElementById("animalStatus");
  status.textContent = animal.status;
  status.className = `status-pill ${animal.status === "Endangered" ? "endangered" : ""}`;
  document.getElementById("animalHabitat").textContent = details.habitat;
  document.getElementById("animalDiet").textContent = details.diet;
  document.getElementById("animalBehaviour").textContent = details.behaviour;
  document.getElementById("animalFacts").innerHTML = details.facts.map(fact => `<article class="fact-card reveal">${fact}</article>`).join("");
  document.getElementById("animalRecordTitle").textContent = `Your ${animal.name} Record`;
  document.getElementById("animalSummary").innerHTML = `
    <article class="stat-card reveal"><strong data-count="${details.sightings}">0</strong><span>Total Sightings</span></article>
    <article class="stat-card reveal"><strong data-count="${details.locations}">0</strong><span>Locations</span></article>
    <article class="stat-card reveal"><strong data-count="${details.seasons}">0</strong><span>Seasons</span></article>`;
  document.getElementById("animalTimeline").innerHTML = details.timeline.map(item => `<div><time>${item.date}</time><strong>${item.place}</strong><span>${item.time}</span></div>`).join("");
}

function getAnimalDetails(animal) {
  const guideDetails = {
    "Asian Elephant": {
      habitat: "Forests, grasslands and wetlands.",
      diet: "Herbivore",
      behaviour: "Social, highly intelligent, and matriarch-led.",
      facts: ["Elephants communicate with low-frequency rumbles that travel through the ground.", "A matriarch can remember migration routes and water sources for decades.", "Their trunks contain more than 40,000 muscles and act like a hand, hose, and signal flag."],
      sightings: 12, locations: 4, seasons: 3,
      timeline: [{ date: "19 Sep 2026", place: "Periyar", time: "6:42 PM" }, { date: "12 Aug 2026", place: "Wayanad", time: "7:15 AM" }, { date: "02 Jul 2026", place: "Silent Valley", time: "5:30 PM" }]
    },
    "Bengal Tiger": {
      habitat: "Dense forest, grassland edges, and shaded water corridors.",
      diet: "Carnivore",
      behaviour: "Solitary, territorial, and most active around dawn and dusk.",
      facts: ["Each tiger has a unique stripe pattern.", "Tigers often use water channels as quiet travel routes.", "A single territory can cover many square kilometers of forest."],
      sightings: 5, locations: 2, seasons: 2,
      timeline: [{ date: "24 Jan 2026", place: "Wayanad", time: "6:10 AM" }, { date: "18 Dec 2025", place: "Silent Valley", time: "5:50 PM" }, { date: "04 Nov 2025", place: "Wayanad", time: "6:35 AM" }]
    },
    "Indian Leopard": {
      habitat: "Rocky forest, scrub edges, and broken canopy corridors.",
      diet: "Carnivore",
      behaviour: "Elusive, adaptable, and skilled at moving through steep terrain.",
      facts: ["Leopards often drag prey into trees or dense cover.", "Their rosettes help break up their outline in dappled shade.", "They can live close to human-shaped landscapes while staying rarely seen."],
      sightings: 4, locations: 2, seasons: 3,
      timeline: [{ date: "09 Jun 2026", place: "Silent Valley", time: "7:40 PM" }, { date: "17 Apr 2026", place: "Wayanad", time: "6:55 AM" }, { date: "11 Feb 2026", place: "Eravikulam", time: "5:45 PM" }]
    },
    "Sambar Deer": {
      habitat: "Moist forest, lake margins, and shadowed clearings.",
      diet: "Herbivore",
      behaviour: "Alert, crepuscular, and known for loud alarm calls.",
      facts: ["Sambar deer often freeze before giving a deep alarm bark.", "Their large ears help detect movement in dense forest.", "They are important prey for big cats."],
      sightings: 8, locations: 3, seasons: 3,
      timeline: [{ date: "12 Aug 2026", place: "Wayanad", time: "7:15 AM" }, { date: "28 Jul 2026", place: "Periyar", time: "6:25 PM" }, { date: "03 Mar 2026", place: "Silent Valley", time: "6:05 AM" }]
    }
  };

  return guideDetails[animal.name] || {
    habitat: `${animal.location} habitat zones and nearby forest corridors.`,
    diet: animal.category === "Bird" ? "Fruit, seeds, insects, and seasonal forest food." : animal.category === "Reptile" ? "Small animals and forest prey." : "Forest plants, fruits, or prey depending on the species.",
    behaviour: animal.description,
    facts: [`${animal.name} is most often logged around ${animal.location}.`, `${animal.season} is a strong season for this guide in your observations.`, `Its conservation status is listed as ${animal.status}.`],
    sightings: 3,
    locations: 2,
    seasons: 2,
    timeline: [{ date: "19 Sep 2026", place: animal.location, time: "6:42 PM" }, { date: "12 Aug 2026", place: "Wayanad", time: "7:15 AM" }, { date: "02 Jul 2026", place: "Silent Valley", time: "5:30 PM" }]
  };
}

function initPlaces() {
  const placesGrid = document.getElementById("placesGrid");
  placesGrid.innerHTML = places.map(place => `
    <article class="place-card reveal" style="background-image:url('${place.image}')">
      <div class="card-body">
        <h3>${place.name}</h3>
        <p>${place.habitat}</p>
        <p>${place.encounters} recorded encounters</p>
        <a class="btn btn-light" href="place.html?place=${encodeURIComponent(place.name)}">Explore</a>
      </div>
    </article>`).join("");
  animateInserted(placesGrid);
}

function initPlaceGuide() {
  const requestedPlace = new URLSearchParams(window.location.search).get("place") || "Periyar";
  const place = places.find(item => item.name.toLowerCase() === requestedPlace.toLowerCase()) || places[0];
  const details = getPlaceDetails(place);
  const foundAnimals = animals.filter(animal => details.wildlife.includes(animal.name) || animal.location === place.name);

  document.title = `Wildlife Explorer | ${place.name}`;
  document.getElementById("placeHero").style.setProperty("--hero", `url('${place.image.replace("w=1000", "w=1800")}')`);
  document.getElementById("placeName").textContent = place.name;
  document.getElementById("placeSubtitle").textContent = details.subtitle;
  document.getElementById("placeHabitat").textContent = details.habitat;
  document.getElementById("placeCommonWildlife").textContent = details.wildlife.join(", ");
  document.getElementById("placeBestSeason").textContent = details.bestSeason;
  document.getElementById("placeEncounters").textContent = `${place.encounters} observations`;
  document.getElementById("placeMedals").innerHTML = `
    <article class="medal-card reveal"><span>🥇</span><p>Most Frequently Observed</p><h3>${details.top[0].name}</h3><strong>${details.top[0].sightings} sightings</strong></article>
    <article class="medal-card reveal"><span>🥈</span><p>Second Most Observed</p><h3>${details.top[1].name}</h3><strong>${details.top[1].sightings} sightings</strong></article>`;
  document.getElementById("placeSpeciesTitle").textContent = `${place.name} Species`;
  const placeAnimals = document.getElementById("placeAnimals");
  placeAnimals.innerHTML = foundAnimals.slice(0, 6).map(animalCard).join("");
  animateInserted(placeAnimals);
  document.getElementById("placeSeasons").innerHTML = ["Spring", "Summer", "Monsoon", "Winter"].map(season => `<span class="${season === details.bestSeason ? "active" : ""}">${season}</span>`).join("");
}

function getPlaceDetails(place) {
  const details = {
    Periyar: {
      subtitle: "A lake-fringed forest habitat for some of India's most iconic wildlife.",
      habitat: "Evergreen forest, lake edges, and damp grassland.",
      wildlife: ["Asian Elephant", "Sambar Deer", "Indian Peafowl", "Indian Gaur"],
      bestSeason: "Monsoon",
      top: [{ name: "Asian Elephant", sightings: 12 }, { name: "Sambar Deer", sightings: 8 }]
    },
    Wayanad: {
      subtitle: "A corridor of moist forest, bamboo, and shaded paths where large mammals move quietly.",
      habitat: "Moist deciduous forest corridors and bamboo-rich slopes.",
      wildlife: ["Bengal Tiger", "Sambar Deer", "Spotted Deer", "Indian Leopard"],
      bestSeason: "Winter",
      top: [{ name: "Sambar Deer", sightings: 9 }, { name: "Bengal Tiger", sightings: 5 }]
    },
    "Silent Valley": {
      subtitle: "A deep rainforest landscape shaped by streams, canopy trails, and mist.",
      habitat: "Rainforest, streams, and dense canopy habitat.",
      wildlife: ["Indian Gaur", "Indian Leopard", "Malabar Giant Squirrel", "Great Hornbill"],
      bestSeason: "Monsoon",
      top: [{ name: "Indian Gaur", sightings: 7 }, { name: "Indian Leopard", sightings: 4 }]
    },
    Thattekad: {
      subtitle: "A riparian bird haven with lush edges, tall trees, and active morning calls.",
      habitat: "Riverine forest, birding trails, and green canopy breaks.",
      wildlife: ["Great Hornbill", "Malabar Giant Squirrel", "Indian Peafowl", "King Cobra"],
      bestSeason: "Spring",
      top: [{ name: "Great Hornbill", sightings: 6 }, { name: "Malabar Giant Squirrel", sightings: 5 }]
    },
    Eravikulam: {
      subtitle: "High grasslands and shola patches with cool air, open slopes, and rare encounters.",
      habitat: "High grassland, rocky slopes, and shola forest pockets.",
      wildlife: ["King Cobra", "Indian Gaur", "Sambar Deer", "Indian Leopard"],
      bestSeason: "Summer",
      top: [{ name: "Indian Gaur", sightings: 5 }, { name: "King Cobra", sightings: 3 }]
    }
  };

  return details[place.name] || details.Periyar;
}

function initMap() {
  const popup = document.getElementById("mapPopup");
  document.querySelectorAll(".map-pin").forEach(pin => {
    pin.addEventListener("click", () => {
      const rect = pin.getBoundingClientRect();
      const mapRect = pin.parentElement.getBoundingClientRect();
      popup.style.left = `${Math.min(72, Math.max(4, ((rect.left - mapRect.left) / mapRect.width) * 100))}%`;
      popup.style.top = `${Math.min(78, Math.max(4, ((rect.top - mapRect.top) / mapRect.height) * 100 + 7))}%`;
      popup.innerHTML = `<strong>Asian Elephant</strong><span>${pin.dataset.place}</span><span>19 September 2026</span><span>6:42 PM</span><span>Monsoon</span>`;
      popup.classList.add("open");
    });
  });
}

function initSeasons() {
  const title = document.getElementById("seasonTitle");
  const list = document.getElementById("seasonWildlife");
  const render = season => {
    title.textContent = `${season} Wildlife`;
    list.innerHTML = seasonWildlife[season].map(item => `<span>${item}</span>`).join("");
    [...list.children].forEach((item, index) => {
      item.style.animationDelay = `${index * 55}ms`;
    });
  };
  document.querySelectorAll("#seasonCards button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#seasonCards button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      render(button.dataset.season);
    });
  });
  render("Monsoon");
}

function initIdentifier() {
  const location = document.getElementById("identifierLocation");
  const render = () => document.getElementById("identifierSuggestions").innerHTML = suggestionMarkup(location.value);
  location.addEventListener("change", render);
  render();
}

function suggestionMarkup(location) {
  const picks = suggestions[location] || suggestions.Periyar;
  return picks.map((name, index) => `
    <article class="suggestion-card">
      <span>${index === 0 ? "🥇" : "🥈"}</span>
      <h3>${name}</h3>
      <p>${index === 0 ? "Most frequently observed at this location" : "Second most frequently observed at this location"}</p>
      <a class="btn btn-primary" href="${index === 0 ? `animal.html?animal=${encodeURIComponent(name)}` : `place.html?place=${encodeURIComponent(location)}`}">${index === 0 ? "View Animal Guide" : "Explore Location"}</a>
    </article>`).join("");
}

function initMyWildlife() {
  const animalFilter = document.getElementById("animalFilter");
  const locationFilter = document.getElementById("locationFilter");
  [...new Set(encounters.map(item => item.animal))].forEach(name => animalFilter.insertAdjacentHTML("beforeend", `<option>${name}</option>`));
  [...new Set(encounters.map(item => item.location))].forEach(name => locationFilter.insertAdjacentHTML("beforeend", `<option>${name}</option>`));

  ["encounterSearch", "animalFilter", "locationFilter", "seasonFilter", "dateFilter"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderEncounters);
  });
  renderEncounters();
}

function renderEncounters() {
  const term = document.getElementById("encounterSearch").value.toLowerCase();
  const animal = document.getElementById("animalFilter").value;
  const location = document.getElementById("locationFilter").value;
  const season = document.getElementById("seasonFilter").value;
  const date = document.getElementById("dateFilter").value;
  const filtered = encounters.filter(item =>
    (!term || item.animal.toLowerCase().includes(term) || item.location.toLowerCase().includes(term)) &&
    (!animal || item.animal === animal) &&
    (!location || item.location === location) &&
    (!season || item.season === season) &&
    (!date || item.date === date)
  );
  const grid = document.getElementById("encounterGrid");
  grid.innerHTML = filtered.map(item => `
    <article class="encounter-card reveal">
      <div class="image-frame"><img src="${item.image}" alt="${item.animal}" onerror="this.style.display='none'"></div>
      <div class="card-body">
        <h3>${item.animal}</h3>
        <p>${item.location}</p>
        <div class="meta-line"><span>${item.labelDate}</span><span>${item.time}</span><span>${item.season}</span></div>
        <a class="btn btn-primary" href="encounter-details.html">View Details</a>
      </div>
    </article>`).join("") || `<p class="empty-state">No encounters match those filters.</p>`;
  animateInserted(grid);
}

function initEncounterForm() {
  const now = new Date();
  const dateInput = document.getElementById("recordDate");
  const timeInput = document.getElementById("recordTime");
  const seasonInput = document.getElementById("recordSeason");
  const timePeriod = document.getElementById("timePeriod");

  dateInput.value = toDateInputValue(now);
  timeInput.value = toTimeInputValue(now);
  seasonInput.value = getSeason(now);

  const animal = document.getElementById("recordAnimal");
  const location = document.getElementById("recordLocation");
  const warning = document.getElementById("sensitiveWarning");
  const syncTimeStyle = () => {
    const hour = Number((timeInput.value || "12:00").split(":")[0]);
    timePeriod.textContent = hour >= 12 ? "PM" : "AM";
    document.querySelector(".time-icon").textContent = hour >= 19 || hour < 5 ? "☾" : hour < 10 ? "☀" : hour < 17 ? "◐" : "◒";
    document.querySelectorAll(".time-presets button").forEach(button => {
      button.classList.toggle("active", button.dataset.time === timeInput.value);
    });
  };
  const render = () => {
    document.getElementById("recordSuggestions").innerHTML = suggestionMarkup(location.value).replaceAll("View Animal Guide", "Select Elephant").replaceAll("Explore Location", "Select Sambar");
    warning.classList.toggle("show", ["Bengal Tiger", "King Cobra", "Asian Elephant"].includes(animal.value));
  };

  dateInput.addEventListener("change", () => {
    if (dateInput.value) seasonInput.value = getSeason(new Date(`${dateInput.value}T12:00:00`));
  });
  timeInput.addEventListener("input", syncTimeStyle);
  document.querySelectorAll(".time-presets button").forEach(button => {
    button.addEventListener("click", () => {
      timeInput.value = button.dataset.time;
      syncTimeStyle();
    });
  });
  animal.addEventListener("change", render);
  location.addEventListener("change", render);
  document.getElementById("encounterForm").addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("successModal").classList.add("open");
  });
  document.querySelector(".modal-close").addEventListener("click", () => document.getElementById("successModal").classList.remove("open"));
  document.getElementById("successModal").addEventListener("click", event => {
    if (event.target.id === "successModal") event.currentTarget.classList.remove("open");
  });
  render();
  syncTimeStyle();
}

function initInsights() {
  const data = [
    ["Asian Elephant", 12],
    ["Sambar Deer", 8],
    ["Spotted Deer", 6],
    ["Indian Gaur", 4]
  ];
  const max = Math.max(...data.map(item => item[1]));
  document.getElementById("animalBars").innerHTML = data.map(([name, value]) => `
    <div class="bar-row"><strong>${name}</strong><div class="bar-track"><div class="bar-fill" style="width:${(value / max) * 100}%"></div></div><span>${value}</span></div>`).join("");
}

function getSeason(date) {
  const month = date.getMonth() + 1;
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7].includes(month)) return "Summer";
  if ([8, 9, 10].includes(month)) return "Monsoon";
  return "Winter";
}

function formatDate(date) {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toTimeInputValue(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
