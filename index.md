---
layout: default
---

<nav class="navbar-v2">
  <ul class="navbar-list">
    <li class="navbar-item">
      <button class="navbar-link  active" data-nav-link>Sobre</button>
    </li>
    <li class="navbar-item">
      <button class="navbar-link" data-nav-link>Currículo</button>
    </li>
    <li class="navbar-item">
      <button class="navbar-link" data-nav-link>Portfólio</button>
    </li>
    <li class="navbar-item">
      <button class="navbar-link" data-nav-link>Blog</button>
    </li>
    <li class="navbar-item">
      <button class="navbar-link" data-nav-link>Contato</button>
    </li>
  </ul>
</nav>

{% include about.html %}
{% include resume.html %}
{% include portfolio.html %}
{% include blog.html %}
{% include contact.html %}