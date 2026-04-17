---
title: CV
permalink: /cv/
layout: default
---

<div class="cv-page-header">
  <div>
    <h1 class="page-title">CV</h1>
    <p class="page-lede" data-i18n="cv.lede">Full curriculum vitae.</p>
  </div>
  <div class="cv-actions">
    <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}"
       download="Kains_Kavuluri_CV.pdf"
       class="cv-download-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Download PDF
    </a>
    <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}"
       target="_blank" rel="noopener"
       class="cv-open-btn">
      Open in new tab ↗
    </a>
  </div>
</div>

<div class="cv-pdf-viewer">
  <object
    data="{{ '/assets/pdf/cv.pdf' | relative_url }}#view=FitH"
    type="application/pdf"
    class="cv-pdf-embed">
    <div class="cv-pdf-fallback">
      <p>Your browser cannot display the PDF inline.</p>
      <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}"
         download="Kains_Kavuluri_CV.pdf"
         class="cv-download-btn">
        Download the PDF
      </a>
    </div>
  </object>
</div>
