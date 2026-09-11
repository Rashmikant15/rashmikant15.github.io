(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('rk-theme');
  if(saved){root.dataset.theme=saved}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){root.dataset.theme='dark'}
  const theme=document.querySelector('[data-theme-toggle]');
  if(theme){theme.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem('rk-theme',next);theme.setAttribute('aria-label',next==='dark'?'Switch to light mode':'Switch to dark mode')})}
  const menu=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
})();
