---
layout: archive
title: "Skills"
permalink: /skills/
author_profile: false
---

<div class="aayush-page">
  <section class="grid-panels">
    <article class="section-card reveal">
      <p class="section-label">AI and Data</p>
      <h2>Modeling toolkit</h2>
      <div class="tag-list reveal-children">
        <span class="skill-pill">Equivariant Graph Neural Networks</span>
        <span class="skill-pill">Deep Learning</span>
        <span class="skill-pill">GANs</span>
        <span class="skill-pill">Diffusion Models</span>
        <span class="skill-pill">LLMs</span>
        <span class="skill-pill">CNNs</span>
        <span class="skill-pill">RNNs</span>
        <span class="skill-pill">Transformers</span>
        <span class="skill-pill">Clustering</span>
        <span class="skill-pill">SVM</span>
        <span class="skill-pill">Random Forests</span>
      </div>
    </article>

    <article class="section-card reveal">
      <p class="section-label">Python Stack</p>
      <h2>Libraries I use often</h2>
      <div class="tag-list reveal-children">
        <span class="skill-pill">PyTorch</span>
        <span class="skill-pill">TensorFlow</span>
        <span class="skill-pill">Keras</span>
        <span class="skill-pill">Pandas</span>
        <span class="skill-pill">NumPy</span>
        <span class="skill-pill">SciPy</span>
        <span class="skill-pill">Scikit-learn</span>
        <span class="skill-pill">Matplotlib</span>
        <span class="skill-pill">Seaborn</span>
      </div>
    </article>
  </section>

  <section class="grid-panels">
    <article class="section-card reveal">
      <p class="section-label">Scientific Computing</p>
      <h2>Engineering and systems</h2>
      <ul class="note-list">
        <li>Programming in Python, Bash, and Tcl/Tk with day-to-day HPC scripting and workflow automation.</li>
        <li>Comfortable with AWS, Linux systems, Git, DVC, SLURM, and PBS environments.</li>
        <li>Built and administered LDAP-based client-server infrastructure for a 400 TB file server setup during doctoral research.</li>
      </ul>
    </article>

    <article class="section-card reveal">
      <p class="section-label">Molecular Tooling</p>
      <h2>Simulation and analysis platforms</h2>
      <div class="tag-list reveal-children">
        <span class="skill-pill">OpenMM</span>
        <span class="skill-pill">AMBER</span>
        <span class="skill-pill">NAMD</span>
        <span class="skill-pill">Gromacs</span>
        <span class="skill-pill">Desmond</span>
        <span class="skill-pill">Psi4</span>
        <span class="skill-pill">Gaussian16</span>
        <span class="skill-pill">Orca</span>
        <span class="skill-pill">VASP</span>
        <span class="skill-pill">Quantum Espresso</span>
        <span class="skill-pill">OEDock</span>
        <span class="skill-pill">Smina</span>
        <span class="skill-pill">AutoDock Vina</span>
        <span class="skill-pill">Glide</span>
        <span class="skill-pill">GOLD</span>
        <span class="skill-pill">DiffDock</span>
      </div>
    </article>
  </section>

  <section class="grid-panels">
    <article class="section-card reveal">
      <p class="section-label">Cheminformatics and APIs</p>
      <h2>Production-friendly interfaces</h2>
      <div class="tag-list reveal-children">
        <span class="skill-pill">RDKit</span>
        <span class="skill-pill">OpenEye Toolkit</span>
        <span class="skill-pill">Chemaxon</span>
        <span class="skill-pill">OpenBabel</span>
        <span class="skill-pill">PaDel</span>
        <span class="skill-pill">ProLIF</span>
        <span class="skill-pill">ASE</span>
        <span class="skill-pill">MDTraj</span>
        <span class="skill-pill">MDAnalysis</span>
        <span class="skill-pill">BioPython</span>
      </div>
    </article>

    <article class="section-card reveal">
      <p class="section-label">Structural Biology</p>
      <h2>Adjacent biophysics expertise</h2>
      <ul class="note-list">
        <li>X-ray crystallography and cryo-EM structure analysis for protein-ligand complexes.</li>
        <li>Homology modeling and protein preparation.</li>
        <li>Binding site analysis and structure-activity relationships.</li>
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
