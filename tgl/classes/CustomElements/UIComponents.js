// // Get HTML head element
// const head = $('head')[0];
// // Create new link Element
// const link = document.createElement('link');
// // set the attributes for link element
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = './UIComponents.css';
// // Append link element to HTML head
// head.appendChild(link);

class Tags extends HTMLElement {
  // static observedAttributes = ['color', 'size'];

  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Tag element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'tag');

    let tagType;
    if (this.hasAttribute('tag-type')) {
      tagType = this.getAttribute('tag-type');
    } else {
      tagType = 'script';
    }
    wrapper.setAttribute('class', 'tag ' + tagType);

    // Insert icon
    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = '';
    }

    const img = document.createElement('img');
    img.src = imgUrl;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .tag {
        display:block;
        justify-content: center;
        width: 60px;
        height: 30px;
        border-radius: 40px 15px;
      }
      .script{
        background-color: var(--tag-1);
      }
      .prog-lang {
        background-color: var(--tag-2);
      }
      .docs {
        background-color: var(--tag-3);
      }
      .tools {
        background-color: var(--tag-4);
      }
      img {
        height:100%;
        margin: 0 15px;
      }
    `;
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(img);
  }
}

customElements.define('tgl-tag', Tags);

class TagBars extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('Tag bar element added to page.');
    // Create a shadow root
    // const shadow = this.attachShadow({ mode: 'open' });
    // shadow.appendChild(stylingHelp.content.cloneNode(true));
  }
}

customElements.define('tgl-tag-bar', TagBars);

class Buttons extends HTMLElement {
  // static observedAttributes = ['color', 'size'];

  constructor() {
    super();
  }
  connectedCallback() {
    console.log('Button element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    // button.setAttribute('class', 'tag tag-scr');

    // Attributes check
    // fill, shape, size, disabled, download, type (changes the theme), icon-pos
    let fill;
    if (this.hasAttribute('fill')) {
      fill = this.getAttribute('fill');
    } else {
      //fill, outline, none
      fill = 'fill';
    }
    let shape;
    if (this.hasAttribute('shape')) {
      shape = this.getAttribute('shape');
    } else {
      // rounded, square, circle
      shape = 'rounded';
    }
    let size;
    if (this.hasAttribute('size')) {
      size = this.getAttribute('size');
    } else {
      // 1 2 3 4
      size = '1';
    }
    let disabled;
    if (this.hasAttribute('disabled')) {
      disabled = this.getAttribute('disabled');
    } else {
      // false true
      disabled = false;
    }
    let type;
    if (this.hasAttribute('type')) {
      type = this.getAttribute('type');
    } else {
      // submit/accept, cancle/reject, back, warning, success, danger
      type = '';
    }
    let imgPos;
    if (this.hasAttribute('icon-pos')) {
      imgPos = this.getAttribute('icon-pos');
    } else {
      // start none exclusive end
      imgPos = 'start';
    }
    let content;
    if (this.hasAttribute('content')) {
      content = this.getAttribute('content');
    } else {
      // start none exclusive end
      content = 'BUTTON';
    }
    button.innerText = content;
    button.setAttribute(
      'class',
      fill +
        ' ' +
        shape +
        ' ' +
        size +
        ' ' +
        disabled +
        ' ' +
        type +
        ' ' +
        imgPos
    );

    // let imgUrl;
    // if (this.hasAttribute('img')) {
    //   imgUrl = this.getAttribute('img');
    // } else {
    //   imgUrl = '';
    // }

    // const img = document.createElement('img');
    // img.src = imgUrl;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent =
      `
      button {
        width: calc(80px * ` +
      size +
      `);
        height: calc(30px * ` +
      size +
      `);
      }
      .rounded{
      border-radius:12px;
      }
      .circle{
      border-radius:50%;
        width: calc(80px * ` +
      size +
      `);
        height: calc(80px * ` +
      size +
      `);
      }
      .square{
      border-radius:0px;}
    `;
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(button);
    // button.appendChild(img);
  }
}

customElements.define('tgl-button', Buttons);
