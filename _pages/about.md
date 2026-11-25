---
permalink: /
title: "Aayush Gupta"
description: "Scientist II in machine learning working on generative models, diffusion for novel modalities, computational chemistry, and drug discovery."
redirect_from:
  - /about/
  - /about.html
---

<section class="hero">
  <div class="container hero-grid">
    <div>
      <p class="hero-role">{{ site.author.role }} · {{ site.author.employer }} · {{ site.author.location }}</p>
      <h1 class="hero-title">Aayush Gupta</h1>

      <p class="hero-lead">
        I work at the intersection of <em>machine learning</em>, <em>computational chemistry</em>, and drug discovery.
      </p>

      <p class="hero-bio">
        Currently at Vida Vinci in Boston, I build generative models, including diffusion architectures for novel therapeutic modalities, alongside molecular representations, predictive ADME models, and de novo protein binder design workflows. Previously, I worked on high-throughput molecular dynamics and free-energy methods at DeepCure and PhysicsML neural potentials at Exscientia.
      </p>

      <div class="hero-links">
        <a class="btn" href="{{ '/cv/' | relative_url }}">Curriculum Vitae</a>
        <a class="btn btn--quiet" href="{{ '/research/' | relative_url }}">Experience</a>
        <a class="quiet-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar</a>
        <a class="quiet-link" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a>
        <a class="quiet-link" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="quiet-link" href="mailto:{{ site.author.email }}">Email</a>
      </div>
    </div>

    <figure class="portrait-figure">
      <img src="{{ site.author.portrait | relative_url }}" alt="Portrait of Aayush Gupta" width="640" height="800" loading="eager" decoding="async">
      <figcaption>Boston, MA · PhD, UIC</figcaption>
    </figure>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Current Focus</h2>
      <p class="section-aside">Where I spend most of my time right now.</p>
    </div>

    <div class="focus-list">
      {% for area in site.data.experience.focus %}
        <div class="focus-item">
          <h3>{{ area.label }}</h3>
          <p>{{ area.summary }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Experience</h2>
      <p class="section-aside">Recent roles in biotech and AI-driven drug discovery.</p>
    </div>

    <div>
      <div class="entry-list">
        {% for item in site.data.experience.industry %}
          {% if item.featured %}
            <article class="entry">
              <div class="entry-head">
                <span class="entry-org">{{ item.organization }}</span>
                <span class="entry-period">{{ item.period }}</span>
              </div>
              <p class="entry-role">{{ item.role }}</p>
              <p class="entry-summary">{{ item.summary }}</p>
            </article>
          {% endif %}
        {% endfor %}
      </div>

      <p class="section-more">
        <a class="quiet-link" href="{{ '/research/' | relative_url }}">Full experience &amp; doctoral research &rarr;</a>
      </p>
    </div>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Selected Papers</h2>
      <p class="section-aside">Peer-reviewed work combining simulation and machine learning.</p>
    </div>

    <div>
      <div class="pub-list">
        {% for paper in site.data.publications.papers %}
          {% if paper.featured %}
            <article class="pub-item">
              <span class="pub-year">{{ paper.year }}</span>
              <div>
                <h3 class="pub-title">
                  <a href="{{ paper.url }}" target="_blank" rel="noopener">{{ paper.title }}</a>
                </h3>
                <p class="pub-authors">{{ paper.authors }}</p>
                <div class="pub-meta">
                  <span class="pub-venue">{{ paper.venue }}</span>
                  <span>{{ paper.citation }}</span>
                  {% if paper.pdf %}
                    <a href="{{ paper.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
                  {% endif %}
                </div>
              </div>
            </article>
          {% endif %}
        {% endfor %}
      </div>

      <p class="section-more">
        <a class="quiet-link" href="{{ '/publications/' | relative_url }}">All publications &amp; talks &rarr;</a>
      </p>
    </div>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Education</h2>
    </div>

    <div class="entry-list">
      {% for edu in site.data.experience.education %}
        <article class="entry">
          <div class="entry-head">
            <span class="entry-org">{{ edu.institution }}</span>
          </div>
          <p class="entry-role">{{ edu.degree }}</p>
          <p class="entry-summary">{{ edu.detail }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
