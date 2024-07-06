import Logger from '../Debug/Logger.js';
const logger = new Logger();

document.addEventListener('DOMContentLoaded', async () => {
  // Get HTML head element
  const head = document.querySelector('head');
  const classPath = 'tgl/classes/Langer/';

  // Create new script elements and assign all attributes
  const scriptLangHand = document.createElement('script');
  scriptLangHand.setAttribute('src', classPath + 'LanguageHandler.js');
  scriptLangHand.setAttribute('type', 'module');
  head.appendChild(scriptLangHand);
  logger.Log('tgl/classes/Langer/Langer: Loaded: LanguageHandler.js');

  customElements.whenDefined('tgl-language-menu').then(async () => {
    await LanguageCheck();
  });
});
