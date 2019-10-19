import { createElement } from './helpers'

const createFoodCard = (src, alt, h3Content, pContent) => {
  const foodCard = createElement('section', { class: 'food-card' });
  const img = createElement('img', { class: 'food-card__img', src, alt });
  const h3 = createElement('h3', { class: 'food-card__title'}, h3Content);
  const p = createElement('p', { class: 'food-card__description' }, pContent);

  foodCard.appendChild(img);
  foodCard.appendChild(h3);
  foodCard.appendChild(p);

  return foodCard;
};

const createMenuContent = () => {
  const section = createElement('section', { class: 'menu' });
  let menuItems = [
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe1.jpg',
      'Green Tea Buns',
      'Pusheen Purrfect Special Green Tea Buns',
      'Cute trio of green tea paste steamed buns. Remember to bring home the limited-edition display card.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe2.jpg',
      'Creamy Japanese Rice',
      'Pusheen Cat Nap Creamy Japanese Rice',
      'Japanese bamboo charcoal rice with beetroot cream sauce, blanketed by a soft egg crepe, with crispy Japanese karaage chicken, star-shaped carrots & cheese, and fresh garden salad.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe3.jpg',
      'Truffle Aglio Olio Pasta',
      'Pusheen-Loves-Pasta Truffle Aglio Olio Truffle Aglio Oli',
      'Multi-coloured Tagliatelle pasta with assorted mushroom, turkey bacon, fish-shaped carrots, cat-shaped cheese and fresh garden salad. Vegetarian option available.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe4.jpg',
      'Deep Fried Prawn Burger',
      'Pusheen In-a-Bun Ebi Burger',
      'Ebi burger with Pusheen Bamboo Charcoal mantou, with goma mayo sauce, cheddar, lettuce, tomato, french fries, and fresh garden salad. Vegetarian option available.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe5.jpg',
      'Fruitcake Burger',
      'Pusheen Double Delight Fruitcake Burger',
      'Super-stacked fruitcake burger with a 3D Pusheen macaron, biscuit “fries”, “ketchup” meringue kiss, fresh cream with berries, and fluffy cotton candy.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe6.jpg',
      'Chocolate Ball',
      'Pusheen Purrfect Surprise Choco Ball-of-Yum',
      'Pour steamed milk to reveal the delicious surprise: marshmallow, candies, mini swiss roll, meringue kisses, colourful cereal, fresh berries and fruits, with special double swirl lychee Hokkaido soft serve.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe7.jpg',
      'Rainbow Parfait',
      'Pusheen Cat-on-a-Cloud Floating Joy Parfait',
      'A double swirl lychee Hokkaido soft serve with a meringue cloud, Pusheen cookie and macaron, mini swiss roll with fresh cream, pink lollipop, vanilla sable, meringue kisses, fresh strawberries, with a cotton candy backdrop.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe8.jpg',
      'Strawberry Cheesecake Frappe',
      'Strawberry Cheesecake Frappe',
      'Topped with a generous amount of cream and pink pearl bits. Served in a cute Pusheen face cup.'
    ),
    createFoodCard(
      'https://danielfooddiary.com/wp-content/uploads/2018/12/pusheencafe9.jpg',
      'Belgium Hot Chocolate',
      'Meow Meow Hot Chocolate',
      'Kumoya’s popular Belgium hot chocolate served with a cute little cookie and Pusheen prints.'
    )
  ];

  menuItems.forEach( item => {
    section.appendChild(item);
  });

  return section;
};

export { createMenuContent }