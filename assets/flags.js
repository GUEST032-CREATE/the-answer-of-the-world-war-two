// Banderas históricas de los bandos de la Batalla de Stalingrado.
// Imágenes de dominio público / libres desde Wikimedia Commons (contexto educativo).

const FLAGS = {
  alemania:      { src: "assets/img/alemania.svg",      alt: "Bandera de la Alemania nazi (1935-1945)" },
  rumania:       { src: "assets/img/rumania.png",       alt: "Bandera del Reino de Rumanía" },
  italia:        { src: "assets/img/italia.svg",        alt: "Bandera del Reino de Italia (1861-1946)" },
  hungria:       { src: "assets/img/hungria.svg",       alt: "Bandera del Reino de Hungría (1919-1946)" },
  urss:          { src: "assets/img/urss.svg",          alt: "Bandera de la Unión Soviética (1936-1955)" },
  polonia:       { src: "assets/img/polonia-flag.svg",  alt: "Bandera de Polonia" },
  reino_unido:   { src: "assets/img/reino-unido.svg",   alt: "Bandera del Reino Unido" },
  francia:       { src: "assets/img/francia.svg",       alt: "Bandera de Francia" },
  eeuu:          { src: "assets/img/eeuu.svg",          alt: "Bandera de Estados Unidos (48 estrellas, 1912-1959)" },
  francia_libre: { src: "assets/img/francia-libre.svg", alt: "Bandera de la Francia Libre (1940-1944), con la Cruz de Lorena" },
  vichy:         { src: "assets/img/vichy.svg",         alt: "Emblema informal del Estado Francés de Vichy (1940-1944), la francisque" },
  espana_franco: { src: "assets/img/espana-franco.svg", alt: "Bandera de la España franquista (1938-1945)" },
  belgica:       { src: "assets/img/belgica.svg",       alt: "Bandera de Bélgica" },
  paises_bajos:  { src: "assets/img/paises-bajos.svg",  alt: "Bandera de los Países Bajos" },
  japon:         { src: "assets/img/japon.svg",         alt: "Bandera del Imperio del Japón" },
  china:         { src: "assets/img/china.svg",         alt: "Bandera de la República de China (1928-1949)" },
  dinamarca:     { src: "assets/img/dinamarca.svg",     alt: "Bandera de Dinamarca" },
  noruega:       { src: "assets/img/noruega.svg",       alt: "Bandera de Noruega" },
  finlandia:     { src: "assets/img/finlandia.svg",     alt: "Bandera de Finlandia" },
  grecia:        { src: "assets/img/grecia.svg",        alt: "Bandera del Reino de Grecia" },
  yugoslavia:    { src: "assets/img/yugoslavia.svg",    alt: "Bandera del Reino de Yugoslavia" },
  canada:        { src: "assets/img/canada.svg",        alt: "Pabellón rojo canadiense (1921-1957)" },
  luxemburgo:    { src: "assets/img/luxemburgo.svg",    alt: "Bandera de Luxemburgo" },
  australia:     { src: "assets/img/australia.svg",     alt: "Bandera de Australia" }
};

document.querySelectorAll('[data-flag]').forEach(el => {
  const key = el.getAttribute('data-flag');
  const f = FLAGS[key];
  if (f) {
    const img = document.createElement('img');
    img.src = f.src;
    img.alt = f.alt;
    img.className = 'flag';
    img.loading = 'lazy';
    el.replaceChildren(img);
  }
});
