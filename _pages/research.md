---
title: "Experience"
permalink: /research/
description: "Industry and academic research experience across generative models, computational chemistry, molecular dynamics, and drug discovery."
---

<header class="page-header">
  <div class="container">
    <h1>Experience</h1>
    <p class="page-header__lead">
      My work spans biotech startups and academic research, focused on building generative models, physics-based simulation workflows, and practical ML systems for drug discovery.
    </p>
  </div>
</header>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Industry</h2>
      <p class="section-aside">Machine learning and computational chemistry roles in Boston and New York.</p>
    </div>

    <div class="entry-list">
      {% for item in site.data.experience.industry %}
        <article class="entry">
          <div class="entry-head">
            <span class="entry-org">{{ item.organization }}</span>
            <span class="entry-period">{{ item.period }}</span>
          </div>
          <p class="entry-role">{{ item.role }} · {{ item.location }}</p>
          <ul class="bullet-list">
            {% for point in item.highlights %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Doctoral Research</h2>
      <p class="section-aside">{{ site.data.experience.doctoral.advisor }}</p>
    </div>

    <div class="entry-list">
      <article class="entry">
        <div class="entry-head">
          <span class="entry-org">{{ site.data.experience.doctoral.institution }}</span>
        </div>
        <p class="entry-role">{{ site.data.experience.doctoral.degree }}</p>
        <ul class="bullet-list">
          {% for point in site.data.experience.doctoral.highlights %}
            <li>{{ point }}</li>
          {% endfor %}
        </ul>
        <div class="entry-links">
          {% for link in site.data.experience.doctoral.links %}
            <a class="quiet-link" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }} &nearr;</a>
          {% endfor %}
        </div>
      </article>
    </div>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Earlier Research</h2>
      <p class="section-aside">Quantum chemistry, materials, and molecular modeling.</p>
    </div>

    <ul class="bullet-list" style="margin-top: 0;">
      {% for item in site.data.experience.earlier %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>
