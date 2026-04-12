---
layout: archive
title: "Service & Teaching"
permalink: /teaching/
author_profile: false
---

<div class="aayush-page">
  <section class="section-card page-hero reveal">
    <p class="section-label">Service</p>
    <h2>Peer review, teaching, and support for scientific communities</h2>
    <p class="section-lead">Alongside research and industry work, I have contributed through journal reviewing, laboratory instruction, and mentoring within chemistry and computational science environments.</p>
    <div class="page-meta-list reveal-children">
      <span>5 journals reviewed</span>
      <span>Physical chemistry instruction</span>
      <span>General chemistry teaching</span>
      <span>Undergraduate mentoring</span>
    </div>
  </section>

  <section class="grid-panels">
    <article class="section-card reveal">
      <p class="section-label">Peer Review</p>
      <h2>Reviewer Experience</h2>
      <ul class="note-list reveal-children">
        <li>Journal of Chemical Information and Modeling</li>
        <li>Journal of Physical Chemistry B</li>
        <li>PLOS ONE</li>
        <li>Frontiers in Molecular Biosciences</li>
        <li>Chemical Physics Letters</li>
      </ul>
      <p style="margin-top:1rem;">
        <a href="https://publons.com/researcher/3417909/aayush-gupta/" class="cta-btn">View Publons Profile →</a>
      </p>
    </article>

    <article class="section-card reveal">
      <p class="section-label">Academic</p>
      <h2>Teaching</h2>
      <ul class="note-list reveal-children">
        <li><strong>CHEM 340 &amp; 342 — Physical Chemistry I &amp; II</strong><br>Graduate Teaching Assistant, University of Illinois Chicago</li>
        <li><strong>CHEM 346 — Physical Chemistry Lab</strong><br>Lab Instructor, University of Illinois Chicago</li>
        <li><strong>CHEM 122–125 — General Chemistry</strong><br>Teaching Assistant &amp; Tutor, University of Illinois Chicago</li>
        <li>Mentored undergraduate researchers in computational chemistry techniques.</li>
      </ul>
    </article>
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
