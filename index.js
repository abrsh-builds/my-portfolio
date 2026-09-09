const typingWords = document.querySelector("#typing");
const words = [
  "Software Engineering Student",
  "Front-End Web Developer",
  "JavaScript Programmer",
  "Future Full-Stack Developer",
];
let wordsIndex = 0;
let deleting = false;
let charIndex = 0;
function typingEffect() {
  const currentWord = words[wordsIndex];

  if (!deleting) {
    let text = currentWord.substring(0, charIndex++);
    typingWords.textContent = text === "" ? "\u200B" : text; //zero width space to help me h2 elemnt preserve height when empty
  } else {
    let text = currentWord.substring(0, charIndex--);
    typingWords.textContent = text === "" ? "\u200B" : text; //zero width space to help me h2 elemnt preserve height when empty
  }

  const speed = !deleting ? 115 : 45;
  if (!deleting && currentWord.length < charIndex) {
    deleting = true;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    wordsIndex = (wordsIndex + 1) % words.length;
  }

  setTimeout(typingEffect, speed);
}

typingEffect();
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const progress = document.querySelectorAll(".progress");
window.addEventListener("scroll", () => {
  const skillSection = document.getElementById("skills");
  const top = skillSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 100 && top > -110) {
    progress.forEach((progress) => {
      progress.style.width = progress.dataset.width + "%";
    });
  } else {
    progress.forEach((progress) => {
      progress.style.width = "0%";
    });
  }
});
