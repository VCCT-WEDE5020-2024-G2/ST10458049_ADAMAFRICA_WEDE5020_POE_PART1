class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        this.innerHTML = `
            <header class="header">

                <div class="logo">
                    <a href="index.html">
                        <img src="/assets/logo/adruska_logo_whiteC.png" alt="LOGO" class="hLogo">
                    </a>
                </div>

                <div class="navBtnCon">
                    <img src="/assets/icons/icons8-menu-bar-100.png" alt="" class="openNav" style="width: 10%;">
                </div>

                <div class="navDef">
                    <a href="index.html">HOME</a>
                    <a href="about.html">ABOUT US</a>
                    <div class="dropdownServ">
                        <a href="services.html">SERVICES</a>
                        <div class="servOptions">
                            <button onclick="redirectRule(0)" class="servIndie servType">INDEPENDENT LIVING</button>
                            <button onclick="redirectRule(1)" class="servAssist servType">ASSISTED LIVING</button>
                        </div>
                    </div>
                    <a href="contact.html">CONTACT US</a>
                </div>

            </header>

        `;
    }
}
class Footer extends HTMLElement {
    connectedCallback(){

        this.innerHTML = `
            <footer>
                <div class="innerCon">
                    
                    <img src="/assets/logo/adruska_logo_whiteC.png" alt=""  style="width: 10%;">


                    <div style="display: flex; flex-direction: row; justify-content: space-evenly; width: 50%;">
                        <div class="aboutSec footSections">
                            
                            <a href="about.html">ABOUT US</a>
                        
                        </div>
                        <div class="servSec footSections">
                            
                            <a href="services.html">SERVICES</a>
                        
                        </div>
                        <div class="contactSec footSections">
                            
                            <a href="contact.html">CONTACT US</a>
                        
                        </div>
                    </div>

                </div>
                <p class="cpFoot">Copywrite 2024 | ADRUSKA</p>
            </footer>`;
    }
}

customElements.define('head-component', Header);
customElements.define('foot-component', Footer);