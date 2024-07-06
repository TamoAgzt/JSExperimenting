// let initData;
// $(document).ready(async function () {
//   initData = await InitializeJSONData();
//   console.log(data.Icons.Icon.tools.vsc);
// });
import Logger from '../Debug/Logger.js';
const logger = new Logger();

class Tags extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    const icon = document.createElement('div');
    wrapper.setAttribute('class', 'tag');
    wrapper.setAttribute('name', 'Tag box');
    icon.setAttribute('name', 'Tag icon');

    let tagType;
    if (this.hasAttribute('tag-type')) {
      tagType = this.getAttribute('tag-type');
    } else {
      tagType = 'script';
    }
    let size;
    if (this.hasAttribute('size')) {
      size = this.getAttribute('size');
    } else {
      size = '1';
    }
    wrapper.setAttribute('class', 'tag ' + tagType);

    // Insert icon
    let iconUrl;
    if (this.hasAttribute('tag-icon')) {
      iconUrl = this.getAttribute('tag-icon');
    } else {
      iconUrl = '';
    }

    // icon.innerHTML = data.Icons.Icon.tagType.iconUrl;

    logger.Log(
      'tgl/classes/CustomElements/Tags.Tags: Tag element added to page: ' +
        iconUrl +
        ' | ' +
        tagType
    );

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');

    const defWidth = 60;
    const defHeight = 30;
    const calculatedWidth = defWidth * size;
    const calculatedHeight = defHeight * size;
    const roundedScale = 0.4;

    style.textContent =
      `
      .tag {
        display:block;
        justify-content: center;
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        border-radius: 40px 15px;
      }
        .script {
  background-color: var(--tag-1);
}
.prog {
  background-color: var(--tag-2);
}
.docs {
  background-color: var(--tag-3);
}
.tools {
  background-color: var(--tag-4);
}

      icon {
        height:100%;
        margin: 0 15px;
      }
    `;
    shadow.appendChild(style);
    logger.Log(
      'tgl/classes/CustomElements/Tags.Tags: Tag style: ' + style.isConnected
    );
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
  }
}
customElements.define('tgl-tag', Tags);

class TagBars extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    logger.Log(
      'tgl/classes/CustomElements/Tags.TagBars: Tag bar element added to page.'
    );
    // Create a shadow root
    // const shadow = this.attachShadow({ mode: 'open' });
    // shadow.appendChild(stylingHelp.content.cloneNode(true));
  }
}
customElements.define('tgl-tag-bar', TagBars);
