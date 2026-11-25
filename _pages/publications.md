---
title: "Publications"
permalink: /publications/
description: "Peer-reviewed publications, preprints, and conference presentations in computational chemistry and machine learning."
---

<header class="page-header">
  <div class="container">
    <h1>Publications</h1>
    <p class="page-header__lead">
      Peer-reviewed papers, preprints, and talks combining statistical learning with molecular physics. Also indexed on <a class="quiet-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar</a>.
    </p>
  </div>
</header>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Papers &amp; Preprints</h2>
    </div>

    <div class="pub-list">
      {% for paper in site.data.publications.papers %}
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
              <a href="{{ paper.url }}" target="_blank" rel="noopener">Journal</a>
              {% if paper.pdf %}
                <a href="{{ paper.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
              {% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="editorial-section reveal">
  <div class="container editorial-grid">
    <div>
      <h2 class="section-heading">Presentations</h2>
    </div>

    <div class="pub-list">
      {% for talk in site.data.publications.talks %}
        <article class="pub-item">
          <span class="pub-year">{{ talk.year }}</span>
          <div>
            <h3 class="pub-title">{{ talk.title }}</h3>
            <p class="pub-authors">{{ talk.venue }}</p>
            <div class="pub-meta">
              <span>{{ talk.date }}</span>
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
