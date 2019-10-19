import { setupInitialPage } from './modules/initial-page-load'
import { createHomeContent } from './modules/home'
import { createMenuContent } from './modules/menu'
import { createContactContent } from './modules/contact'

const setupNavListener = () => {
  const mainContainer = document.querySelector('.main-container');
  const navTab = document.querySelector('.primary-nav');

  navTab.addEventListener('click', e => {
    e.preventDefault();
    
    const elementText = e.target.textContent;
    // Use to prevent generating the same content
    const currentContentClassName = mainContainer.lastChild.className;

    if (elementText) {
      if (elementText === "Home" && currentContentClassName !== "home") {
        mainContainer.removeChild(mainContainer.lastChild);
        mainContainer.appendChild(createHomeContent());

      } else if (elementText === "Menu" && currentContentClassName !== "menu") {
        mainContainer.removeChild(mainContainer.lastChild);
        mainContainer.appendChild(createMenuContent());

      } else if (elementText === "Contact" && currentContentClassName !== "cafe-info") {
        
        mainContainer.removeChild(mainContainer.lastChild);
        mainContainer.appendChild(createContactContent());
      };
    };
  });
};

setupInitialPage();
setupNavListener();