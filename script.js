const gate = document.getElementById("gate");
const gateInput = document.getElementById("gateInput");
const gateBtn = document.getElementById("gateBtn");
const gateError = document.getElementById("gateError");
const gateCard = document.getElementById("gateCard");
const site = document.getElementById("site");

function normaliser(texte) {
  return texte.toLowerCase().replace(/\s+/g, "").replace(/[-.]/g, "/");
}

function verifierDate() {
  const saisie = normaliser(gateInput.value);
  const ok = CONFIG.reponsesAcceptees.some(r => normaliser(r) === saisie);
  if (ok) {
    document.title = "Notre premier mois";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    gate.classList.add("open");
    site.classList.add("visible");
    Confettis.explosion(140, 0.5, 0.4);
    setTimeout(() => gate.remove(), 900);
  } else {
    gateCard.classList.remove("shake");
    void gateCard.offsetWidth;
    gateCard.classList.add("shake");
    gateError.textContent = "Date incorrecte, réessaie.";
    gateInput.value = "";
  }
}
gateBtn.addEventListener("click", verifierDate);
gateInput.addEventListener("keydown", e => { if (e.key === "Enter") verifierDate(); });

function construireFrise() {
  const conteneur = document.getElementById("timeline");
  const moments = [...FRISE].sort((a, b) => new Date(a.date) - new Date(b.date));
  const formateur = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  for (const m of moments) {
    const item = document.createElement("div");
    item.className = "tl-item";

    const card = document.createElement("div");
    card.className = "tl-card";

    const img = document.createElement("img");
    img.src = m.photo;
    img.alt = m.titre;
    img.loading = "lazy";
    img.onerror = () => {
      const fallback = document.createElement("div");
      fallback.className = "tl-photo-fallback";
      fallback.textContent = "💗";
      img.replaceWith(fallback);
    };
    card.appendChild(img);

    const dateEl = document.createElement("span");
    dateEl.className = "tl-date";
    dateEl.textContent = formateur.format(new Date(m.date + "T12:00:00"));
    card.appendChild(dateEl);

    const titreEl = document.createElement("div");
    titreEl.className = "tl-titre";
    titreEl.textContent = m.titre;
    card.appendChild(titreEl);

    const motEl = document.createElement("p");
    motEl.className = "tl-mot";
    motEl.textContent = "« " + m.mot + " »";
    card.appendChild(motEl);

    item.appendChild(card);
    conteneur.appendChild(item);
  }

  const observateur = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("reveal"); });
  }, { threshold: 0.15 });
  document.querySelectorAll(".tl-card").forEach(c => observateur.observe(c));
}
construireFrise();

function construireStats() {
  const grid = document.getElementById("statGrid");
  for (const s of CONFIG.statistiques) {
    const card = document.createElement("div");
    card.className = "stat-card";

    const emoji = document.createElement("div");
    emoji.className = "stat-emoji";
    emoji.textContent = s.emoji;

    const num = document.createElement("div");
    num.className = "stat-num";
    num.textContent = s.nombre.toLocaleString("fr-FR");

    const label = document.createElement("div");
    label.className = "stat-label";
    label.textContent = s.texte;

    card.append(emoji, num, label);
    grid.appendChild(card);
  }
}
construireStats();

function decomposerDuree(depuis) {
  const maintenant = new Date();
  let mois = (maintenant.getFullYear() - depuis.getFullYear()) * 12 + (maintenant.getMonth() - depuis.getMonth());
  const repere = new Date(depuis);
  repere.setMonth(repere.getMonth() + mois);
  if (repere > maintenant) { mois--; repere.setMonth(repere.getMonth() - 1); }
  if (mois < 0) mois = 0;
  let reste = Math.max(0, Math.floor((maintenant - repere) / 1000));
  const jours = Math.floor(reste / 86400); reste %= 86400;
  const heures = Math.floor(reste / 3600); reste %= 3600;
  const minutes = Math.floor(reste / 60);
  const secondes = reste % 60;
  return { mois, jours, heures, minutes, secondes };
}

function afficherCompteur(elementId, depuis) {
  const el = document.getElementById(elementId);
  const d = decomposerDuree(depuis);
  const unites = [
    [d.mois, "mois"], [d.jours, "jours"], [d.heures, "heures"],
    [d.minutes, "min"], [d.secondes, "sec"],
  ];
  el.innerHTML = unites.map(([v, u]) =>
    `<div class="cbox"><div class="val">${String(v).padStart(2, "0")}</div><div class="unit">${u}</div></div>`
  ).join("");
}

function tick() {
  afficherCompteur("counterTalk", CONFIG.datePremierMessage);
  afficherCompteur("counterHappy", CONFIG.dateBonheur);
  afficherCompteur("counterLove", CONFIG.dateEnsemble);
}
tick();
setInterval(tick, 1000);

function construireCarrousel() {
  const track = document.getElementById("carTrack");
  const dots = document.getElementById("carDots");
  if (!track || typeof DOSSIER === "undefined" || DOSSIER.length === 0) return;

  DOSSIER.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "car-slide";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Dossier " + (i + 1);
    img.loading = "lazy";
    img.onerror = () => {
      const fallback = document.createElement("div");
      fallback.className = "car-fallback";
      fallback.textContent = "😋";
      img.replaceWith(fallback);
    };
    img.addEventListener("click", () => ouvrirLightbox(src));
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "car-dot";
    dot.setAttribute("aria-label", "Aller à la photo " + (i + 1));
    dot.addEventListener("click", () => aller(i));
    dots.appendChild(dot);
  });

  let index = 0;
  const total = DOSSIER.length;

  function maj() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.querySelectorAll(".car-dot").forEach((d, i) =>
      d.classList.toggle("active", i === index)
    );
  }
  function aller(i) { index = (i + total) % total; maj(); }

  document.getElementById("carPrev").addEventListener("click", () => aller(index - 1));
  document.getElementById("carNext").addEventListener("click", () => aller(index + 1));

  // Swipe tactile (pour le téléphone)
  let departX = null;
  track.addEventListener("touchstart", e => { departX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", e => {
    if (departX === null) return;
    const delta = e.changedTouches[0].clientX - departX;
    if (Math.abs(delta) > 40) aller(delta < 0 ? index + 1 : index - 1);
    departX = null;
  }, { passive: true });

  maj();
}
construireCarrousel();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function ouvrirLightbox(src) {
  lightboxImg.src = src;
  lightboxImg.alt = "Photo en grand";
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}
function fermerLightbox() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}
lightbox.addEventListener("click", fermerLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") fermerLightbox(); });

const gift = document.getElementById("gift");
const giftHint = document.getElementById("giftHint");
const loveMessage = document.getElementById("loveMessage");
document.getElementById("loveText").textContent = CONFIG.messageAmour;

const etapes = ["🎁", "🎁", "🎀", "📦", "💥"];
const indices = [
  "Encore !",
  "Continue, il se fissure…",
  "Presque !",
  "Un dernier clic !!! 🥁",
];
let clics = 0;
const clicsNecessaires = 5;

gift.addEventListener("click", () => {
  if (gift.classList.contains("broken")) return;
  clics++;
  gift.classList.remove("hit");
  void gift.offsetWidth;
  gift.classList.add("hit");

  const rect = gift.getBoundingClientRect();
  const gx = (rect.left + rect.width / 2) / window.innerWidth;
  const gy = (rect.top + rect.height / 2) / window.innerHeight;

  Confettis.explosion(15 + clics * 10, gx, gy);

  if (clics < clicsNecessaires) {
    gift.textContent = etapes[Math.min(clics, etapes.length - 1)];
    giftHint.textContent = indices[Math.min(clics - 1, indices.length - 1)];
  } else {
    gift.classList.add("broken");
    giftHint.textContent = "";
    Confettis.explosion(260, gx, gy);
    Confettis.pluie(2800);
    setTimeout(() => loveMessage.classList.add("show"), 400);
  }
});
