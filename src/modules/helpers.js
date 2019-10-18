const createElement = (element, attributes, elementContent) => {
  const newElement = document.createElement(element);

  for (let attribute in attributes) {
    newElement.setAttribute(attribute, attributes[attribute]);
  };

  if (elementContent) {
    newElement.textContent = elementContent;
  }

  return newElement;
};

export { createElement }