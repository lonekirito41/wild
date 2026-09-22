const animals = [
  { name: "Asian Elephant", category: "Mammal", status: "Endangered", location: "Periyar", season: "Monsoon", description: "A social giant of forest edges, wetlands, and grasslands.", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80" },
  { name: "Bengal Tiger", category: "Mammal", status: "Endangered", location: "Wayanad", season: "Winter", description: "A powerful apex predator that moves silently through dense cover.", image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Leopard", category: "Mammal", status: "Vulnerable", location: "Silent Valley", season: "Summer", description: "An adaptable spotted cat often seen near rocky forest corridors.", image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=900&q=80" },
  { name: "Sambar Deer", category: "Mammal", status: "Vulnerable", location: "Periyar", season: "Monsoon", description: "A large forest deer with a deep alarm call and twilight habits.", image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=900&q=80" },
  { name: "Spotted Deer", category: "Mammal", status: "Least Concern", location: "Wayanad", season: "Spring", description: "Graceful herds with white-flecked coats that shine in broken light.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/A_chital_stag_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original" },
  { name: "Indian Gaur", category: "Mammal", status: "Vulnerable", location: "Silent Valley", season: "Monsoon", description: "A muscular wild bovine with pale stockings and a high ridgeback.", image: "https://t3.ftcdn.net/jpg/03/88/25/88/360_F_388258874_nHzvnXwqV0EaJQb0vBbJzl5Eq393YrsC.jpg" },
  { name: "Malabar Giant Squirrel", category: "Mammal", status: "Least Concern", location: "Thattekad", season: "Monsoon", description: "A vivid canopy acrobat with rust, cream, and black fur.", image: "https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Peafowl", category: "Bird", status: "Least Concern", location: "Periyar", season: "Spring", description: "A radiant bird known for courtship displays and ringing calls.", image: "https://p2.piqsels.com/preview/271/444/951/peacock-bird-plumage-pheasant.jpg", imagePosition: "center 35%" },
  { name: "Great Hornbill", category: "Bird", status: "Vulnerable", location: "Thattekad", season: "Summer", description: "A huge forest bird with a golden casque and heavy wingbeats.", image: "https://media.istockphoto.com/id/1356304155/photo/the-great-hornbill-also-known-as-the-concave-casqued-hornbill-great-indian-hornbill-or-great.jpg?s=612x612&w=0&k=20&c=8Fw2EZSOVp6fdEnp6JnExC_kTeWAkrXpHd154w47Uuo=" },
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
  { id: "asian-elephant-periyar-2026-09-19", animal: "Asian Elephant", location: "Periyar", date: "2026-09-19", labelDate: "19 September 2026", time: "6:42 PM", season: "Monsoon", image: animals[0].image, observation: "A small herd crossed the damp teak path near the lake edge, moving calmly after evening rain." },
  { id: "sambar-deer-wayanad-2026-08-12", animal: "Sambar Deer", location: "Wayanad", date: "2026-08-12", labelDate: "12 August 2026", time: "7:15 AM", season: "Monsoon", image: animals[3].image, observation: "A lone stag paused at the bamboo edge before slipping back into the shaded Wayanad corridor." },
  { id: "indian-gaur-silent-valley-2026-07-02", animal: "Indian Gaur", location: "Silent Valley", date: "2026-07-02", labelDate: "02 July 2026", time: "5:30 PM", season: "Monsoon", image: animals[5].image, observation: "A heavy-shouldered gaur grazed near a wet clearing while mist gathered under the rainforest canopy." },
  { id: "bengal-tiger-wayanad-2026-01-24", animal: "Bengal Tiger", location: "Wayanad", date: "2026-01-24", labelDate: "24 January 2026", time: "6:10 AM", season: "Winter", image: animals[1].image, observation: "Fresh pugmarks and a brief striped flash marked a winter patrol route beside the forest track." },
  { id: "indian-peafowl-periyar-2026-03-15", animal: "Indian Peafowl", location: "Periyar", date: "2026-03-15", labelDate: "15 March 2026", time: "8:05 AM", season: "Spring", image: animals[7].image, observation: "A peafowl crossed the open lawn in bright morning light, tail train dragging through short grass." },
  { id: "king-cobra-eravikulam-2026-06-08", animal: "King Cobra", location: "Eravikulam", date: "2026-06-08", labelDate: "08 June 2026", time: "4:20 PM", season: "Summer", image: animals[9].image, observation: "The cobra lifted its hood near a warm trail margin before easing into cover away from the path." }
];

const mapTargets = {
  Periyar: "Periyar Tiger Reserve, Thekkady, Kerala, India",
  Wayanad: "Wayanad Wildlife Sanctuary, Kerala, India",
  "Silent Valley": "Silent Valley National Park, Kerala, India",
  Thattekad: "Thattekkad Bird Sanctuary, Kerala, India",
  Eravikulam: "Eravikulam National Park, Kerala, India"
};

const mapPinPositions = {
  Periyar: { x: 48, y: 65 },
  Wayanad: { x: 31, y: 36 },
  "Silent Valley": { x: 47, y: 43 },
  Thattekad: { x: 63, y: 52 },
  Eravikulam: { x: 58, y: 57 }
};

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
  initAuthModal();
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
  if (page === "encounter-details") initEncounterDetails();
  if (page === "insights") initInsights();
  initReveal();
  initCounters();
});

function buildNavigation() {
  const emptyHeader = document.querySelector(".site-header:empty");
  if (!emptyHeader) return;
  emptyHeader.innerHTML = `
    <nav class="nav-shell">
      <a class="logo" href="index.html"><span>🐾</span> Wild Life Seasonal Tracker</a>
      <button class="menu-toggle" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <div class="nav-links">
        <a href="index.html" data-nav="home">Home</a>
        <a href="wildlife.html" data-nav="wildlife">Wildlife</a>
        <a href="places.html" data-nav="places">Places</a>
        <a href="seasons.html" data-nav="seasons">Seasons</a>
        <a href="identifier.html" data-nav="identifier">Identifier</a>
        <a href="my-wildlife.html" data-nav="my-wildlife">My Wildlife</a>
        <a href="insights.html" data-nav="insights">Insights</a>
        <button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch theme"><span class="theme-icon">☾</span></button>
        <a class="btn btn-primary nav-cta" href="encounter.html">+ Record Encounter</a>
      </div>
      <div class="account-menu">
        <button class="account-button" type="button" aria-label="Open account menu" aria-expanded="false"><span></span></button>
        <div class="account-panel">
          <strong id="accountName">Guest</strong>
          <p id="accountEmail">No email</p>
          <div class="account-auth-actions">
            <button class="btn btn-light auth-trigger" type="button" data-auth-mode="login">Login</button>
            <button class="btn btn-primary auth-trigger" type="button" data-auth-mode="register">Register</button>
          </div>
          <button class="btn btn-light auth-logout" type="button">Logout</button>
        </div>
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

function initAuthModal() {
  if (!document.getElementById("authModal")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="auth-modal" id="authModal" aria-hidden="true">
        <div class="auth-card" role="dialog" aria-modal="true" aria-labelledby="authTitle">
          <button class="auth-close" type="button" aria-label="Close login form">×</button>
          <div class="auth-illustration" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="auth-tabs">
            <button class="active" type="button" data-auth-mode="login">Login</button>
            <button type="button" data-auth-mode="register">Register</button>
          </div>
          <form id="authForm" class="auth-form">
            <p class="eyebrow" id="authEyebrow">Welcome Back</p>
            <h2 id="authTitle">Login</h2>
            <label>Email<input id="authEmail" type="email" autocomplete="email" placeholder="you@example.com" required></label>
            <label>Username<input id="authUsername" type="text" autocomplete="username" placeholder="Enter username" required></label>
            <label>Password
              <div class="password-field">
                <input id="authPassword" type="password" autocomplete="current-password" placeholder="Enter password" required>
                <button class="password-toggle" type="button" aria-label="Show password">Show</button>
              </div>
            </label>
            <button class="btn btn-primary" id="authSubmit" type="submit">Login</button>
            <p class="auth-message" id="authMessage" aria-live="polite"></p>
          </form>
        </div>
      </div>`);
  }

  const modal = document.getElementById("authModal");
  const form = document.getElementById("authForm");
  const title = document.getElementById("authTitle");
  const eyebrow = document.getElementById("authEyebrow");
  const password = document.getElementById("authPassword");
  const submit = document.getElementById("authSubmit");
  const message = document.getElementById("authMessage");
  const emailInput = document.getElementById("authEmail");
  const usernameInput = document.getElementById("authUsername");
  const accountMenu = document.querySelector(".account-menu");
  const accountButton = document.querySelector(".account-button");
  const accountName = document.getElementById("accountName");
  const accountEmail = document.getElementById("accountEmail");
  const accountAuthActions = document.querySelector(".account-auth-actions");
  const logoutButton = document.querySelector(".auth-logout");
  const passwordToggle = document.querySelector(".password-toggle");
  const getUsers = () => JSON.parse(localStorage.getItem("wildlife-users") || "{}");
  const saveUsers = users => localStorage.setItem("wildlife-users", JSON.stringify(users));
  const setSession = username => localStorage.setItem("wildlife-session", username);
  const clearSession = () => localStorage.removeItem("wildlife-session");
  const closeAccountMenu = () => {
    if (!accountMenu || !accountButton) return;
    accountMenu.classList.remove("open");
    accountButton.setAttribute("aria-expanded", "false");
  };
  let mode = "login";

  const syncAuthState = () => {
    const activeUser = localStorage.getItem("wildlife-session");
    const users = getUsers();
    const user = activeUser ? users[activeUser] : null;
    document.querySelectorAll(".auth-trigger").forEach(button => {
      button.hidden = Boolean(activeUser);
    });
    if (accountAuthActions) accountAuthActions.hidden = Boolean(activeUser);
    if (logoutButton) logoutButton.hidden = !activeUser;
    if (accountName) accountName.textContent = activeUser || "Account";
    if (accountEmail) accountEmail.textContent = user?.email || "Sign in or create an account";
    if (!activeUser) closeAccountMenu();
  };

  const findUserByEmail = (users, email) => {
    const cleanEmail = email.toLowerCase();
    return Object.entries(users).find(([, user]) => (user.email || "").toLowerCase() === cleanEmail);
  };

  const setPasswordVisible = visible => {
    password.type = visible ? "text" : "password";
    if (passwordToggle) {
      passwordToggle.textContent = visible ? "Hide" : "Show";
      passwordToggle.setAttribute("aria-label", visible ? "Hide password" : "Show password");
    }
  };

  const setMode = nextMode => {
    mode = nextMode;
    const isRegister = mode === "register";
    title.textContent = isRegister ? "Create Account" : "Login";
    eyebrow.textContent = isRegister ? "Start Tracking" : "Welcome Back";
    password.autocomplete = isRegister ? "new-password" : "current-password";
    usernameInput.required = true;
    usernameInput.placeholder = isRegister ? "Choose username" : "Enter username";
    submit.textContent = isRegister ? "Register" : "Login";
    message.textContent = "";
    message.classList.remove("error");
    form.reset();
    setPasswordVisible(false);
    document.querySelectorAll("[data-auth-mode]").forEach(button => {
      button.classList.toggle("active", button.dataset.authMode === mode && button.closest(".auth-tabs"));
    });
  };

  const openModal = nextMode => {
    setMode(nextMode);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    emailInput.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.querySelectorAll(".auth-trigger").forEach(button => {
    button.addEventListener("click", () => {
      closeAccountMenu();
      openModal(button.dataset.authMode);
    });
  });
  document.querySelectorAll(".auth-tabs button").forEach(button => {
    button.addEventListener("click", () => setMode(button.dataset.authMode));
  });
  document.querySelector(".auth-close").addEventListener("click", closeModal);
  if (passwordToggle) {
    passwordToggle.addEventListener("click", () => setPasswordVisible(password.type === "password"));
  }
  if (accountButton && accountMenu) {
    accountButton.addEventListener("click", event => {
      event.stopPropagation();
      const isOpen = accountMenu.classList.toggle("open");
      accountButton.setAttribute("aria-expanded", String(isOpen));
    });
  }
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      clearSession();
      closeAccountMenu();
      syncAuthState();
    });
  }
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
    if (event.key === "Escape") closeAccountMenu();
  });
  document.addEventListener("click", event => {
    if (accountMenu && !accountMenu.contains(event.target)) closeAccountMenu();
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    const username = usernameInput.value.trim();
    const passwordValue = password.value;
    const users = getUsers();

    if (!emailInput.checkValidity()) {
      message.textContent = "Enter a valid email address.";
      message.classList.add("error");
      return;
    }
    if (username.length < 3) {
      message.textContent = "Username needs at least 3 characters.";
      message.classList.add("error");
      return;
    }
    if (passwordValue.length < 4) {
      message.textContent = "Password needs at least 4 characters.";
      message.classList.add("error");
      return;
    }

    if (mode === "register") {
      if (users[username]) {
        message.textContent = "That username is already registered.";
        message.classList.add("error");
        return;
      }
      if (findUserByEmail(users, email)) {
        message.textContent = "That email is already registered.";
        message.classList.add("error");
        return;
      }
      users[username] = { email, password: passwordValue, createdAt: new Date().toISOString() };
      saveUsers(users);
      setSession(username);
      message.textContent = `Registered as ${username}.`;
    } else {
      const user = users[username];
      if (!user || user.password !== passwordValue || (user.email || "").toLowerCase() !== email) {
        message.textContent = "Email, username, or password is wrong.";
        message.classList.add("error");
        return;
      }
      setSession(username);
      message.textContent = `Logged in as ${username}.`;
    }

    message.classList.remove("error");
    form.classList.remove("pulse");
    requestAnimationFrame(() => form.classList.add("pulse"));
    syncAuthState();
    setTimeout(closeModal, 650);
  });
  syncAuthState();
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

  document.title = `Wild Life Seasonal Tracker | ${animal.name}`;
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
  document.querySelector('a[href="animal-map.html"]').href = `animal-map.html?animal=${encodeURIComponent(animal.name)}`;
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

  document.title = `Wild Life Seasonal Tracker | ${place.name}`;
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
  const frame = document.getElementById("googleMapFrame");
  const list = document.getElementById("mapLocationList");
  const pinLayer = document.getElementById("mapPinLayer");
  const externalLink = document.getElementById("mapExternalLink");
  const title = document.getElementById("mapTitle");
  const subtitle = document.getElementById("mapSubtitle");
  const stats = document.getElementById("mapStats");
  const journey = document.getElementById("mapJourney");
  if (!frame || !list || !pinLayer || !externalLink || !title || !subtitle || !stats || !journey) return;

  const mappedEncounters = encounters;

  document.title = "Wild Life Seasonal Tracker | All Wildlife Sighting Map";
  title.textContent = "All Wildlife Sighting Map";
  subtitle.textContent = "Pins show all recorded animal sighting locations.";

  const locationNames = [...new Set(mappedEncounters.map(item => item.location))];
  const seasonCount = new Set(mappedEncounters.map(item => item.season)).size;
  const setLocation = location => {
    frame.src = googleMapsEmbedUrl(location);
    frame.title = `Google map of ${mapTargets[location] || location}`;
    externalLink.href = googleMapsUrl(location);
    document.querySelectorAll(".map-location-button").forEach(button => {
      button.classList.toggle("active", button.dataset.location === location);
    });
    document.querySelectorAll(".sighting-pin").forEach(pin => {
      pin.classList.toggle("active", pin.dataset.location === location);
    });
  };

  list.innerHTML = locationNames.map(location => {
    const locationEncounters = mappedEncounters.filter(item => item.location === location);
    const sightingCount = locationEncounters.length;
    const animalNames = [...new Set(locationEncounters.map(item => item.animal))].join(", ");
    const label = `${sightingCount} ${sightingCount === 1 ? "sighting" : "sightings"}`;
    return `
      <button class="map-location-button" type="button" data-location="${location}">
        <strong>${location}</strong>
        <span>${mapTargets[location] || location}</span>
        <span>${label}</span>
        <em>${animalNames}</em>
      </button>`;
  }).join("");
  pinLayer.innerHTML = locationNames.map(location => {
    const position = mapPinPositions[location] || { x: 50, y: 50 };
    const locationEncounters = mappedEncounters.filter(item => item.location === location);
    const animalNames = [...new Set(locationEncounters.map(item => item.animal))].join(", ");
    const label = `${location}: ${animalNames}`;
    return `
      <button class="sighting-pin" type="button" data-location="${location}" style="left:${position.x}%;top:${position.y}%" aria-label="${label}">
        <strong>${location}</strong>
        <span>${animalNames}</span>
      </button>`;
  }).join("");

  stats.innerHTML = `
    <article class="stat-card reveal visible"><strong>${mappedEncounters.length}</strong><span>Total Sightings</span></article>
    <article class="stat-card reveal visible"><strong>${locationNames.length}</strong><span>Locations</span></article>
    <article class="stat-card reveal visible"><strong>${seasonCount}</strong><span>Seasons</span></article>`;
  journey.innerHTML = locationNames.join(" <span>→</span> ");

  document.querySelectorAll(".map-location-button").forEach(button => {
    button.addEventListener("click", () => setLocation(button.dataset.location));
  });
  document.querySelectorAll(".sighting-pin").forEach(pin => {
    pin.addEventListener("click", () => setLocation(pin.dataset.location));
  });

  setLocation(locationNames[0]);
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
        <a class="btn btn-primary" href="encounter-details.html?encounter=${encodeURIComponent(item.id)}">View Details</a>
      </div>
    </article>`).join("") || `<p class="empty-state">No encounters match those filters.</p>`;
  animateInserted(grid);
}

function initEncounterDetails() {
  const params = new URLSearchParams(window.location.search);
  const requestedEncounter = params.get("encounter");
  const requestedAnimal = params.get("animal");
  const encounter = encounters.find(item => item.id === requestedEncounter) ||
    encounters.find(item => item.animal.toLowerCase() === (requestedAnimal || "").toLowerCase()) ||
    encounters[0];
  const animal = animals.find(item => item.name === encounter.animal) || animals[0];

  document.title = `Wild Life Seasonal Tracker | ${encounter.animal} Encounter`;
  document.getElementById("encounterHero").style.setProperty("--hero", `url('${encounter.image.replace("w=900", "w=1800")}')`);
  document.getElementById("encounterAnimal").textContent = encounter.animal;
  document.getElementById("encounterMeta").textContent = `📍 ${encounter.location}   📅 ${encounter.labelDate}   🕐 ${encounter.time}   ${seasonIcon(encounter.season)} ${encounter.season}`;
  document.getElementById("encounterObservation").textContent = encounter.observation;
  document.getElementById("encounterStatus").textContent = animal.status;
  document.getElementById("encounterLocation").textContent = mapTargets[encounter.location] || encounter.location;
  document.getElementById("encounterMap").href = googleMapsUrl(encounter.location);
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

function seasonIcon(season) {
  return {
    Spring: "🌸",
    Summer: "☀️",
    Monsoon: "🌧️",
    Winter: "❄️"
  }[season] || "📍";
}

function googleMapsUrl(location) {
  const query = mapTargets[location] || location;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleMapsEmbedUrl(location) {
  const query = mapTargets[location] || location;
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
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
