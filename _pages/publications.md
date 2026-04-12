---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

<div class="aayush-page">
  <section class="section-card reveal">
    <p class="section-label">Selected Work</p>
    <h2>Publications</h2>
    <ol class="publication-list reveal-children">
      <li>
        <strong>Gupta, Aayush</strong>, Dey, Souvik, Hicks, Alan, and Zhou, Huan-Xiang (2022). Artificial intelligence guided conformational mining of intrinsically disordered proteins. <a href="https://www.nature.com/articles/s42003-022-03562-y#citeas">Communications Biology</a>, 5, 610. <a href="/files/ai_idp.pdf">PDF</a>
      </li>
      <li>
        <strong>Gupta, Aayush</strong> and Zhou, Huan-Xiang (2021). A machine learning-enabled pipeline for large-scale virtual drug screening. <a href="https://pubs.acs.org/doi/10.1021/acs.jcim.1c00710">Journal of Chemical Information and Modeling</a>, 61(9), 4236-4244. <a href="/files/jcim.pdf">PDF</a>
      </li>
      <li>
        <strong>Gupta, Aayush</strong> and Zhou, Huan-Xiang (2020). Profiling SARS-CoV-2 main protease binding to repurposed drugs using molecular dynamics simulations in classical and neural network-trained force fields. <a href="https://pubs.acs.org/doi/abs/10.1021/acscombsci.0c00140">ACS Combinatorial Science</a>, 22(12), 826-832. <a href="/files/acscomb.pdf">PDF</a>
      </li>
      <li>
        <strong>Gupta, Aayush</strong> (2020). Profiling molecular simulations of SARS-CoV-2 main protease binding to repurposed drugs using neural network force fields. <a href="https://chemrxiv.org/engage/chemrxiv/article-details/60c753e33a3df4df8f77fae6">ChemRxiv</a>
      </li>
      <li>
        <strong>Gupta, Aayush</strong> and Arora, Jyotsna S. (2017). DFT evidence of unforeseen bending in linearly fused polycyclic rings of hexasilabenzenoids. <a href="https://www.sciencedirect.com/science/article/abs/pii/S2210271X16304492">Computational and Theoretical Chemistry</a>, 1099, 87-91. <a href="/files/Silicene.pdf">PDF</a>
      </li>
    </ol>
  </section>

  <section class="grid-panels">
    <article class="section-card reveal">
      <p class="section-label">Talks</p>
      <h2>Presentations</h2>
      <ul class="note-list">
        <li>Oral presentation at the ACS Meeting in San Francisco, April 2017.</li>
        <li>Poster presentation at the Annual Midwest Theoretical Conference in East Lansing, June 2017.</li>
      </ul>
    </article>

    <article class="section-card reveal">
      <p class="section-label">Research Direction</p>
      <h2>Recurring themes</h2>
      <ul class="note-list">
        <li>Machine learning guided conformational exploration for difficult biomolecular systems.</li>
        <li>Virtual screening and ranking pipelines grounded in both statistics and physical chemistry.</li>
        <li>Hybrid workflows that connect molecular simulation, representation learning, and experimental decision making.</li>
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

