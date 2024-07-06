import Logger from '../Debug/Logger.js';
const logger = new Logger();

class LanguageMenus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('name', 'Language box');
    wrapper.setAttribute('class', 'language-options');
    let languages = this.getAttribute('languages');
    let languagesArray = languages.split(' ');

    languagesArray.forEach((languageCode) => {
      let input = document.createElement('input');
      let label = document.createElement('label');

      input.setAttribute('name', `languageCode`);
      input.setAttribute('id', `${languageCode.toUpperCase()}`);
      input.setAttribute('value', `${languageCode.toUpperCase()}`);
      input.setAttribute('type', 'radio');
      label.setAttribute('for', `${languageCode}`);
      label.textContent = languageCode.toUpperCase();

      input.setAttribute('class', 'language-button');
      label.setAttribute('class', 'language-label');

      label.addEventListener('click', () => {
        input.checked = true;
        input.dispatchEvent(new Event('change'));
      });

      wrapper.appendChild(label);
      wrapper.appendChild(input);
    });
    logger.Log(
      'tgl/classes/CustomElements/LanguageMenus.LanguageMenus: Language menu element added to page: ' +
        languages
    );

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    style.textContent = `
      .language-options {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 10px;
      }

      .language-options input {
        display: none;
      }

      .language-options label {
        border-radius: 4px;
        margin: 5px 0;
        height: 30px;
        line-height: 30px;
        background-color: #c7c7c780;
        border-style: none;
        text-align: center;
      }

      .language-options label:hover {
        background-color: #f1f1f1;
        cursor: pointer;
      }
    `;
    shadow.appendChild(style);
    logger.Log(
      'tgl/classes/CustomElements/LanguageMenus.LanguageMenus: Language menu style: ' +
        style.isConnected
    );
    shadow.appendChild(wrapper);
  }
}
customElements.define('tgl-language-menu', LanguageMenus);
