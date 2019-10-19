import { createElement } from './helpers'

const createLocationSection = () => {
  const section = createElement('section', { class: 'location' });
  const h3 = createElement('h3', { class: 'location__title' }, 'Location');
  const p = createElement('p', { class: 'location__address' }, '8 Jalan Klapa, Singapore 199320'); 

  section.appendChild(h3);
  section.appendChild(p);

  return section;
};

const createOpeningTimeSection = () => {
  const section = createElement('section', { class: 'opening-hours' });
  const h3 = createElement('h3', { class: 'opening-hours__title' }, 'Opening Hours');
  const ul = document.createElement('ul');
  const listContent = [
    `<span class="opening-hours__day">Sunday</span>: 12-9pm`,
    `<span class="opening-hours__day">Monday</span>: Closed`,
    `<span class="opening-hours__day">Tuesday</span>: 12-9pm`,
    `<span class="opening-hours__day">Wednesday</span>: 12-9pm`,
    `<span class="opening-hours__day">Thursday</span>: 12-9pm`,
    `<span class="opening-hours__day">Friday</span>: 12-10:30pm`,
    `<span class="opening-hours__day">Saturday</span>: 12-10:30pm`,
  ]
  
  for (let i = 0; i < 7; i++) {
    const li = createElement('li', { class: 'opening-hours__list-time' });

    li.insertAdjacentHTML('beforeend', listContent[i]);
    ul.appendChild(li);
  }

  section.appendChild(h3);
  section.appendChild(ul);

  return section;
};

const createContactFormSection = () => {
  const section = createElement('section', { class: 'contact' });
  const h3 = createElement('h3', { class: 'contact__title' }, 'Contact Us');
  const form = createElement('form', { class: 'contact-form', action: '' })
  const input = createElement('input', { class: 'contact-form__input contact-form__input--email', 
                                         type: 'email', placeholder: 'example@examplemail.com',
                                         required: true 
                                        });
  const textarea = createElement('textarea', { class: 'contact-form__textarea', placeholder: 'Message' });
  const button = createElement('button', { class: 'contact-form__btn' }, 'Send');

  form.appendChild(input);
  form.appendChild(textarea);
  form.appendChild(button);

  section.appendChild(h3);
  section.appendChild(form);

  return section;
};

const createContactContent = () => {
  const section = createElement('section', { class: 'cafe-info' });
  const img = createElement('img', { class: 'cafe-info__image',
                                     src: 'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe12.jpg',
                                     alt: 'Cafe storefront'
                                    });
  
  section.appendChild(img);
  section.appendChild( createLocationSection() );
  section.appendChild( createOpeningTimeSection() );
  section.appendChild( createContactFormSection() );

  return section;
};

export { createContactContent };