const allSections = document.querySelectorAll('.section');
const header = document.querySelector('.header-main');
const allItems = document.querySelectorAll('.hide');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hide');
  allItems.forEach(item=>{
    item.classList.remove('hide');
  });
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('hide');

  allItems.forEach(item=>{
    item.classList.add('hide');
  });
});

menuBtn.addEventListener('click', ()=>{
        menu.classList.remove('hide-menu');
});

header.addEventListener('mouseover', ()=>{
    menu.classList.add('hide-menu');
})