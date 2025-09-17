---
layout: page
title: Blog
permalink: /blog/
---

<article class="blog" data-page="blog">

  <header>
    <h2 class="h2 article-title">Blog</h2>
  </header>

  <section class="blog-posts">
    <ul class="blog-posts-list">
      {% for post in site.posts %}
      <li class="blog-post-item">
        <a href="{{ post.url | relative_url }}">
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">{{ post.categories | join: ', ' }}</p>
              <span class="dot"></span>
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d de %B de %Y" }}</time>
            </div>
            <h3 class="h3 blog-item-title">{{ post.title }}</h3>
            <p class="blog-text">
              {{ post.excerpt | strip_html | truncatewords: 50 }}
            </p>
          </div>
        </a>
      </li>
      {% endfor %}
    </ul>
  </section>

</article>
