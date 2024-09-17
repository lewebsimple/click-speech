import './style.css'

let isSpeaking = false;

document.querySelectorAll('[data-click-speech]').forEach((element) => {

  element.addEventListener('click', (event) => {
    if (isSpeaking) return;

    const target = event.currentTarget || event.target;
    if (!target) return;
    const before = getComputedStyle(<Element>target, ":before");
    if (before) {
      const top = Number(before.getPropertyValue('top').slice(0, -2));
      const left = Number(before.getPropertyValue('left').slice(0, -2));
      const width = Number(before.getPropertyValue('width').slice(0, -2));
      const height = Number(before.getPropertyValue('height').slice(0, -2));
      const x = (<MouseEvent>event).layerX;
      const y = (<MouseEvent>event).layerY;
      if (x >= left && x <= left + width && y >= top && y <= top + height) {
        const text = element.textContent;
        if (!text) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.onstart = () => {
          isSpeaking = true;
          document.body.classList.add('is-speaking');
          (<Element>target).classList.add('active');
        };
        utterance.onend = () => {
          isSpeaking = false
          document.body.classList.remove('is-speaking');
          (<Element>target).classList.remove('active');
        };
        speechSynthesis.speak(utterance);
      }
    }
  });
});
