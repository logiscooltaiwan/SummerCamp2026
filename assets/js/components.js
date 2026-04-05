const navbarHTML = `
  <header class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="logo">邏輯酷程式學院</a>
      
      <!-- 手機版漢堡選單按鈕 -->
      <button class="hamburger" id="hamburger" aria-label="選單">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- 導覽列選單 -->
      <nav class="nav-menu" id="nav-menu">
        <ul class="nav-list">
          <li class="nav-item"><a href="index.html" class="nav-link">首頁</a></li>
          <li class="nav-item has-dropdown">
            <a href="courses.html" class="nav-link">課程介紹</a>
            <ul class="dropdown-menu">
              <li><a href="courses-mini.html" class="dropdown-link">Mini 低年級啟蒙班</a></li>
              <li><a href="courses-mc.html" class="dropdown-link">Minecraft 系列課程</a></li>
              <li><a href="courses-roblox.html" class="dropdown-link">Roblox 系列課程</a></li>
              <li><a href="courses-ai.html" class="dropdown-link">AI 系列課程</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="faq.html" class="nav-link">常見問題</a></li>
          <li class="nav-item">
            <a href="#" class="btn-register nav-btn" id="nav-register-btn">立即報名</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
`;

document.addEventListener('DOMContentLoaded', () => {
  // 將導覽列插入到 body 的最前面
  if (!document.querySelector('.navbar')) {
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }

  // 自動套用 config.js 中的報名連結
  const registerBtn = document.getElementById('nav-register-btn');
  if (registerBtn && typeof CONFIG !== 'undefined') {
    registerBtn.href = CONFIG.registrationUrl;
  }

  // ============================================
  // 漢堡選單與手機下拉選單邏輯
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  const hasDropdowns = document.querySelectorAll('.has-dropdown');
  hasDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 767) {
        if (e.target.classList.contains('nav-link')) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      }
    });
  });

  // ============================================
  // 共用課程 Modal 模板注入
  // ============================================
  if (!document.getElementById('course-modal-overlay')) {
    const courseModalHTML = `
      <div class="modal-overlay" id="course-modal-overlay">
        <div class="course-modal">
          <button class="modal-close-btn" id="modal-close-btn" aria-label="關閉">&times;</button>
          <div class="modal-body" id="modal-body-content">
            <!-- 會由 JS 動態填充 -->
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', courseModalHTML);
  }

  const overlay = document.getElementById('course-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) window.closeModal();
  });
  if (closeBtn) closeBtn.addEventListener('click', window.closeModal);

  // ============================================
  // 全域 Line 客服懸浮按鈕 (FAB)
  // ============================================
  if (!document.querySelector('.line-fab')) {
    const lineFabHTML = `
      <a href="https://lin.ee/BhxxT5B" target="_blank" rel="noopener noreferrer" class="line-fab animate-fade-up anim-delay-5" aria-label="加入官方 Line">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M24 10.3c0-4.4-4.2-8-9.4-8S5.2 5.9 5.2 10.3c0 3.9 2.6 7.2 6.3 7.8.2 0 .4.1.5.3l.4 1.3c.1.2 0 .4-.1.6-1.5 2.1-4.7-1.1-4.7-1.1-1.3-1.4-2.8-1.5-3.6-1.6-.2 0-.3-.2-.2-.3 1.5-2 3.1-4.4 3.1-4.4.2-.4 0-.8-.3-.9-3.7-1-6.1-4.2-6.1-7.8C.5 5.9 4.7 2.3 9.9 2.3S19.3 5.9 19.3 10.3c0 4.4-4.2 8-9.4 8-1.9 0-3.6-.5-5-1.3-.3-.2-.7-.1-.9.2L1.8 19c-.2.3 0 .7.3.9 1.8 1.1 4 1.7 6.3 1.7 5.2 0 9.4-3.6 9.4-8z"/>
        </svg>
        <span>加入官方 Line</span>
      </a>
    `;
    document.body.insertAdjacentHTML('beforeend', lineFabHTML);
  }

});

// Helper: 取得頁面主要容器 (相容不同 ID)
function getPageMain() {
  return document.getElementById('main-content') ||
    document.getElementById('category-page-main') ||
    document.querySelector('main');
}

window.closeModal = function () {
  const overlay = document.getElementById('course-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ============================================
// 共用課程渲染邏輯
// ============================================
window.renderCourseCards = function (courses, containerSelector, colorTheme) {
  const container = document.querySelector(containerSelector);
  if (!container || !courses) return;

  const baseColor = `var(${colorTheme})`;
  const bgColor = `var(${colorTheme}-bg)`;

  let html = '';
  courses.forEach(course => {
    const newBadge = course.isNew ? '<span class="course-new-badge">NEW</span>' : '';
    const newLabel = course.isNew ? '<span class="course-new-label">⭐ 全新課程</span>' : '';

    html += `
      <div class="course-card animate-on-scroll slide-up">
        <div class="course-card-top-bar" style="background-color: ${baseColor}"></div>
        <div class="course-card-title-row">
          ${newBadge}
          <h3 class="course-name-text">${course.name}</h3>
        </div>
        <div class="course-tag-row">
          <span class="course-age-badge">${course.ageGroup}</span>
          ${newLabel}
        </div>
        <div class="course-tagline-text">${course.tagline}</div>
        <div class="course-takeaway-area" style="background-color: ${bgColor}">
          <span class="takeaway-icon">🎁</span>
          <span class="takeaway-text">帶回家：${course.takeaway}</span>
        </div>
        <div class="course-card-footer">
          <button class="btn-course-details" 
                  style="border-color: ${baseColor}; color: ${baseColor}"
                  onmouseover="this.style.backgroundColor='${baseColor}'; this.style.color='#fff'"
                  onmouseout="this.style.backgroundColor='transparent'; this.style.color='${baseColor}'"
                  onclick="window.openCourseModalById('${course.category}', '${course.id}')">
            查看課程詳情
          </button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
};

window.openCourseModalById = function (category, id) {
  if (typeof COURSES === 'undefined' || !COURSES[category]) return;
  const course = COURSES[category].find(c => c.id === id);
  if (!course) return;

  const modalOverlay = document.getElementById('course-modal-overlay');
  const modalBody = document.getElementById('modal-body-content');
  if (!modalOverlay || !modalBody) return;

  const categoryColorVar = course.category === 'mini' ? 'teal' :
    course.category === 'minecraft' ? 'purple' :
      course.category === 'roblox' ? 'coral' : 'blue';

  const baseColor = `var(--color-${categoryColorVar})`;
  const bgColor = `var(--color-${categoryColorVar}-bg)`;

  const newBadge = course.isNew ? '<span class="modal-new-badge">NEW</span>' : '';
  // 找尋營隊日期
  let campDates = [];
  if (typeof CONFIG !== 'undefined' && CONFIG.schedule) {
    const allWeeks = [...(CONFIG.schedule.july || []), ...(CONFIG.schedule.august || [])];
    allWeeks.forEach(week => {
      // 比對課程名稱 (包含部分比對，因為有的名稱會多寫 (Mini))
      if (week.courses.some(c => c.includes(course.name) || course.name.includes(c.replace(' (Mini)', '')))) {
        campDates.push(week.dates);
      }
    });
  }
  const datesHTML = campDates.length > 0 
    ? `<span class="modal-badge-item">📅 營隊日期：${campDates.join(', ')}</span>` 
    : '';

  const headerHTML = `
    <div class="modal-refined-header" style="background-color: ${bgColor}">
      ${newBadge}
      <h2 class="modal-refined-title" style="color: ${baseColor}">${course.name}</h2>
      <p class="modal-refined-tagline">${course.tagline}</p>
      <div class="modal-header-badges">
        <span class="modal-badge-item">🎯 適合年齡：${course.ageGroup}</span>
        <span class="modal-badge-item">🏷️ 課程類別：${course.category.toUpperCase()}</span>
        ${datesHTML}
      </div>
    </div>
  `;

  let tabsNav = '<div class="modal-tabs-desktop">';
  let selectNav = `<select class="modal-tabs-mobile" id="modal-day-select" style="border-color: ${baseColor}">`;
  let tabsContent = '<div class="modal-tabs-content-refined">';

  if (course.days && course.days.length) {
    course.days.forEach((day, index) => {
      const activeClass = index === 0 ? 'active' : '';
      tabsNav += `<button class="tab-btn-refined ${activeClass}" data-index="${index}" style="${activeClass ? `background-color: ${baseColor}; color: #fff` : ''}">Day ${index + 1}</button>`;
      selectNav += `<option value="${index}">Day ${index + 1} | ${day.title}</option>`;

      const pointsHtml = day.points.map(p => `<li><span class="point-check" style="color: ${baseColor}">✓</span> ${p}</li>`).join('');
      tabsContent += `
        <div class="tab-pane-refined ${activeClass}" id="modal-tab-pane-${index}">
          <h4 class="tab-day-title-refined" style="color: ${baseColor}">Day ${index + 1}｜${day.title}</h4>
          <ul class="tab-day-points-refined">${pointsHtml}</ul>
        </div>
      `;
    });
  }
  tabsNav += '</div>';
  selectNav += '</select>';
  tabsContent += '</div>';

  let imagesHTML = '';
  if (Array.isArray(course.scheduleImg)) {
    // 支援多張圖：垂直排列
    imagesHTML = course.scheduleImg.map(img => `
      <img src="${img}" 
           alt="每週課表" 
           class="modal-schedule-img" 
           style="width: 100%; height: auto; display: block; border-bottom: 2px solid #e2e8f0;"
           onerror="this.style.display='none'">
    `).join('');
    
    // 如果全部都失敗，則顯示佔位圖
    if (!imagesHTML || course.scheduleImg.length === 0) {
      imagesHTML = `<img src="https://placehold.co/800x450/f1f5f9/64748b?text=【 課表製作中，敬請期待 】" class="modal-schedule-img" style="width: 100%; height: auto; display: block;">`;
    }
  } else {
    // 支援單張圖
    imagesHTML = `
      <img src="${course.scheduleImg || ''}" 
           alt="每週課表" 
           class="modal-schedule-img"
           style="width: 100%; height: auto; display: block;"
           onerror="this.src='https://placehold.co/800x450/f1f5f9/64748b?text=【 課表製作中，敬請期待 】'">
    `;
  }

  const scheduleHTML = `
    <div class="modal-section-schedule" style="margin-top: 32px">
      <div class="section-label-small" style="color: ${baseColor}">WEEKS SCHEDULE</div>
      <h3 class="modal-section-title" style="margin-bottom: 16px; font-size: 1.5rem; font-weight: 800; color: #1e293b;">📅 課程時程表詳情</h3>
      <div class="modal-schedule-container" style="display: flex; flex-direction: column; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        ${imagesHTML}
      </div>
    </div>
  `;

  const introHTML = `
    <div class="modal-section-intro" style="margin-top: 40px">
      <div class="section-label-small" style="color: ${baseColor}">COURSE INTRODUCTION</div>
      <h3 class="modal-section-title" style="margin-bottom: 20px; font-size: 1.5rem; font-weight: 800; color: #1e293b;">📝 課程核心簡介</h3>
      <div class="modal-intro-text" style="font-size: 1.15rem; line-height: 1.8; color: #334155; white-space: pre-line;">
        ${course.intro}
      </div>
    </div>
    
    <div class="modal-section-takeaway" style="margin-top: 40px; background-color: #f0fdf4; padding: 24px; border-radius: 20px; border: 1px solid #dcfce7">
      <div class="takeaway-box-refined">
        <span class="takeaway-box-icon" style="font-size: 2.5rem; margin-right: 20px">🎁</span>
        <div class="takeaway-box-content">
          <strong style="color: #166534; font-size: 1.2rem; display: block; margin-bottom: 8px">課程結束，孩子帶回家的成品：</strong>
          <span style="font-size: 1.1rem; color: #1e293b">${course.takeaway}</span>
        </div>
      </div>
    </div>
  `;

  let registerUrl = typeof CONFIG !== 'undefined' ? CONFIG.registrationUrl : '#';
  try {
    const url = new URL(registerUrl, window.location.origin);
    url.searchParams.set('utm_source', typeof CONFIG !== 'undefined' ? CONFIG.utmSource : 'website');
    url.searchParams.set('utm_medium', 'course_modal');
    url.searchParams.set('utm_campaign', typeof CONFIG !== 'undefined' ? CONFIG.utmCampaign : '2026summer');
    url.searchParams.set('utm_content', course.id);
    registerUrl = url.toString();
  } catch (e) { }

  const footerHTML = `
    <div class="modal-refined-footer">
      <a href="${registerUrl}" target="_blank" rel="noopener noreferrer" class="btn-modal-register-refined">
        立即報名此課程
      </a>
    </div>
  `;

  modalBody.innerHTML = `
    <div class="modal-scroll-area">
      ${headerHTML}
      
      <!-- 課程簡介移至此處 -->
      ${introHTML}

      <div class="modal-tabs-section">
        <div class="section-label-small" style="color: ${baseColor}">DAILY PROGRESS</div>
        <h3 class="modal-section-title" style="margin-bottom: 20px; font-size: 1.5rem; font-weight: 800; color: #1e293b;">📅 每日課程進度</h3>
        ${tabsNav}
        ${selectNav}
        ${tabsContent}
      </div>

      ${scheduleHTML}
      ${footerHTML}
    </div>
  `;

  const tabBtns = modalBody.querySelectorAll('.tab-btn-refined');
  const daySelect = modalBody.querySelector('#modal-day-select');
  const tabPanes = modalBody.querySelectorAll('.tab-pane-refined');

  const switchTab = (index) => {
    tabBtns.forEach((btn, i) => {
      if (i == index) {
        btn.classList.add('active');
        btn.style.backgroundColor = baseColor;
        btn.style.color = '#fff';
      } else {
        btn.classList.remove('active');
        btn.style.backgroundColor = '';
        btn.style.color = '';
      }
    });
    if (daySelect) daySelect.value = index;
    tabPanes.forEach((pane, i) => {
      pane.classList.toggle('active', i == index);
    });
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-index')));
  });

  if (daySelect) {
    daySelect.addEventListener('change', (e) => switchTab(e.target.value));
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.renderCategoryHero = function (config) {
  const emojiMap = { 'mini': '🟢', 'minecraft': '🟣', 'roblox': '🟠', 'ai': '🔵' };
  const categoryEmoji = emojiMap[config.category] || '🚀';
  const courseCount = (typeof COURSES !== 'undefined' && COURSES[config.category]) ? COURSES[config.category].length : 0;

  const bgStyle = config.heroImg ? `background-image: url('${config.heroImg}');` : `background-color: var(--color-${config.colorVar}-bg);`;
  const bgClass = config.heroImg ? 'has-bg' : '';

  const heroHTML = `
    <section class="category-hero-section ${bgClass}" style="${bgStyle} height: ${config.heroHeight || '260px'}">
      <div class="category-hero-line" style="background-color: var(--color-${config.colorVar})"></div>
      <div class="category-hero-container">
        <nav class="hero-breadcrumb">
          <a href="index.html">首頁</a> &gt; <a href="courses.html">課程介紹</a> &gt; <span>${config.title}</span>
        </nav>
        <div class="hero-title-group">
          <h1 class="hero-title" style="color: var(--color-${config.colorVar})">${config.title}</h1>
          <div class="hero-course-badge" style="border-color: var(--color-${config.colorVar}); color: var(--color-${config.colorVar})">
            共 ${courseCount} 門課
          </div>
        </div>
        <p class="hero-subtitle">${config.subtitle}</p>
      </div>
      <div class="hero-deco-emoji">${categoryEmoji}</div>
    </section>
  `;

  const main = getPageMain();
  if (main) {
    main.insertAdjacentHTML('afterbegin', heroHTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', heroHTML);
  }
};

window.renderCourseGrid = function (config) {
  const gridHTML = `
    <section class="course-grid-section">
      <div class="course-grid-container">
        <div id="course-cards-container" class="course-cards-grid">
          <!-- 會由 JS 填充 -->
        </div>
      </div>
    </section>
  `;
  const main = getPageMain();
  if (main) {
    main.insertAdjacentHTML('beforeend', gridHTML);
  }

  if (typeof window.renderCourseCards === 'function' && typeof COURSES !== 'undefined') {
    window.renderCourseCards(COURSES[config.category], '#course-cards-container', `--color-${config.colorVar}`);
  }
};



window.renderCategoryPage = function (config) {
  const main = getPageMain();
  if (main) {
    main.innerHTML = '';
    renderCategoryHero(config);
    renderCourseGrid(config);
  }

  if (!document.querySelector('.cta-section')) {
    let ctaContainer = document.getElementById('footer-cta-container');
    if (!ctaContainer) {
      ctaContainer = document.createElement('div');
      ctaContainer.id = 'footer-cta-container';
      document.body.appendChild(ctaContainer);
    }
    window.renderFooterCTA('#footer-cta-container');
  }

  if (!document.querySelector('.site-footer')) {
    window.renderFooter();
  }
};

window.renderFooterCTA = function (containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const ctaHTML = `
    <section class="cta-section">
      <div class="cta-container animate-on-scroll slide-up">
        <h2 class="cta-title">現在就幫孩子搶位！</h2>
        <p class="cta-subtitle" id="cta-subtitle"></p>
        <a href="#" class="btn-cta" id="cta-register-btn">立即報名</a>
        <p class="cta-note">【報越多，省越多】 團報或連續報名多梯次皆享折扣</p>
      </div>
    </section>
  `;
  container.innerHTML = ctaHTML;

  setTimeout(() => {
    const ctaSubtitle = document.getElementById('cta-subtitle');
    const ctaBtn = document.getElementById('cta-register-btn');
    if (ctaSubtitle && typeof CONFIG !== 'undefined' && CONFIG.pricing) {
      const phase = CONFIG.pricing.phases[0];
      ctaSubtitle.innerHTML = `現正優惠中：<strong style="color:var(--color-orange)">${phase.name}優惠</strong>`;
      ctaBtn.href = CONFIG.registrationUrl;
    }
  }, 50);
};

window.renderFooter = function () {
  if (document.querySelector('.site-footer')) return;
  const contact = (typeof CONFIG !== 'undefined' && CONFIG.contact) ? CONFIG.contact : { phone: '02-0000-0000', address: '地址載入中...' };
  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-brand footer-col">
            <h2 class="footer-logo">邏輯酷程式學院</h2>
            <p class="footer-desc">上午寫程式、下午玩翻天。<br>在我們這裡，每個孩子都能找到讓創意成真的那一門課。</p>
            <div class="footer-social">
              ${contact.facebook ? `<a href="${contact.facebook}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>` : ''}
              ${contact.instagram ? `<a href="${contact.instagram}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>Instagram</span>
              </a>` : ''}
            </div>
          </div>
          <div class="footer-links footer-col">
            <h3 class="footer-title">快速連結</h3>
            <ul>
              <li><a href="index.html">首頁</a></li>
              <li><a href="courses.html">課程介紹</a></li>
              <li><a href="#" class="btn-register-footer">立即報名</a></li>
            </ul>
          </div>
          <div class="footer-contact footer-col">
            <h3 class="footer-title">聯絡資訊</h3>
            <p>📞 ${contact.phone}</p>
            <p>📍 ${contact.address}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 邏輯酷程式學院 版權所有 Copyright All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
};

// ============================================
// 課程總覽頁 (courses.html) 高階渲染
// ============================================

window.createCarousel = function (containerSelector, options) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const {
    items = [],
    mode = 'fade',
    autoPlay = true,
    interval = 5000,
    itemsPerView = { desktop: 1, tablet: 1, mobile: 1 }
  } = options;

  let currentIndex = 0;
  let timer = null;
  const slideCount = items.length;

  let html = '';
  if (mode === 'fade') {
    html = `
      <div class="carousel-slides">
        ${items.map((item, index) => `
          <div class="carousel-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${item.img}')"></div>
        `).join('')}
      </div>
      <div class="carousel-overlay"></div>
    `;
  } else {
    html = `
      <div class="carousel-viewport">
        <div class="carousel-track">
          ${items.map(item => `
            <div class="carousel-item">
              <div class="activity-card">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="activity-card-label">${item.title}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  html += `
    <div class="carousel-controls">
      <button class="carousel-arrow prev">❮</button>
      <button class="carousel-arrow next">❯</button>
      <div class="carousel-dots">
        ${items.map((_, index) => `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;

  const track = container.querySelector('.carousel-track');
  const slides = container.querySelectorAll('.carousel-slide');
  const dots = container.querySelectorAll('.dot');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');

  items.forEach(item => {
    const img = new Image();
    img.src = item.img;
  });

  function getItemsInView() {
    const width = window.innerWidth;
    if (width >= 992) return itemsPerView.desktop;
    if (width >= 768) return itemsPerView.tablet;
    return itemsPerView.mobile;
  }

  function updateCarousel() {
    const itemsInView = getItemsInView();
    const maxIndex = mode === 'fade' ? slideCount - 1 : Math.max(0, slideCount - itemsInView);

    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;

    if (mode === 'fade') {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });
    } else if (track) {
      const offset = (currentIndex * (100 / itemsInView));
      track.style.transform = `translateX(-${offset}%)`;
    }

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    resetTimer();
  }

  function nextSlide() { currentIndex++; updateCarousel(); }
  function prevSlide() { currentIndex--; updateCarousel(); }

  function resetTimer() {
    if (autoPlay) {
      if (timer) clearInterval(timer);
      timer = setInterval(nextSlide, interval);
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateCarousel();
    });
  });

  let touchStartX = 0;
  let touchEndX = 0;
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  window.addEventListener('resize', updateCarousel);
  resetTimer();
};

window.renderCoursesHero = function () {
  const container = document.getElementById('courses-hero');
  if (!container) return;
  const items = [
    { img: 'assets/images/hero/hero-1.png' },
    { img: 'assets/images/hero/hero-2.png' },
    { img: 'assets/images/hero/hero-3.png' },
    { img: 'assets/images/hero/hero-4.png' }
  ];
  container.className = 'overview-hero-carousel';
  container.innerHTML = `
    <div id="hero-carousel-main"></div>
    <div class="overview-hero-inner container">
      <nav class="hero-breadcrumb-light">
        <a href="index.html">首頁</a> <span class="sep">/</span> <span>課程介紹</span>
      </nav>
      <div class="hero-content">
        <h1 class="hero-title-main">2026 夏令營<br><span class="highlight">課程總覽</span></h1>
        <p class="hero-description">20 門課，4 大類別，涵蓋 Minecraft、Roblox 到 AI 創作——<br>總有一門，讓你家孩子說『我要去！』</p>
      </div>
    </div>
  `;
  window.createCarousel('#hero-carousel-main', {
    items: items,
    mode: 'fade',
    interval: 5000
  });
};

window.renderCategoryCards = function () {
  const container = document.getElementById('category-cards');
  if (!container) return;
  const categories = [
    { id: 'mini', title: 'Mini 低年級啟蒙班', tagline: '專為大班至小三設計，科技營隊啟蒙首選', icon: 'assets/images/icon/Mini_ICON.png', color: 'teal', url: 'courses-mini.html' },
    { id: 'minecraft', title: 'Minecraft 系列課程', tagline: '不只是玩麥塊，而是用麥塊學工程思維', icon: 'assets/images/icon/MC_ICON.png', color: 'purple', url: 'courses-mc.html' },
    { id: 'roblox', title: 'Roblox 系列課程', tagline: '從玩遊戲的人，變成做遊戲的人', icon: 'assets/images/icon/Roblox_ICON.png', color: 'coral', url: 'courses-roblox.html' },
    { id: 'ai', title: 'AI 系列課程', tagline: '學會指揮 AI，成為數位時代的創作者', icon: 'assets/images/icon/AI_ICON.png', color: 'blue', url: 'courses-ai.html' }
  ];
  let html = '<div class="category-cards-grid-refined">';
  categories.forEach(cat => {
    const count = (typeof COURSES !== 'undefined' && COURSES[cat.id]) ? COURSES[cat.id].length : 0;
    html += `
      <a href="${cat.url}" class="cat-card-glass" style="--accent: var(--color-${cat.color})">
        <div class="cat-card-top">
          <span class="cat-card-pill" style="background-color: var(--color-${cat.color}-bg); color: var(--color-${cat.color})">共 ${count} 門課</span>
          <div class="cat-card-icon-box">
            <img src="${cat.icon}" alt="${cat.title}" class="cat-card-icon-img">
          </div>
        </div>
        <div class="cat-card-body">
          <h3 class="cat-card-name">${cat.title}</h3>
          <p class="cat-card-tagline">${cat.tagline}</p>
        </div>
        <div class="cat-card-footer-refined">
          <span class="cat-card-link">瀏覽此類別 <span class="arrow">→</span></span>
        </div>
      </a>`;
  });
  html += '</div>';
  container.innerHTML = html;
};

window.renderSelectionGuide = function () {
  const container = document.getElementById('selection-guide');
  if (!container) return;
  container.innerHTML = `
    <section class="selection-feature-section animate-on-scroll slide-up">
      <div class="section-badge">GROWTH GUIDE</div>
      <h2 class="section-title-center">不知道怎麼選？ <span>為您精準指南</span></h2>
      <div class="selection-feature-grid">
        <div class="feature-card-refined">
          <div class="feature-icon">🎒</div>
          <h4 class="feature-age">大班至小三 (K-G3)</h4>
          <h3 class="feature-cat teal">Mini 啟蒙班</h3>
          <p class="feature-desc">喜歡動手玩、需要老師引導、對電腦充滿好奇心</p>
        </div>
        <div class="feature-card-refined">
          <div class="feature-icon">⛏️</div>
          <h4 class="feature-age">中年級以上 (G3-G6)</h4>
          <h3 class="feature-cat purple">Minecraft 邏輯營</h3>
          <p class="feature-desc">蓋一座城市，設計一個系統，打造一個世界</p>
        </div>
        <div class="feature-card-refined">
          <div class="feature-icon">🎮</div>
          <h4 class="feature-age">高年級/國中 (G5-G9)</h4>
          <h3 class="feature-cat coral">Roblox 開發者</h3>
          <p class="feature-desc">設計地圖、寫程式、辦對戰賽，五天完成一款遊戲</p>
        </div>
        <div class="feature-card-refined">
          <div class="feature-icon">✨</div>
          <h4 class="feature-age">跨年級 (G4-G9)</h4>
          <h3 class="feature-cat blue">AI 創意工作坊</h3>
          <p class="feature-desc">不只是用 AI，而是真正懂 AI 在做什麼</p>
        </div>
      </div>
    </section>`;
};

window.renderActivityBanner = function () {
  const container = document.getElementById('activity-banner');
  if (!container) return;

  const activityImages = [
    { img: 'assets/images/activities/skating-1.png', title: '專業溜冰指導' },
    { img: 'assets/images/activities/skating-2.png', title: '溜冰技巧練習' },
    { img: 'assets/images/activities/skating-3.png', title: '溜冰歡樂時光' },
    { img: 'assets/images/activities/climbing-1.png', title: '室內攀岩挑戰' },
    { img: 'assets/images/activities/climbing-2.png', title: '攀岩手感訓練' },
    { img: 'assets/images/activities/climbing-3.png', title: '專業攀岩教練' },
    { img: 'assets/images/activities/golf-1.png', title: '兒童高爾夫' },
    { img: 'assets/images/activities/golf-2.png', title: '精準推桿練習' },
    { img: 'assets/images/activities/golf-3.png', title: '高爾夫禮儀' },
    { img: 'assets/images/activities/baking-1.png', title: '小主廚烘焙' },
    { img: 'assets/images/activities/baking-2.png', title: '創意蛋糕裝飾' },
    { img: 'assets/images/activities/baking-3.png', title: '烘焙成果分享' },
    { img: 'assets/images/activities/art-1.png', title: '創意美術空間' }
  ];

  container.innerHTML = `
    <section class="activity-immersive-section">
      <div class="container mobile-container">
        <div class="activity-box-refined slide-up">
          <div class="activity-info-part">
            <div class="label-orange">這不只是一個程式營</div>
            <h2 class="activity-h2">上午寫程式，<br>下午玩翻天！</h2>
            <p class="activity-p">除了紮實的課程，我們更注重孩子的身心發展。溜冰、攀岩、高爾夫、烘焙、美術等多元探索活動，讓孩子在學習之餘也能盡情開發潛能、享受暑假。</p>
          </div>
          <div class="activity-visual-part">
            <div class="act-visual-item"><span class="icon">⛸️</span><p>溜冰</p></div>
            <div class="act-visual-item"><span class="icon">🧗</span><p>攀岩</p></div>
            <div class="act-icon-row-2">
              <div class="act-visual-item"><span class="icon">⛳</span><p>高爾夫</p></div>
              <div class="act-visual-item"><span class="icon">🍰</span><p>烘焙</p></div>
            </div>
            <div class="act-visual-item"><span class="icon">🎨</span><p>美術手作</p></div>
          </div>
        </div>

        <!-- 下午活動輪播區 -->
        <div class="activity-carousel-section animate-on-scroll slide-up">
          <div id="activity-carousel-main" class="activity-carousel-wrapper"></div>
        </div>
      </div>
    </section>`;

  setTimeout(() => {
    window.createCarousel('#activity-carousel-main', {
      items: activityImages,
      mode: 'slide',
      interval: 4000,
      itemsPerView: { desktop: 3, tablet: 2, mobile: 1 }
    });
  }, 100);
};