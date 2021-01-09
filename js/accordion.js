import bulmaCollapsible from './bulma-collapsible/index.js';



document.addEventListener('DOMContentLoaded', () => {
  bulmaCollapsible.attach('.is-collapsible', {allowMultiple: 'true'});

  console.log("collapsible attached");

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

        //snap scroll because Safari
        docRoot.scrollTo(0, target.offsetTop - 100);
        // docRoot.scrollTo({top: target.offsetTop - 100, behavior: 'smooth'});
      });

      el.addEventListener('touchend', () => {
        let target = document.getElementById(el.dataset.target);
        let docRoot = document.getElementById('root');

        //snap scroll because Safari
        docRoot.scrollTo(0, target.offsetTop - 100);
        // docRoot.scrollTo({top: target.offsetTop - 100, behavior: 'smooth'});
      });
    });
  }
  
  // const body = document.getElementById("body");
  // body.onresize = () => {
  //   const activeCollapsible = Array.prototype.slice.call(document.querySelectorAll('.is-collapsible .is-active'), 0);
  //   if ()
  //   bulmaCollapsible.adjust();
  // };
});