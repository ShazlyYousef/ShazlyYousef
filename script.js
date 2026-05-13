const typingText = document.getElementById('typing-text');
const words = ["Shazly Youssef", "Red Teamer", "Pentester", "Bug Hunter"];
let wordIdx = 0;
let charIdx = 0;

function type() {
    if (charIdx < words[wordIdx].length) {
        typingText.textContent += words[wordIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIdx > 0) {
        typingText.textContent = words[wordIdx].substring(0, charIdx - 1);
        charIdx--;
        setTimeout(erase, 100);
    } else {
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, 500);
    }
}

const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

document.addEventListener('DOMContentLoaded', type);