import { isArray } from "../utils/isArray";

// export const render = (node, children) => {
//   // Remove existing children
//   while (node.firstChild) {
//     node.removeChild(node.firstChild);
//   }

//   // Append new children
//   if (!isArray(children)) {
//     node.appendChild(children);
//   } else {
//     children.forEach((child) => {
//       node.appendChild(child);
//     });
//   }
// };
// --------------------------------------------
export const render = (node, children) => {
  [...node.children].forEach((child) => {
    child.remove();
  });

  if (!isArray(children)) return node.append(children);

  for (const child of children) node.append(child);
};
// --------------------------------------------
