import { createElement } from './helpers'

const createHomeContent = () => {
  const section = createElement('section', { class: 'home' });
  const h2 = createElement('h2', { class: 'home__title' }, 'Welcome to the puuuuurfect paradise cafe!');
  const img = createElement('img', { class: 'home__image', 
                                     src: 'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe11.jpg',
                                     alt: 'The interior view of the cafe'
                                    })
  let paragraphs = [];
  const paragraphTexts = [
    `We are the <strong>world's 1st Pusheen Cafe</strong> in Singapore.`,
    `The Pusheen Cafe is opening on the 6th of January 2019, and for a limited time till March
    2019. Come visit us when you get the chance!`, 
    `The dishes were designed by food artist and Instagram star <a class="home__instagram-link"
    href="https://www.instagram.com/littlemissbento/?hl=en">@littlemissbento</a> and Kumoya kitchen team.</p>`
    ];

  paragraphTexts.forEach( (text, index) => {
    const p = createElement('p', { class: 'home__info' });

    if (index === 1) {
      p.textContent = text;
    } else {
      p.insertAdjacentHTML('beforeend', text);
    }
    
    paragraphs[index] = p;
  });


  section.appendChild(h2);

  paragraphs.forEach( (p, index) => {
    if (index === 1) {
      section.appendChild(img);
    };
    section.appendChild(p);
  });

  return section;
};

export { createHomeContent }