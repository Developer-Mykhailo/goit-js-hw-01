function getElementWidth(content, padding, border) {
  let contentwidth = Number.parseInt(content);
  let paddingwidth = Number.parseFloat(padding) * 2;
  let borderwidth = Number.parseFloat(border) * 2;

  let elementWidth = contentwidth + paddingwidth + borderwidth;
  return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
