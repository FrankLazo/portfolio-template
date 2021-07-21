// Elements

const progressBar = document.querySelector('.progress-bar');
const headerContent = document.querySelector('.header-content');
const mainContainer = document.querySelector('main');
const submitBtn = document.querySelector('.submit-btn');
const burguerBtn = document.querySelector('.burguer-menu');
const mainMenu = document.querySelector('.main-menu');
const socialMenu = document.querySelector('.social-menu');
const burguerIcon = document.querySelector('.burguer-icon');

// For update progress bar

const minProgress = 25;
let progress = 0;

// For hide/show header

let lastScrollPosition = window.scrollY;
let scrollDirection = 0;
let scrollDown = false;
let scrollUp = false;

// Functions

const updateProgressBar = () => {
  progress = Math.round(window.scrollY / (document.body.clientHeight - window.innerHeight) * 80) + minProgress;
  progressBar.style.width = progress + '%';
}

const headerToggle = () => {
  if (!scrollDown && scrollDirection > 0 && !headerContent.classList.contains('hidden-header'))
  {
    headerContent.classList.toggle('hidden-header');
    mainContainer.classList.toggle('no-padding-main');
    scrollDown = true;
    scrollUp = false;
  }
  else if (!scrollUp && scrollDirection < 0 && headerContent.classList.contains('hidden-header'))
  {
    headerContent.classList.toggle('hidden-header');
    mainContainer.classList.toggle('no-padding-main');
    scrollDown = false;
    scrollUp = true;
  }
}

document.addEventListener('scroll', () => {
  scrollDirection = window.scrollY - lastScrollPosition;
  lastScrollPosition = window.scrollY;
  
  requestAnimationFrame(() => {
    updateProgressBar();
  });

  requestAnimationFrame(() => {
    headerToggle();
  });
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Coming soon...');
});

// Burguer menu

burguerBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('showMenu');
  socialMenu.classList.toggle('showMenu');

  burguerIcon.classList.toggle('close-icon');
});

const hideMenus = (test) => {
  if (test)
  {
    mainMenu.classList.toggle('showMenu');
    socialMenu.classList.toggle('showMenu');
    burguerIcon.classList.toggle('close-icon');
  }
}

mainMenu.addEventListener('click', () => {
  let test = mainMenu.classList.contains('showMenu');
  hideMenus(test);
});

socialMenu.addEventListener('click', () => {
  let test = socialMenu.classList.contains('showMenu');
  hideMenus(test);
});