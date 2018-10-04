const footer_html = `
<footer id="footer" class="footer section"> 
      <div class="footer-flex">

        <div class="flex-item">
          <img alt="cobalt logo" width="200" src="images/cobalt/logo_white.png">
        </div>
        <div class="flex-item">
          <div class="inline-block">© Cobalt Intelligence 2018<br>All Rights Resevered<br>Designed by Graceland Research</div>
        </div>
        <div class="flex-item">
          <ul>
            <li><a href="">Site Map</a></li>
            <li><a href="">Term & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="contact.html">Help</a></li>
          </ul> 
        </div>
        <div class="flex-item">
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="portfolio/index.html">Portfolio</a></li>
            <li><a href="contact.html">Careers</a></li>
            <li><a href="contact.html">Contact</a></li>
            
          </ul> 
        </div>
        
        <div class="flex-item">
          <div class="social-list">
            <a href="" class="icon ion-social-twitter"></a>
            <a href="" class="icon ion-social-facebook"></a>
            <a href="" class="icon ion-social-linkedin"></a>
          </div>
        </div>
      </div>
    </footer>
`


customElements.define('footer-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footer_html;
  }
});