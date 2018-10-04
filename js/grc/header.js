const header_html = `
    <!-- Sidebar Menu-->
    <div>
      <div class="menu"> 
        <span class="close-menu icon-cross2 right-boxed"></span>
        <div class="menu-lang right-boxed">
          <p href="" class="active">Welcome</p>
        </div>
        <ul class="menu-list right-boxed">
          <li class="active">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="portfolio/index.html">Portfolio</a>
            <ul>
              <li><a href="portfolio/project.html">Smart Reef</a></li>
              <li><a href="portfolio/project.html">Galaxy Exercise Device</a></li>
              <li><a href="portfolio/project.html">HL3</a></li>
              <li><a href="portfolio/project.html">4-D Data Visualization</a></li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Careers</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <div class="menu-footer right-boxed">
          <div class="social-list">
            <a href="" class="icon ion-social-twitter"></a>
            <a href="" class="icon ion-social-facebook"></a>
            <a href="" class="icon ion-social-linkedin"></a>
          </div>
          <div class="copy">© Cobalt Intelligence 2018. All Rights Reseverd<br> Designed by Graceland Research</div>
        </div>
      </div>

      <!-- Navbar -->

      <header class="navbar boxed js-navbar">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a class="brand" href="index.html">
          <img alt="cobalt logo" src="images/cobalt/logo_white.png" height="100">
          <div class="brand-info">
            <div class="brand-name"></div>
            <div class="brand-text"></div>
          </div>
        </a>

        <div class="social-list hidden-xs">
          <a href="" class="icon ion-social-twitter"></a>
          <a href="" class="icon ion-social-facebook"></a>
          <a href="" class="icon ion-social-linkedin"></a>
        </div>

        <div class="navbar-spacer hidden-sm hidden-xs"></div>

        <address class="navbar-address hidden-sm hidden-xs"><span class="text-dark">businessplans@cobaltintel.com</span></address>
      </header>
    </div>
`


customElements.define('header-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = header_html;
  }
});