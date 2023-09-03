const texts = [
   'Developer',
   'Desinger',
   'Youtuber'
];

const textContainer = document.querySelector('.animation-text');

let textindex = 0;
let charIndex = 0;
const typeTextSpeed = 100;
const pause = 1500;
const deletingTextSpeed = 50;

function typeText() {
   const text = texts[textindex];
   textContainer.textContent = text.slice(0, charIndex++);
   if (charIndex <= text.length) {
      setTimeout(typeText, 100);
   } else {
      setTimeout(eraseText, pause);
   }
};

function eraseText() {
   const text = texts[textindex];
   textContainer.textContent = text.slice(0, charIndex--);
   if (charIndex >= 0) {
      setTimeout(eraseText, deletingTextSpeed);
   } else {
      textindex = (textindex + 1) % text.length;
      charIndex = 0;
      setTimeout(typeText, pause);
   }
};

typeText();
