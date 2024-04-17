export default function h(f, props, ...children) {
  let el;
  if (typeof f === "function") {
    return f(props);
  }

  el = document.createElement(f);

  for (const key in props) {
    if (key === "class") {
      el.className = props[key];
    } else if (key === "rickroll") {
      el.addEventListener("click", () =>
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      );
    } else {
      el.setAttribute(key, props[key]);
    }
  }
  for (const child of children) {
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }

  return el;
}
