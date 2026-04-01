/* components.js — shared nav + footer for all Null&Void pages */

(function() {

  var NAV = `
<nav>
  <a href="index.html" class="logo">
    <div class="logo-icon">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.85)"/>
        <rect x="11" y="2" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.5)"/>
        <rect x="2" y="11" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.5)"/>
        <rect x="11" y="11" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.85)"/>
      </svg>
    </div>
    <div>
      <div class="logo-name">Null<span>&amp;Void</span></div>
      <div class="logo-sub">Analytics Inc.</div>
    </div>
  </a>
  <ul>
    <li class="has-dropdown">
      <a href="#">Services</a>
      <div class="dropdown">
        <div class="dropdown-inner">
          <a href="healthcare.html">🏥 Healthcare Analytics</a>
          <a href="justice.html">⚖️ Justice &amp; Safety</a>
          <a href="first-nations.html">🦅 First Nations</a>
          <a href="transit.html">🚇 Transit Analytics</a>
          <a href="power-platform.html">⚡ Power Platform</a>
        </div>
      </div>
    </li>
    <li class="has-dropdown">
      <a href="#">Company</a>
      <div class="dropdown">
        <div class="dropdown-inner">
          <a href="about.html">👤 About</a>
          <a href="portfolio.html">📁 Portfolio</a>
          <a href="blog.html">✍️ Blog</a>
          <a href="data-governance.html">🔒 Data Governance</a>
          <a href="privacy.html">🔐 Privacy Policy</a>
        </div>
      </div>
    </li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="mailto:hello@nullandvoid.ca" class="nav-pill">Start a project</a></li>
  </ul>
</nav>`;

  var FOOTER = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-name">Null<span>&amp;Void</span> Analytics Inc.</div>
        <p>BC-based analytics consulting delivering data intelligence to public and private sector clients across British Columbia. Microsoft Azure &amp; Power BI certified.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="healthcare.html">Healthcare Analytics</a></li>
          <li><a href="justice.html">Justice &amp; Safety</a></li>
          <li><a href="first-nations.html">First Nations</a></li>
          <li><a href="transit.html">Transit Analytics</a></li>
          <li><a href="power-platform.html">Power Platform</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="data-governance.html">Data Governance</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Procurement</h5>
        <ul>
          <li><a href="https://bcbid.gov.bc.ca" target="_blank">BC Bid</a></li>
          <li><a href="https://canadabuys.canada.ca" target="_blank">Canada Buys</a></li>
          <li><a href="https://merx.com" target="_blank">MERX</a></li>
          <li><a href="mailto:rfp@nullandvoid.ca">Submit an RFP</a></li>
          <li><a href="mailto:hello@nullandvoid.ca">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Null&amp;Void Analytics Inc. &middot; Langley, BC &middot; Federal Corp. &middot; GST Registered</span>
      <span class="mono-tag">Azure Certified &middot; Power BI Partner</span>
    </div>
  </div>
</footer>`;

  function inject() {
    var navEl = document.getElementById('nav-root');
    var footerEl = document.getElementById('footer-root');
    if (navEl) navEl.innerHTML = NAV;
    if (footerEl) footerEl.innerHTML = FOOTER;

    // Reveal animation
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });

    // Highlight active nav link
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(function(a) {
      var href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.style.color = 'var(--blue-light)';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
