import bulmaCollapsible from './bulma-collapsible/index.js';

bulmaCollapsible.attach('.is-collapsible', {allowMultiple: 'true'});

document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  const smoothScrollLinks = Array.prototype.slice.call(document.querySelectorAll('.smooth-scroll'), 0);
  if (smoothScrollLinks.length > 0) {
    smoothScrollLinks.forEach( el => {
      el.addEventListener('click', () => {
        let target = document.getElementById(el.dataset.target);
        let docRoot = document.getElementById('root');

        // console.log(window.navigator.appVersion);
        docRoot.scrollTo({top: target.offsetTop - 100, behavior: 'smooth'})
        // target.scrollIntoView({behavior: 'smooth'});
        // docRoot.scrollTop = target.offsetTop - 100;
      });

      el.addEventListener('touchend', () => {
        let target = document.getElementById(el.dataset.target);
        let docRoot = document.getElementById('root');

        // console.log(window.navigator.appVersion);
        docRoot.scrollTo({top: target.offsetTop - 100, behavior: 'smooth'})
        // target.scrollIntoView({behavior: 'smooth'});
        // docRoot.scrollTop = target.offsetTop - 100;
      });
    });
  }
  
});