// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';

interface IAvatar {
}

export class Avatar extends Block<IAvatar> {
  constructor() {
    super({
      events: {
        click: (e: any) => {
          const modalWindow = document.querySelector("#profilemodal");
          modalWindow?.classList.add("hfbdjfhwegblfjhegragwbJYGERAYI");
          console.log("A V A T A R", modalWindow);
        },
      }
    });
  }

  render() {
    // language=hbs
    return `
    <div class="profile__circle">

    <?xml version="1.0" ?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="800px" height="800px" viewBox="0 0 128 128" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#f2bc0f;}.cls-2,.cls-8{fill:#ffffff;}.cls-2{opacity:0.3;}.cls-3{fill:#515570;}.cls-4{fill:#393c54;}.cls-5{fill:#ffd8c9;}.cls-10,.cls-12,.cls-6,.cls-7,.cls-9{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-6{stroke:#393c54;}.cls-10,.cls-7,.cls-9{stroke:#515570;}.cls-7{opacity:0.1;}.cls-9{opacity:0.4;}.cls-11{fill:#f8dc25;}.cls-12{stroke:#fbc0aa;}</style></defs><title/><circle class="cls-1" cx="64" cy="64" r="60"/><circle class="cls-2" cx="64" cy="64" r="48"/><path class="cls-3" d="M64,124.1a59.78,59.78,0,0,0,40-15.28l-2.39-5.68c-1.71-4-6.22-6.64-11.29-6.64H37.69c-5.07,0-9.58,2.66-11.29,6.64L24,108.82A59.78,59.78,0,0,0,64,124.1Z"/><path class="cls-4" d="M95.25,60.43c0,4.38.45,7.93-3.93,7.93a7.93,7.93,0,1,1,0-15.86C95.7,52.5,95.25,56.05,95.25,60.43Z"/><path class="cls-4" d="M44.61,60.43a7.93,7.93,0,0,1-7.93,7.93c-4.38,0-3.93-3.55-3.93-7.93s-.45-7.93,3.93-7.93A7.93,7.93,0,0,1,44.61,60.43Z"/><path class="cls-5" d="M64,95.37A28.31,28.31,0,0,1,35.68,67.05V52.43c0-15.64,12.68-25.32,28.32-25.32s28.32,9.68,28.32,25.32V67.05A28.31,28.31,0,0,1,64,95.37Z"/><path class="cls-6" d="M56.41,82.07A.91.91,0,0,1,57.25,81h13.5a.91.91,0,0,1,.84,1.07"/><path class="cls-7" d="M90.91,67A13.34,13.34,0,0,0,79.09,80.34v4.49"/><path class="cls-7" d="M37.09,67A13.34,13.34,0,0,1,48.91,80.34v4.49"/><path class="cls-4" d="M35,67.53l27.68,6.22a6.14,6.14,0,0,0,2.63,0L93,67.53V22.7a1,1,0,0,0-1.6-.8l-10,7.45s-6.12-5.8-17.39-5.8A27.83,27.83,0,0,0,45.92,30l-9.27-7.9a1,1,0,0,0-1.65.76Z"/><path class="cls-8" d="M46.13,57.75,55.88,60a5,5,0,1,1-9.75-2.21Z"/><circle class="cls-4" cx="51" cy="59.02" r="2.72"/><line class="cls-9" x1="56.36" x2="45.64" y1="60.07" y2="57.63"/><line class="cls-10" x1="56.36" x2="45.64" y1="59.07" y2="56.63"/><path class="cls-11" d="M78,111.82a.5.5,0,0,0-.26-.93H69.65a.7.7,0,0,0-.65.43h0a3.15,3.15,0,0,1-2.3,1.89l-1,.21a.36.36,0,0,1-.43-.29L65,111.72a.08.08,0,0,0-.15,0l-.28.66a2.37,2.37,0,0,0-1.06,0l-.28-.66a.08.08,0,0,0-.15,0l-.27,1.41a.36.36,0,0,1-.43.29l-1-.21a3.15,3.15,0,0,1-2.3-1.89h0a.7.7,0,0,0-.65-.43H50.29a.5.5,0,0,0-.26.93,5.67,5.67,0,0,1,2.85,4.72.49.49,0,0,0,.56.49,13.27,13.27,0,0,1,5.89.46,9.19,9.19,0,0,1,4.26,3.41.5.5,0,0,0,.82,0,9.19,9.19,0,0,1,4.26-3.41,13.27,13.27,0,0,1,5.89-.46.49.49,0,0,0,.56-.49A5.67,5.67,0,0,1,78,111.82Z"/><path class="cls-8" d="M81.87,57.75,72.12,60a5,5,0,1,0,9.75-2.21Z"/><circle class="cls-4" cx="77.06" cy="59.01" r="2.63"/><line class="cls-9" x1="71.64" x2="82.36" y1="60.07" y2="57.63"/><line class="cls-10" x1="71.64" x2="82.36" y1="59.07" y2="56.63"/><path class="cls-4" d="M93,96.5V67l-5,1.36L85.25,80.65a15.8,15.8,0,0,1-7.39,10.16l-2.14.93a29.26,29.26,0,0,1-23.44,0l-2.14-.93a15.8,15.8,0,0,1-7.39-10.16L40,68.36,35,67V96.5l-16.46,6.64,1.37,1.55a60.21,60.21,0,0,0,17.24,13l19.35-13A14,14,0,0,1,64,102.5a16.37,16.37,0,0,1,7.5,1.81l19.37,13.34a60.39,60.39,0,0,0,17-12.72c.56-.61,1.1-1.21,1.61-1.79Z"/><path class="cls-12" d="M60,90a7,7,0,0,1,8,0"/><path class="cls-3" d="M64,63.12v8.21a.51.51,0,0,1-.63.49l-3.62-1a.51.51,0,0,1-.31-.71l3.61-7.23A.5.5,0,0,1,64,63.12Z"/></svg>

  </div>
    `;
  }
}
