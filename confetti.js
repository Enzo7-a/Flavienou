const Confettis = (() => {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  const COULEURS = ["#FF4D94", "#FF77AE", "#FFD1E3", "#F7C744", "#ffffff"];
  let particules = [];
  let animationEnCours = false;

  function redimensionner() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", redimensionner);
  redimensionner();

  function creerParticule(x, y, angleMin, angleMax, vitesse) {
    const angle = angleMin + Math.random() * (angleMax - angleMin);
    const v = vitesse * (0.6 + Math.random() * 0.8);
    return {
      x, y,
      vx: Math.cos(angle) * v,
      vy: Math.sin(angle) * v,
      taille: 5 + Math.random() * 6,
      couleur: COULEURS[Math.floor(Math.random() * COULEURS.length)],
      rotation: Math.random() * Math.PI * 2,
      vRotation: (Math.random() - 0.5) * 0.3,
      vie: 1,
      declin: 0.006 + Math.random() * 0.008,
      forme: Math.random() < 0.25 ? "coeur" : "rect",
    };
  }

  function dessinerCoeur(p) {
    const t = p.taille * 0.7;
    ctx.beginPath();
    ctx.moveTo(0, t * 0.3);
    ctx.bezierCurveTo(-t, -t * 0.5, -t * 0.4, -t * 1.2, 0, -t * 0.4);
    ctx.bezierCurveTo(t * 0.4, -t * 1.2, t, -t * 0.5, 0, t * 0.3);
    ctx.fill();
  }

  function boucle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particules = particules.filter(p => p.vie > 0 && p.y < canvas.height + 30);

    for (const p of particules) {
      p.vy += 0.12;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRotation;
      p.vie -= p.declin;

      ctx.save();
      ctx.globalAlpha = Math.max(p.vie, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.couleur;
      if (p.forme === "coeur") {
        dessinerCoeur(p);
      } else {
        ctx.fillRect(-p.taille / 2, -p.taille / 2, p.taille, p.taille * 0.6);
      }
      ctx.restore();
    }

    if (particules.length > 0) {
      requestAnimationFrame(boucle);
    } else {
      animationEnCours = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function demarrer() {
    if (!animationEnCours) {
      animationEnCours = true;
      requestAnimationFrame(boucle);
    }
  }

  return {
    explosion(nombre = 100, x = 0.5, y = 0.5) {
      const px = x * canvas.width;
      const py = y * canvas.height;
      for (let i = 0; i < nombre; i++) {
        particules.push(creerParticule(px, py, -Math.PI * 0.9, -Math.PI * 0.1, 9));
      }
      demarrer();
    },
    pluie(duree = 2500) {
      const fin = Date.now() + duree;
      const jet = () => {
        for (let i = 0; i < 5; i++) {
          particules.push(creerParticule(0, canvas.height * 0.8, -Math.PI * 0.45, -Math.PI * 0.2, 11));
          particules.push(creerParticule(canvas.width, canvas.height * 0.8, -Math.PI * 0.8, -Math.PI * 0.55, 11));
        }
        demarrer();
        if (Date.now() < fin) requestAnimationFrame(jet);
      };
      jet();
    },
  };
})();
