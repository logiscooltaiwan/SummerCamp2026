document.addEventListener('DOMContentLoaded', () => {
  // 1. 動態渲染 FAQ 資料
  const container = document.getElementById('faq-container-full');
  if (typeof FAQ !== 'undefined' && container) {
    let html = '';
    FAQ.forEach(categoryBlock => {
      html += `
        <div class="faq-category">
          <h2 class="faq-category-header" style="color: var(${categoryBlock.colorTheme}); border-color: var(${categoryBlock.bgTheme})">
            ${categoryBlock.category}
          </h2>
          <div class="accordion-wrapper">
      `;
      categoryBlock.questions.forEach(item => {
        html += `
          <div class="accordion-item animate-on-scroll slide-up">
            <button class="accordion-header" aria-expanded="false">
              <span class="accordion-title">${item.q}</span>
              <span class="accordion-icon" style="color: var(${categoryBlock.colorTheme})">+</span>
            </button>
            <div class="accordion-content">
              <div class="accordion-content-inner">
                ${item.a}
              </div>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    });
    container.innerHTML = html;

    // 2. Accordion — 用 event delegation 掛在 container，避免和 main.js 衝突
    container.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (!header) return;

      const currentItem = header.closest('.accordion-item');
      if (!currentItem || !container.contains(currentItem)) return;

      const isExpanded = currentItem.classList.contains('active');

      // 收合全部
      container.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
        const btn = item.querySelector('.accordion-header');
        btn.setAttribute('aria-expanded', 'false');
        const icon = btn.querySelector('.accordion-icon');
        if (icon) icon.innerText = '+';
        const title = btn.querySelector('.accordion-title');
        if (title) title.style.color = '';
      });

      // 展開當前
      if (!isExpanded) {
        currentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        const icon = header.querySelector('.accordion-icon');
        if (icon) icon.innerText = '−';
        const title = header.querySelector('.accordion-title');
        if (title) title.style.color = icon ? icon.style.color : 'var(--color-orange)';
        const content = currentItem.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }

  // 3. CTA UTM
  const ctaBtn = document.getElementById('cta-register-btn');
  if (ctaBtn && typeof CONFIG !== 'undefined') {
    try {
      const url = new URL(CONFIG.registrationUrl, window.location.origin);
      url.searchParams.set('utm_source', CONFIG.utmSource);
      url.searchParams.set('utm_medium', 'faq_footer');
      url.searchParams.set('utm_campaign', CONFIG.utmCampaign);
      ctaBtn.href = url.toString();
    } catch (e) {
      ctaBtn.href = CONFIG.registrationUrl;
    }
  }

  // 4. Footer
  if (window.renderFooter) window.renderFooter();
});
