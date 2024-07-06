// Put import all in here
import Logger from '../Debug/Logger.js';
const logger = new Logger();

$(document).ready(async function () {
  // Get HTML head element
  const head = $('head')[0];
  const classPath = 'tgl/classes/CustomElements/';

  // Create new link element and assign all attributes
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = classPath + 'UIComponents.css';
  head.appendChild(link);
  logger.Log(
    'tgl/classes/CustomElements/UIComponents: Loaded: UIComponents.css'
  );

  // Create new script elements and assign all attributes
  const scriptTags = document.createElement('script');
  scriptTags.setAttribute('src', classPath + 'Tags.js');
  scriptTags.setAttribute('type', 'module');
  head.appendChild(scriptTags);
  logger.Log('tgl/classes/CustomElements/UIComponents: Loaded: Tags.js');

  const scriptButtons = document.createElement('script');
  scriptButtons.setAttribute('src', classPath + 'Buttons.js');
  scriptButtons.setAttribute('type', 'module');
  head.appendChild(scriptButtons);
  logger.Log('tgl/classes/CustomElements/UIComponents: Loaded: Buttons.js');

  const scriptSlideToggles = document.createElement('script');
  scriptSlideToggles.setAttribute('src', classPath + 'SlideToggles.js');
  scriptSlideToggles.setAttribute('type', 'module');
  head.appendChild(scriptSlideToggles);
  logger.Log(
    'tgl/classes/CustomElements/UIComponents: Loaded: SlideToggles.js'
  );

  const scriptSliders = document.createElement('script');
  scriptSliders.setAttribute('src', classPath + 'Sliders.js');
  scriptSliders.setAttribute('type', 'module');
  head.appendChild(scriptSliders);
  logger.Log('tgl/classes/CustomElements/UIComponents: Loaded: Sliders.js');

  const scriptLanguageMenus = document.createElement('script');
  scriptLanguageMenus.setAttribute('src', classPath + 'LanguageMenus.js');
  scriptLanguageMenus.setAttribute('type', 'module');
  head.appendChild(scriptLanguageMenus);
  logger.Log(
    'tgl/classes/CustomElements/UIComponents: Loaded: LanguageMenus.js'
  );
});
