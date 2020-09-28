const text = 'PARK BYUNG HO !'

let index = 0;

function writeText() {
  const main = document.getElementById('main');
  main.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
    clearInterval(animate);
  }
}

let animate = setInterval(writeText,100);