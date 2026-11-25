---
permalink: /
title: "Aayush Gupta"
description: "Machine learning scientist and computational chemist working on generative models, diffusion for novel modalities, and drug discovery."
redirect_from:
  - /about/
  - /about.html
---

<section class="hero">
  <div class="container">
    <div class="hero-top">
      <div>
        <p class="hero-eyebrow">
          <span class="hero-eyebrow__line" aria-hidden="true"></span>
          Machine Learning Scientist and Computational Chemist
        </p>

        <div class="hero-identity">
          <img class="hero-avatar" src="{{ site.author.portrait | relative_url }}" alt="Aayush Gupta" width="72" height="72" loading="eager" decoding="async">
          <h1 class="hero-title">Aayush Gupta</h1>
        </div>

        <p class="hero-lead">
          Building <em>generative models</em>, molecular representations, and physics-informed AI for drug discovery.
        </p>
      </div>

      <div class="hero-right">
        <p class="hero-bio">
          I'm a machine learning scientist at Vida Vinci in Boston, developing generative models, including diffusion architectures for novel therapeutic modalities, alongside predictive ADME modeling and de novo protein binder design. Previously, I built high-throughput molecular simulation platforms at DeepCure and worked on PhysicsML neural potentials at Exscientia.
        </p>

        <div class="hero-actions">
          <a class="btn" href="{{ '/cv/' | relative_url }}">View CV <span class="btn-arrow" aria-hidden="true">&rarr;</span></a>
          <a class="btn btn--secondary" href="{{ '/research/' | relative_url }}">Experience</a>
        </div>

        <div class="social-row">
          <a class="social-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>
            Google Scholar
          </a>
          <a class="social-link" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
          <a class="social-link" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a class="social-link" href="mailto:{{ site.author.email }}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email
          </a>
        </div>
      </div>
    </div>

    <figure class="feature-photo">
      <div class="feature-photo__viewport">
        <img class="feature-photo__img" src="{{ '/images/aayu1.jpeg' | relative_url }}" alt="Aayush Gupta presenting computational drug discovery research" width="1600" height="905" loading="eager" decoding="async">
      </div>
      <figcaption>
        <span>Presenting ML-enabled virtual drug screening research · University of Illinois at Chicago</span>
        <span class="portrait-card__loc">Boston, MA · PhD, UIC</span>
      </figcaption>
    </figure>
  </div>
</section>

<section class="band band--tinted">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <p class="section-eyebrow">Current Work</p>
        <h2>Research &amp; engineering focus</h2>
      </div>
    </div>

    <div class="focus-grid stagger">
      {% for area in site.data.experience.focus %}
        <article class="focus-card">
          <span class="focus-card__num">0{{ forloop.index }}</span>
          <h3>{{ area.label }}</h3>
          <p>{{ area.summary }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="band">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <p class="section-eyebrow">Career</p>
        <h2>Selected experience</h2>
      </div>
      <a class="section-link" href="{{ '/research/' | relative_url }}">Full experience <span aria-hidden="true">&rarr;</span></a>
    </div>

    <div class="timeline stagger">
      {% for item in site.data.experience.industry %}
        {% if item.featured %}
          <article class="timeline-item{% if forloop.first %} timeline-item--current{% endif %}">
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
  </div>
</section>

<section class="band band--tinted">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <p class="section-eyebrow">Research Output</p>
        <h2>Selected publications</h2>
      </div>
      <a class="section-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">&rarr;</span></a>
    </div>

    <div class="pub-list stagger">
      {% for paper in site.data.publications.papers %}
        {% if paper.featured %}
          <article class="pub-card">
            <span class="pub-year">{{ paper.year }}</span>
            <div>
              <h3 class="pub-title">
                <a href="{{ paper.url }}" target="_blank" rel="noopener">{{ paper.title }}</a>
              </h3>
              <p class="pub-authors">{{ paper.authors }}</p>
              <div class="pub-meta">
                <span class="pub-venue">{{ paper.venue }}</span>
                <span>{{ paper.citation }}</span>
                <a class="mini-link" href="{{ paper.url }}" target="_blank" rel="noopener">Journal &nearr;</a>
                {% if paper.pdf %}
                  <a class="mini-link" href="{{ paper.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
                {% endif %}
              </div>
            </div>
          </article>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="band">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <p class="section-eyebrow">Background</p>
        <h2>Education</h2>
      </div>
    </div>

    <div class="card-grid-2 stagger">
      {% for edu in site.data.experience.education %}
        <article class="info-card">
          <h3>{{ edu.institution }}</h3>
          <p class="info-card__sub">{{ edu.degree }}</p>
          <p>{{ edu.detail }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
