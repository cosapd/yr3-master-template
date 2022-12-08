---
location: en-espanol
head:
  title:
  subtitle:
background:
  image:
cta:
  headline:
  btnLink:
  btnType:
  btnText:
  subtext:
style:
  id: 'subscribe-form'
  class: ' edge--top contained print-hide'
theme:

tags:

---
<div class="container">
<h2 class="text-center">Comparta su opinión.</h2>

<p>&nbsp;</p>

<row class="row text-left">
  {% if site.team-lead.name %}
    <div class="col-12 col-sm-6 col-md-5 team-lead-container">
      <h4>Gerente de Proyecto</h4>

      {% if site.team-lead.name %}
      <h2>{{ site.team-lead.name-es }}</h2>
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

      <span class="small"><a href="/planning-team/">Conozca al equipo de planificación completo del área comunitaria South del Plan Integral SA Tomorrow.</a></span>
    </div>

    <div class="col-12 col-sm-6 col-md-7">
      {% include contact-form-es.html %}
    </div>

  {% else %}

  <div class="col-12">
    {% include contact-form-es.html %}
  </div>

  {% endif %}

</row>
</div>
