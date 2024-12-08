document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const typewriterElement = document.getElementById("typewriter");
  const text = "Halo, Saya Humaimah Eka Ningrum"; // Teks yang akan diketik
  let charIndex = 0;

  function type() {
      if (charIndex < text.length) {
          typewriterElement.textContent += text[charIndex];
          charIndex++;
          setTimeout(type, 100); // Waktu antar karakter
      }
  }

  type(); // Memulai animasi
});

