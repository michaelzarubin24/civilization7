export const render = (newComponent, node) => {
  [...node.children].forEach((el) => {
    el.remove();
  });

  node.append(newComponent);
};
