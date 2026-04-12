---
layout: archive
title: "Aayush Gupta, PhD"
permalink: /cv/
redirect_from:
  - /resume
author_profile: false
---

{% include base_path %}

<div class="aayush-page">
  <section class="section-card page-hero reveal">
    <p class="section-label">Resume</p>
    <h2>Curriculum Vitae</h2>
    <p class="section-lead">A concise overview of my academic and professional background. Download or view the full document below.</p>
    <div class="page-meta-list reveal-children">
      <span>Industry and academic experience</span>
      <span>Computational chemistry and ML</span>
      <span>Publications, talks, and teaching</span>
    </div>
    <div class="cta-row">
      <a href="{{ base_path }}/files/Aayush_Resume.pdf" target="_blank" class="cta-btn">Open PDF ↗</a>
      <a href="{{ base_path }}/files/Aayush_Resume.pdf" download class="cta-btn cta-btn--outline">Download PDF ↓</a>
      <a href="mailto:aayush0gupta@gmail.com" class="cta-btn cta-btn--outline">Contact →</a>
    </div>
  </section>

  <section class="section-card reveal resume-shell">
    <iframe
      src="{{ base_path }}/files/Aayush_Resume.pdf"
      class="resume-frame reveal"
      title="Aayush Gupta – Resume"
      style="width:100%;height:800px;border:none;border-radius:8px;">
    </iframe>
  </section>
</div>

<script>
;(function(){
  var targets = document.querySelectorAll('.reveal, .reveal-children');
  if (!targets.length) return;
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function(t){ io.observe(t); });
  } else {
    targets.forEach(function(t){ t.classList.add('is-visible'); });
  }
})();
</script>
