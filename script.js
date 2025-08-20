// 行動導覽切換
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const shown = getComputedStyle(nav).display !== 'none';
    nav.style.display = shown ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!shown));
  });
}
