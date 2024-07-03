class Sliders extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Slider element added to page.');
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    const filler = document.createElement('div');
    const handle = document.createElement('div');

    wrapper.setAttribute('name', 'Slider box');
    filler.setAttribute('name', 'Slider filler');
    handle.setAttribute('name', 'Slider handle');

    wrapper.addEventListener('mousedown', (event) => {
      console.log(event.clientX);
      this.addEventListener('mousemove', (event) => {
        console.log(event.clientX);
      });
    });
    wrapper.addEventListener('mouseup', (event) => {
      console.log(event.clientX);
      this.removeEventListener('mousemove');
    });

    let minValue, maxValue, currentValue;
    if (this.hasAttribute('min')) {
      minValue = this.getAttribute('min');
    } else {
      minValue = '0';
    }
    if (this.hasAttribute('max')) {
      maxValue = this.getAttribute('max');
    } else {
      maxValue = '100';
    }
    if (this.hasAttribute('current')) {
      currentValue = this.getAttribute('current');
    } else {
      currentValue = '50';
    }
    let barShape;
    if (this.hasAttribute('bar-shape')) {
      barShape = this.getAttribute('bar-shape');
    } else {
      // rounded, square
      barShape = 'rounded';
    }
    let handleShape;
    if (this.hasAttribute('handle-shape')) {
      handleShape = this.getAttribute('handle-shape');
    } else {
      // rounded, square
      handleShape = 'rounded';
    }
    let size;
    if (this.hasAttribute('size')) {
      size = this.getAttribute('size');
    } else {
      size = '1';
    }
    let theme;
    if (this.hasAttribute('theme')) {
      theme = this.getAttribute('theme');
    } else {
      theme = 'blue';
    }

    wrapper.setAttribute('class', 'slider ' + barShape);
    handle.setAttribute('class', handleShape);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    const defWidth = 100;
    const defHeight = 10;
    const calculatedWidth = defWidth * size;
    const calculatedHeight = defHeight * size;
    const roundedScale = 0.4;

    style.textContent =
      `
      .slider {
        position: inline-block;
        margin: 0;
        padding: 0;
        width: ` +
      calculatedWidth +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        border:1px solid black;
        align-items: center;
        cursor: pointer;
      }
      .filler{
        background:` +
      theme +
      `;
        left:0;
        width: ` +
      currentValue +
      `;
      }
      handle{
        cursor:pointer;
        position:relative;
        width: ` +
      calculatedHeight +
      `px;
        height: ` +
      calculatedHeight +
      `px;
        margin-top:0;
        margin-left:` +
      currentValue +
      `;
      background:red;
      }
      .slider.rounded{
        border-radius: calc(` +
      calculatedWidth +
      `px * ` +
      roundedScale +
      `);
      handle.rounded{
        width: cal(` +
      calculatedHeight +
      ` / 2
      );
        border-radius:50%;
      }
      .square{
        border-radius:0px;
      }
    `;

    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(filler);
    wrapper.appendChild(handle);
  }
}
customElements.define('tgl-slider', Sliders);
