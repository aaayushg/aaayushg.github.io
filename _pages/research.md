---
title: "Experience"
permalink: /research/
description: "Industry and academic research experience across generative models, computational chemistry, molecular dynamics, and drug discovery."
---

<header class="page-hero">
  <div class="container">
    <p class="section-eyebrow">Career &amp; Research</p>
    <h1>Experience</h1>
    <p class="page-hero__lead">
      Industry and doctoral work across generative models, molecular simulation, neural network potentials, and computational drug discovery.
    </p>
  </div>
</header>

<section class="band">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <p class="section-eyebrow">Industry</p>
        <h2>Biotech &amp; AI roles</h2>
      </div>
    </div>

    <div class="timeline stagger">
      {% for item in site.data.experience.industry %}
        <article class="timeline-item{% if forloop.first %} timeline-item--current{% endif %}">
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

<section class="band band--tinted">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <p class="section-eyebrow">Academic</p>
        <h2>Doctoral &amp; earlier research</h2>
      </div>
    </div>

    <div class="card-grid-2 stagger">
      <article class="info-card">
        <p class="info-card__kicker">PhD Research · {{ site.data.experience.doctoral.advisor }}</p>
        <h3>{{ site.data.experience.doctoral.institution }}</h3>
        <p class="info-card__sub">{{ site.data.experience.doctoral.degree }}</p>
        <ul class="bullet-list">
          {% for point in site.data.experience.doctoral.highlights %}
            <li>{{ point }}</li>
          {% endfor %}
        </ul>
        <div class="entry-links">
          {% for link in site.data.experience.doctoral.links %}
            <a class="mini-link" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }} &nearr;</a>
          {% endfor %}
        </div>
      </article>

      <article class="info-card">
        <p class="info-card__kicker">Foundations</p>
        <h3>Earlier Research</h3>
        <p class="info-card__sub">Quantum Chemistry, Materials &amp; Simulation</p>
        <ul class="bullet-list">
          {% for item in site.data.experience.earlier %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </article>
    </div>
  </div>
</section>
