import './style.css'

document.querySelectorAll('[data-click-speech]').forEach((element) => {

  element.addEventListener('click', () => {
    const text = element.textContent;
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    speechSynthesis.speak(utterance);
  });

});