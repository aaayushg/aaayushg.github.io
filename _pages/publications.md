---
title: "Publications"
permalink: /publications/
description: "Peer-reviewed publications, preprints, and conference presentations in computational chemistry and machine learning."
---

<header class="page-hero">
  <div class="container">
    <p class="section-eyebrow">Research Output</p>
    <h1>Publications</h1>
    <p class="page-hero__lead">
      Peer-reviewed papers, preprints, and presentations at the intersection of machine learning and molecular physics.
    </p>
    <div class="page-hero__actions">
      <a class="btn btn--secondary" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar &nearr;</a>
    </div>
  </div>
</header>

<section class="band reveal">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="section-eyebrow">Journal Articles &amp; Preprints</p>
        <h2>Selected papers</h2>
      </div>
    </div>

    <div class="pub-list">
      {% for paper in site.data.publications.papers %}
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
      {% endfor %}
    </div>
  </div>
</section>

<section class="band band--tinted reveal">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="section-eyebrow">Conferences</p>
        <h2>Presentations</h2>
      </div>
    </div>

    <div class="card-grid-2">
      {% for talk in site.data.publications.talks %}
        <article class="info-card">
          <p class="info-card__kicker">{{ talk.date }}</p>
          <h3>{{ talk.title }}</h3>
          <p>{{ talk.venue }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
