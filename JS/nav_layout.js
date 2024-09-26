class Nav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        this.innerHTML = `
            <nav class="navDisplay">
                <div class="navSection">
                    <div class="closeSec">                    
                        <img src="/assets/icons/Close-100.png" alt="" class="closeNav" style="width:5%;">
                    </div>
                    <div class="innerNavCon">
                        <a href="index.html">HOME</a>
                        <a href="about.html">ABOUT US</a>
                        <a href="services.html">SERVICES</a>
                        <a href="contact.html">CONTACT US</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-component', Nav);