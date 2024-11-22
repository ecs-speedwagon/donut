// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  // Відкриття та закриття меню
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
// Закриття меню при ширині ≥768px
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // Закриття меню при ширині ≥1200px
  const mobileMenu = document.querySelector('.mobileMenu'); // Sicherstellen, dass dies korrekt definiert ist

  window.matchMedia('(min-width: 1200px)').addEventListener('change', (e) => {
      if (e.matches) {
          mobileMenu.classList.remove('is-open'); // Schließt das mobile Menü, wenn die Breite 1200px oder mehr beträgt
      }
  });
  
  // Toggle Sichtbarkeit des About-Inhalts
  const aboutClickableText = document.getElementById('aboutClickableText');
  const aboutContent = document.querySelector('.aboutContent');
  
  if (aboutClickableText && aboutContent) {
      aboutClickableText.addEventListener('click', () => {
          aboutContent.classList.toggle('show'); // Wechselt die Sichtbarkeit des About-Inhalts
      });
  }
  
  // Toggle Sichtbarkeit des Program-Inhalts
  const programClickableText = document.getElementById('programClickableText');
  const programContent = document.querySelector('.programContent');
  
  if (programClickableText && programContent) {
      programClickableText.addEventListener('click', () => {
          programContent.classList.toggle('show'); // Wechselt die Sichtbarkeit des Program-Inhalts
      });
  }
  


  // const readMoreButton = document.querySelector('.read-more');
  // const hiddenText = document.querySelector('.hidden-text');
  
  // readMoreButton.addEventListener('click', () => {
  //   if (hiddenText.style.display === 'none') {
  //     hiddenText.style.display = 'block';
  //     readMoreButton.textContent = 'Read less';
  //   } else {
  //     hiddenText.style.display = 'none';
  //     readMoreButton.textContent = 'Read more';   
  
  //   }
  // });