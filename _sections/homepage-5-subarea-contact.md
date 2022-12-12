---
location: homepage
head:
  title: null
  subtitle: null
background:
  image:
cta:
  headline:
  btnLink:
  btnType:
  btnText:
  subtext:
style:
  id: 'contact-form'
  class: 'alt edge--both--reverse contained'
theme:
  - null
tags:
  - null
published: true
coming_soon: false
---
<div class="container">
<h2 class="text-center">Tell us what you think.</h2>

<p>&nbsp;</p>

<row class="row text-left">
  {% if site.team-lead.name %}
    <div class="col-12 col-sm-6 col-md-5 team-lead-container">
      <h4>Project Manager</h4>

      {% if site.team-lead.name %}
      <h2>{{ site.team-lead.name }}</h2>
      {% endif %}

      {% if site.team-lead.title %}
      <h3>{{ site.team-lead.title }}</h3>
      {% endif %}

      {% if site.team-lead.email %}
      <a class="team-lead-email" href="mailto:{{ site.team-lead.email }}">{{ site.team-lead.email }}</a>
      {% endif %}

      {% if site.team-lead.phone %}
      <p>{{ site.team-lead.phone }}</p>
      {% endif %}

      <span class="small"><a href="/planning-team/">Meet the complete {{ site.title }} Planning Team</a></span>
    </div>

    <div class="col-12 col-sm-6 col-md-7">
      {% include contact-form.html %}
    </div>

  {% else %}

  <div class="col-12">
    {% include contact-form.html %}
  </div>

  {% endif %}

</row>
</div>
