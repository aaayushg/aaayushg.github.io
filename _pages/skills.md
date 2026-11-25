---
title: "Capabilities"
permalink: /skills/
description: "Technical capabilities across generative modeling, deep learning, molecular simulation, cheminformatics, and HPC infrastructure."
---

<header class="page-hero">
  <div class="container">
    <p class="section-eyebrow">Toolkit</p>
    <h1>Capabilities</h1>
    <p class="page-hero__lead">
      Modeling methods, simulation platforms, and scientific computing tools I use across research and production drug-discovery workflows.
    </p>
  </div>
</header>

<section class="band">
  <div class="container">
    <div class="card-grid-2 stagger">
      {% for group in site.data.skills.groups %}
        <article class="info-card">
          <p class="info-card__kicker">{{ group.index }}</p>
          <h3>{{ group.category }}</h3>
          <p>{{ group.description }}</p>
          <p class="cap-list">
            {% for item in group.items %}{{ item }}{% unless forloop.last %}<span class="cap-sep">&middot;</span>{% endunless %}{% endfor %}
          </p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
