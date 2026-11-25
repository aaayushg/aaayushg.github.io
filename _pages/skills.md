---
title: "Capabilities"
permalink: /skills/
description: "Technical capabilities across generative modeling, deep learning, molecular simulation, cheminformatics, and HPC infrastructure."
---

<header class="page-header">
  <div class="container">
    <h1>Capabilities</h1>
    <p class="page-header__lead">
      Tools, modeling methods, and scientific computing infrastructure I work with across research and production drug-discovery workflows.
    </p>
  </div>
</header>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Technical Stack</h2>
      <p class="section-aside">From generative models and simulation to research infrastructure.</p>
    </div>

    <div>
      {% for group in site.data.skills.groups %}
        <article class="cap-group">
          <h3 class="cap-title">{{ group.category }}</h3>
          <p class="cap-desc">{{ group.description }}</p>
          <p class="cap-line">
            {% for item in group.items %}{{ item }}{% unless forloop.last %}<span class="cap-sep">&middot;</span>{% endunless %}{% endfor %}
          </p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
