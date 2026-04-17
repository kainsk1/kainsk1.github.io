---
title: research
permalink: /publications/
---

<p class="page-lede" data-i18n="research.lede">Research projects at Mila and selected past work. † denotes ongoing projects.</p>

<ul class="pubs">
{% for pub in site.data.publications %}
  <li class="pub">
    <div class="pub-year">{{ pub.year }}</div>
    <div>
      {% if pub.badge %}<span class="pub-badge badge-{{ pub.badge }}">{{ pub.badge | upcase }}</span>{% endif %}
      <p class="pub-title">{{ pub.title }}</p>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue">{{ pub.venue }}</p>
      {% if pub.note %}<p class="pub-note">{{ pub.note }}</p>{% endif %}
      <p class="pub-links">
        {% if pub.pdf %}<a href="{{ pub.pdf }}">pdf</a>{% endif %}
        {% if pub.arxiv %}<a href="{{ pub.arxiv }}">arXiv</a>{% endif %}
        {% if pub.code %}<a href="{{ pub.code }}">code</a>{% endif %}
        {% if pub.slides %}<a href="{{ pub.slides }}">slides</a>{% endif %}
        {% if pub.poster %}<a href="{{ pub.poster }}">poster</a>{% endif %}
      </p>
    </div>
  </li>
{% endfor %}
</ul>
