---
layout: archive
title: "Experience"
permalink: /research/
author_profile: false
---

<div class="aayush-page">
  <section class="section-card reveal">
    <p class="section-label">Industry</p>
    <h2>Recent roles</h2>
    <div class="timeline reveal-children">
      <div class="timeline-item">
        <div class="timeline-header">
          <span class="timeline-role">Scientist II, Machine Learning · Vida Vinci Inc</span>
          <span class="timeline-meta">Boston · Jul 2025 – present</span>
        </div>
        <ul class="note-list">
          <li>Built ML-cheminformatics encoder representations for novel peptide modalities and trained models for experimental ADME property prediction.</li>
          <li>Worked on de novo protein drug binder design using BoltzGen and BindCraft style workflows, alongside Free-Wilson analysis on internal data.</li>
          <li>Implemented uncertainty estimation for compound ranking and selection.</li>
          <li>Built BIBD and CP-SAT based algorithms for optimized, synthesis-ready library design.</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <span class="timeline-role">Senior Scientist, Computational Chemistry · DeepCure Inc</span>
          <span class="timeline-meta">Nov 2023 – May 2025</span>
        </div>
        <ul class="note-list">
          <li>Designed and implemented computational chemistry tooling to review molecules entering synthesis and assay workflows.</li>
          <li>Built an end-to-end MD + ABFE/RBFE platform in OpenMM with in-house Amber preparation.</li>
          <li>Engineered a high-throughput MD screening method that improved throughput by ~300×.</li>
          <li>Advanced internal AI and CompChem platforms to improve generated molecules and docking poses.</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <span class="timeline-role">AI Research Scientist, Computational Chemistry · Exscientia Inc</span>
          <span class="timeline-meta">Mar 2022 – Nov 2023</span>
        </div>
        <ul class="note-list">
          <li>Worked across AI/ML and medicinal chemistry teams to refine ADMET, active learning, and linker generation workflows.</li>
          <li>Led efforts within the PhysicsML team and contributed to the PhysicsML product direction.</li>
          <li>Helped deliver EXS-NNP, a GNN-based neural potential that outperformed ANI on coupled-cluster theory data.</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <span class="timeline-role">Research Intern · Schrödinger Inc</span>
          <span class="timeline-meta">New York City · Summer 2019</span>
        </div>
        <ul class="note-list">
          <li>Evaluated ANI neural network potentials for small-molecule crystal polymorph prediction with DFT-like accuracy at force-field speed.</li>
          <li>Analyzed potential energy surfaces for 100 crystal systems and 500+ polymorph structures.</li>
          <li>Reported 98% DFT-to-ANI correlation in prediction quality.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="grid-panels">
    <article class="section-card reveal">
      <p class="section-label">Doctoral Research</p>
      <h2>PhD at UIC</h2>
      <ul class="note-list">
        <li>Implemented a generative deep learning model to guide conformational sampling of intrinsically disordered proteins and accelerate MD workflows.</li>
        <li>Developed a machine-learning enabled virtual screening pipeline against RPN11, a breast cancer drug target.</li>
        <li>Designed hybrid AI and molecular simulation workflows for SARS-CoV-2 main protease.</li>
        <li>Explored electron transport in peptide helices and other physics-rich modeling problems under Prof. Huan-Xiang Zhou.</li>
      </ul>
      <div class="inline-link-row">
        <a href="https://github.com/aaayushg/generative_IDPs">IDP project</a>
        <a href="https://github.com/aaayushg/RPN11_inhibitors">RPN11 project</a>
      </div>
    </article>

    <article class="section-card reveal">
      <p class="section-label">Earlier Research</p>
      <h2>Foundation across chemistry and materials</h2>
      <ul class="note-list">
        <li>UIC research assistant work with Prof. Petr Kral on quantum chemistry methods including DFT, TDDFT, QM/MM, AIMD, and related analysis.</li>
        <li>MIPT work with Prof. Artem Oganov on USPEX-based prediction of stable and metastable europium nitride structures.</li>
        <li>IISc molecular dynamics simulations on zeolite MOFs and adsorption behavior of warfare-agent-like molecules.</li>
        <li>BARC and CSIR projects on porous carbon nitride catalysis and reaction isomerization pathways.</li>
        <li>ICT undergraduate work spanning dye prediction, cellulose chemistry, and silicene modeling.</li>
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
