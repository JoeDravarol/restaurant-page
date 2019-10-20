import { createElement } from './helpers'
import { createHomeContent } from './home'

const createHeader = () => {
  const header = createElement('header', { class: 'main-header' })
  const h1 = createElement('h1', { class: 'cafe-title' }, 'Pusheen');
  const span = createElement('span', { class: 'cafe-title__span' }, 'Cat Cafe');
  const img = createElement('img', { class: 'main-header__logo', alt: 'Pusheen Eating Dougnut', 
                                            src: 'https://www.stickpng.com/assets/images/587e32259686194a55adab73.png' 
                                          })

  header.appendChild(h1);
  h1.appendChild(span);
  header.appendChild(img);

  return header;
};

const createNavTab = () => {
  const navbar = createElement('nav', { class: 'primary-nav' })
  const ul = createElement('ul', { class: 'primary-nav__ul' })
  let lis = [];

  for (let i = 0; i < 3; i++) {
    const li = createElement('li', { class: 'primary-nav__li' });
    const a = createElement('a', { href: '#' });

    if (i === 0) {
      a.textContent = 'Home';
      li.id = "home";
    } else if (i === 1) {
      a.textContent = 'Menu';
      li.id = "menu";
    } else {
      a.textContent = 'Contact';
      li.id = "contact";
    }

    li.appendChild(a);
    lis[i] = li;
  }

  lis.forEach( li => {
    ul.appendChild(li);
  });

  navbar.appendChild(ul);

  return navbar;
};

const setupInitialPage = () => {
  const container = document.getElementById('container');
  const mainContainer = createElement('main', { class: 'main-container' })

  container.appendChild( createHeader() );
  container.appendChild(mainContainer);
  mainContainer.appendChild( createNavTab() );
  mainContainer.appendChild( createHomeContent() );
};

export { setupInitialPage }