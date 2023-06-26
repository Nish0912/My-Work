const strings = ["Full Stack Developer", "MERN Stack Developer"];
const textElement = document.querySelector(".text");
let stringIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < strings[stringIndex].length) {
    textElement.textContent += strings[stringIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = strings[stringIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    stringIndex++;
    if (stringIndex >= strings.length) {
      stringIndex = 0;
    }
    setTimeout(type, 100);
  }
}

type();