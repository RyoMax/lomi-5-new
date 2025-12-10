let form = document.getElementById("form");
let toFormBtn = document.querySelector(".to-form-btn");

if (form) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element sichtbar -> Aktion
        toFormBtn.classList.add('hidden');
        
        // Da der button nur einmal angezeigt werden soll, bis der Nutzer das Form gefunden hat:
        observer.unobserve(entry.target);
      } else {
        toFormBtn.classList.remove('hidden');
      }
    });
  }, {
    root: null,           // viewport
    rootMargin: '0px',    // erweitern/verkleinern der Sichtbarkeit
    threshold: 0.6       // 10% sichtbar = true
  });

  io.observe(form);
}