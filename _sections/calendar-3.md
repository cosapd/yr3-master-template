---
location: get-involved
head:
  title: null
  subtitle: null
style:
  id: calendar
  class: text-left contained alt
  font_color: null
theme: null
tags: null
published: true
engagement_journal_path: example-journal.pdf
engagement_journal_thumb_path: /img/eca_thumb.png
esp_engagement_journal_path: esp-example.pdf
esp_engagement_journal_thumb_path: /img/eca_thumb.png
engagement_journal_title: Engagement Journal Title
esp_engagement_journal_title: Esp Engagement Journal Title

---
<div class="row"><br><br>
  <div class="col-12">
    <h3 class="text-orange">Engagement Journal</h3>
    <p>The Engagement Journal provides community members an opportunity to follow along the South Community Area planning process and review feedback received through numerous engagement activities and events. The input received through these outreach efforts will be summarized in this document, and will help shape the development of the plan. Please note this document will be updated throughout this planning process.</p>
    <br />

  <div class="engagement-journal-downloads">
    <h3>View and Download PDF</h3>
  </div>
  <div id="documents" class="row mt-1">
    <div class="col-sm-6 mt-4">
      {% if page.engagement_journal_thumb_path != blank %}
      <div class="doc-image" style="padding-right: 30px;">
        {% if page.engagement_journal_path != blank %}
        <a href="{{ page.engagement_journal_path }}" target="_blank">
        {% endif %}
        <img style="max-height:300px;" src="{{ page.engagement_journal_thumb_path }}"/>
        {% if page.engagement_journal_path != blank %}
        </a>
        {% endif %}
      </div>
      {% else %}
      <div class="doc-icons" style="padding-right: 30px;">
        {% if page.engagement_journal_path != blank %}
        <a href="{{ page.engagement_journal_path }}" target="_blank">
        {% endif %}
        <img src="/img/icons/doc-icon.png"/>
        {% if page.engagement_journal_path != blank %}
        </a>
        {% endif %}
      </div>
      {% endif %}
      <div>
      <h4>
      <strong>
        {% if page.engagement_journal_title != blank %}<a href="{{page.engagement_journal_path}}" target="_blank">{{ page.engagement_journal_title }}</a>{% endif %}
      </strong>
      </h4>
        <p class="small">
            <a href="{{ page.engagement_journal_path }}" target="_blank" >
              <i class="fa fa-download"></i>Download</a>
        </p>
        </div>
    </div>
    <div class="col-sm-6 mt-4">
      {% if page.esp_engagement_journal_path %}
        {% if page.esp_engagement_journal_thumb_path %}
        <div class="doc-image" style="padding-right: 30px;">
          {% if page.esp_engagement_journal_path != blank %}
          <a href="{{ page.esp_engagement_journal_path }}" target="_blank">
          {% endif %}
          <img style="max-height:300px;" src="{{ page.esp_engagement_journal_thumb_path }}"/>
          {% if page.esp_engagement_journal_path != blank %}
          </a>
          {% endif %}
        </div>
        {% else %}
        <div class="doc-icons" style="padding-right: 30px;">
          {% if page.esp_engagement_journal_path != blank %}
          <a href="{{ page.esp_engagement_journal_path }}" target="_blank">
          {% endif %}
          <img src="/img/icons/doc-icon.png"/>
          {% if page.esp_engagement_journal_path != blank %}
          </a>
          {% endif %}
        </div>
        {% endif %}
        <div>
          <h4>
            <strong>
              {% if page.esp_engagement_journal_title != blank %}<a href="{{page.esp_engagement_journal_path}}" target="_blank">{{ page.esp_engagement_journal_title }}</a>{% endif %}
            </strong>
          </h4>
          <p class="small">
            {% if page.esp_engagement_journal_path %}
              <a href="{{ page.esp_engagement_journal_path }}" target="_blank" >
                <i class="fa fa-download"></i>Descargar</a>
            {% endif %}
          </p>
        </div>
      {% endif %}
    </div>
  </div>
</div>
