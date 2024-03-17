const colorInput = document.getElementById('colorInput');
const changeColorBtn = document.getElementById('changeColor');
const clearColorBtn = document.getElementById('clearColor');
const defaultColorBtn = document.getElementById('defaultColor');

function showColorError() {
  alert("The entered color does not exist!");
}

changeColorBtn.addEventListener('click', () => {
  const color = colorInput.value.toLowerCase(); // Convert to lowercase for case-insensitive check

  // Basic check for valid color formats (hex, rgb, named colors)
  if (!/^(#?[0-9a-f]{3}|#?[0-9a-f]{6}|rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)|[a-zA-Z]+)$/.test(color)) {
    showColorError();
    return;
  }

  document.body.style.backgroundColor = color;
});

clearColorBtn.addEventListener('click', () => {
  colorInput.value = '';
});

defaultColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#fff';
});
