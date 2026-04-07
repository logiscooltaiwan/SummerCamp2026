document.addEventListener('DOMContentLoaded', () => {
  // 設定延遲以確保 components.js 中的 innerHTML 已經插入完畢
  setTimeout(() => {
    // ============================
    // 1. 滾動超過 100px 固定於頂部
    // ============================
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      });
    }

    // (手機版漢堡選單與 RWD 邏輯已移至 components.js 統一管理)

    // (3. 手機版下拉選單展開邏輯已統一在 components.js 處理)

    // ============================
    // 4. 點擊連結後自動關閉手機版選單
    // ============================
    const allLinks = document.querySelectorAll('.nav-link:not(.has-dropdown > .nav-link), .dropdown-link, .btn-register');
    
    allLinks.forEach(link => {
      link.addEventListener('click', () => {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        if (window.innerWidth <= 767 && hamburger && hamburger.classList.contains('active')) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // ============================
    // 5. 設定 Hero 區塊的註冊連結 (加上 UTM)
    // ============================
    const heroBtn = document.getElementById('hero-register-btn');
    if (heroBtn && typeof CONFIG !== 'undefined') {
      let finalUrl = CONFIG.registrationUrl;
      try {
        const url = new URL(CONFIG.registrationUrl, window.location.origin);
        url.searchParams.set('utm_source', CONFIG.utmSource);
        url.searchParams.set('utm_medium', CONFIG.utmMedium);
        url.searchParams.set('utm_campaign', CONFIG.utmCampaign);
        finalUrl = url.toString();
      } catch (e) {
        // Fallback for placeholder URLs like https://【...】
        const sep = finalUrl.includes('?') ? '&' : '?';
        finalUrl += `${sep}utm_source=${CONFIG.utmSource}&utm_medium=${CONFIG.utmMedium}&utm_campaign=${CONFIG.utmCampaign}`;
      }
      heroBtn.href = finalUrl;
    }


    // ============================
    // 6. 渲染亮點數字與 Count-up 動畫
    // ============================
    const highlightsContainer = document.getElementById('highlights-container');
    if (highlightsContainer && typeof CONFIG !== 'undefined' && CONFIG.highlights) {
      CONFIG.highlights.forEach((item, index) => {
        // 取餘數來循環 4 種顏色 (0~3)
        const colorClass = `color-${index % 4}`;
        const cardHTML = `
          <div class="highlight-card ${colorClass}">
            <div class="highlight-number-wrap">
              <span class="count-up-number" data-target="${item.number}">0</span><span class="suffix">${item.suffix}</span>
            </div>
            <div class="highlight-label">${item.label}</div>
          </div>
        `;
        highlightsContainer.insertAdjacentHTML('beforeend', cardHTML);
      });

      // 設定 Intersection Observer 進行 Count-up 動畫
      const countUpElements = document.querySelectorAll('.count-up-number');
      const duration = 1500; // 1.5 秒

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              // 使用 easeOutExpo easing 讓數字跳動逐漸減慢
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              
              el.innerText = Math.floor(easeProgress * target);
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                el.innerText = target;
              }
            };
            
            // 尊重減少動畫設定
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) {
              el.innerText = target;
            } else {
              window.requestAnimationFrame(step);
            }
            
            observer.unobserve(el); // 觸發一次後停止監聽
          }
        });
      }, observerOptions);

      countUpElements.forEach(el => observer.observe(el));
    }


    // ============================
    // 7. 渲染課程分類入口
    // ============================
    const categoriesGrid = document.getElementById('categories-grid');
    if (categoriesGrid) {
      const categoriesData = (typeof CONFIG !== 'undefined' && CONFIG.categories) ? CONFIG.categories : [
        { name: 'Mini 低年級啟蒙班', count: 5, url: 'courses-mini.html', icon: 'assets/images/Icon/Mini_ICON.png', bgVar: '--color-teal-bg', textVar: '--color-teal-text', age: '適合年齡：6歲～3年級' },
        { name: 'Minecraft 系列課程', count: 5, url: 'courses-mc.html', icon: 'assets/images/Icon/MC_ICON.png', bgVar: '--color-purple-bg', textVar: '--color-purple-text', age: '適合年齡：4年級以上' },
        { name: 'Roblox 系列課程', count: 5, url: 'courses-roblox.html', icon: 'assets/images/Icon/Roblox_ICON.png', bgVar: '--color-coral-bg', textVar: '--color-coral-text', age: '適合年齡：4年級以上' },
        { name: 'AI 系列課程', count: 4, url: 'courses-ai.html', icon: 'assets/images/Icon/AI_ICON.png', bgVar: '--color-blue-bg', textVar: '--color-blue-text', age: '適合年齡：3年級以上' }
      ];

      categoriesData.forEach(cat => {
        const cardHTML = `
          <a href="${cat.url}" class="category-card animate-on-scroll slide-up" style="background-color: var(${cat.bgVar});">
            <div class="category-icon">
              <img src="${cat.icon}" alt="${cat.name}" style="width: 64px; height: 64px; object-fit: contain;">
            </div>
            <h3 class="category-name" style="color: var(${cat.textVar});">${cat.name}</h3>
            <div class="category-age" style="color: var(${cat.textVar});">${cat.age}</div>
            <div class="category-count">${cat.count} 門課</div>
            <div class="category-link-text" style="color: var(${cat.textVar});">查看課程</div>
          </a>
        `;
        categoriesGrid.insertAdjacentHTML('beforeend', cardHTML);
      });
    }



    // ============================
    // 8. 渲染下午活動與 Carousel
    // ============================
    const activitiesTrack = document.getElementById('activities-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    // Default configuration for afternoon activities if CONFIG is not completely defined
    const defaultActivities = [
      { name: "溜冰", emoji: "⛸️", image: "溜冰.jpeg" },
      { name: "攀岩", emoji: "🧗‍♂️", image: "攀岩.jpeg" },
      { name: "高爾夫", emoji: "🏌️", image: "高爾夫.jpeg" },
      { name: "烘焙", emoji: "🧁", image: "烘焙.JPG" },
      { name: "美術", emoji: "🎨", image: "美術.jpeg" },
      { name: "雷射槍", emoji: "🔫", image: "雷射槍.JPG" }
    ];

    if (activitiesTrack) {
      const activitiesData = (typeof CONFIG !== 'undefined' && CONFIG.afternoonActivities) ? CONFIG.afternoonActivities : defaultActivities;
      // 1. 渲染卡片
      activitiesData.forEach(act => {
        const cardHTML = `
          <div class="activity-card">
            <div class="activity-image-wrapper" style="width: 100%; aspect-ratio: 4 / 3; display: block; overflow: hidden; background-color: #E2E2E2;">
              <img src="./assets/images/${act.image}" alt="${act.name}活動" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div class="activity-info">
              <span class="activity-emoji">${act.emoji}</span>
              <span class="activity-name">${act.name}</span>
            </div>
          </div>
        `;
        activitiesTrack.insertAdjacentHTML('beforeend', cardHTML);
      });

      // 2. Carousel 互動邏輯 (桌機/平板版)
      let currentIndex = 0;
      let cardWidth = 0;
      let gap = 24;

      const updateCarousel = () => {
        if (window.innerWidth <= 767) {
          activitiesTrack.style.transform = '';
          return;
        }
        const cards = activitiesTrack.querySelectorAll('.activity-card');
        if (cards.length > 0) {
          cardWidth = cards[0].offsetWidth;
          const viewportWidth = document.getElementById('carousel-viewport').offsetWidth;
          
          // 根據 CSS 的 RWD 規則手動配置可視數量，確保不被小數點誤差導致卡死
          const maxVisible = window.innerWidth <= 1024 ? 2 : 3;
          const maxIndex = Math.max(0, cards.length - maxVisible);
          
          if (currentIndex > maxIndex) currentIndex = maxIndex;
          if (currentIndex < 0) currentIndex = 0;

          const moveDistance = currentIndex * (cardWidth + gap);
          activitiesTrack.style.transform = `translateX(-${moveDistance}px)`;
        }
      };

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => { currentIndex--; updateCarousel(); });
        nextBtn.addEventListener('click', () => { currentIndex++; updateCarousel(); });
      }

      window.addEventListener('resize', updateCarousel);
      setTimeout(updateCarousel, 100);

      // 3. 支援觸控滑動
      let startX = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let isDragging = false;
      let dragStartTime = 0;

      activitiesTrack.addEventListener('touchstart', (e) => {
        if (window.innerWidth <= 767) return;
        startX = e.touches[0].clientX;
        isDragging = true;
        activitiesTrack.style.transition = 'none';
        
        const style = window.getComputedStyle(activitiesTrack);
        const matrix = new DOMMatrixReadOnly(style.transform);
        prevTranslate = matrix.m41;
        dragStartTime = Date.now();
      }, { passive: true });

      activitiesTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
        activitiesTrack.style.transform = `translateX(${currentTranslate}px)`;
      }, { passive: true });

      activitiesTrack.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        activitiesTrack.style.transition = 'transform 0.4s ease-out';
        
        const diff = currentTranslate - prevTranslate;
        const timeDiff = Date.now() - dragStartTime;
        
        if (Math.abs(diff) > 50 || (Math.abs(diff) > 20 && timeDiff < 300)) {
          if (diff > 0) currentIndex--;
          else currentIndex++;
        }
        updateCarousel(); // 超界保護與對齊會在這裡執行
      });
    }

    // ============================
    // 9. 渲染定價方案與加碼優惠
    // ============================
    const pricingGrid = document.getElementById('pricing-grid');
    const bonusGrid = document.getElementById('bonus-grid');
    const originalPriceDisplay = document.getElementById('original-price-display');

    if (pricingGrid && typeof CONFIG !== 'undefined' && CONFIG.pricing) {
      // 不顯示原價
      if (originalPriceDisplay) {
        originalPriceDisplay.style.display = 'none';
      }

      const today = new Date();
      // 將時間設為當天開始，方便對比
      today.setHours(0, 0, 0, 0);

      // 尋找最近有效的方案 (deadline >= today)
      let activePhaseIndex = -1;
      for (let i = 0; i < CONFIG.pricing.phases.length; i++) {
        const phaseDate = new Date(CONFIG.pricing.phases[i].deadline);
        if (phaseDate >= today) {
          activePhaseIndex = i;
          break;
        }
      }

      // 如果全部都過期了，預設最後一個標為 active
      if (activePhaseIndex === -1 && CONFIG.pricing.phases.length > 0) {
        activePhaseIndex = CONFIG.pricing.phases.length - 1;
      }

      // 產生定價卡片
      CONFIG.pricing.phases.forEach((phase, index) => {
        const isActive = index === activePhaseIndex;
        const activeBadge = isActive ? `<div class="badge-active">現正優惠中</div>` : '';
        const cardClass = isActive ? 'pricing-card active' : 'pricing-card';

        // 報名連結 UTM
        let finalUrl = CONFIG.registrationUrl;
        try {
          const url = new URL(finalUrl, window.location.origin);
          url.searchParams.set('utm_source', CONFIG.utmSource);
          url.searchParams.set('utm_medium', 'pricing_card');
          url.searchParams.set('utm_campaign', CONFIG.utmCampaign);
          finalUrl = url.toString();
        } catch(e) {
          const sep = finalUrl.includes('?') ? '&' : '?';
          finalUrl += `${sep}utm_source=${CONFIG.utmSource}&utm_medium=pricing_card&utm_campaign=${CONFIG.utmCampaign}`;
        }

        const cardHTML = `
          <div class="${cardClass}">
            ${activeBadge}
            <h3 class="pricing-name" style="color: var(${phase.colorVar}); font-size: 2.2rem; margin: 40px 0; font-weight: bold;">${phase.name}優惠</h3>
            <div class="pricing-deadline">
              ${phase.displayDeadline || phase.deadline.replace(/-/g, '/')}
            </div>
            <a href="${finalUrl}" class="btn-pricing" style="background-color: var(${phase.colorVar})">立即報名</a>
          </div>
        `;
        pricingGrid.insertAdjacentHTML('beforeend', cardHTML);
      });
    }

    // ============================
    // 10. 渲染時程表
    // ============================
    const scheduleContent = document.getElementById('schedule-content');
    const mobileSelect = document.getElementById('mobile-week-select');
    const tabBtns = document.querySelectorAll('.tab-btn');

    if (scheduleContent && typeof CONFIG !== 'undefined' && CONFIG.schedule) {
      const months = ['july', 'august'];
      
      const getCategoryDetails = (courseName) => {
        if (courseName.includes('麥塊')) return { name: 'MC', bg: 'var(--color-purple-bg)', color: 'var(--color-purple)' };
        if (courseName.toLowerCase().includes('roblox')) return { name: 'Roblox', bg: 'var(--color-coral-bg)', color: 'var(--color-coral)' };
        if (courseName.toLowerCase().includes('ai') || courseName.includes('短影片')) return { name: 'AI', bg: 'var(--color-blue-bg)', color: 'var(--color-blue)' };
        return { name: 'Mini', bg: 'var(--color-teal-bg)', color: 'var(--color-teal)' };
      };

      months.forEach(month => {
        if (CONFIG.schedule[month]) {
          CONFIG.schedule[month].forEach(weekObj => {
            
            // 產生 Mobile Select Option
            if (mobileSelect) {
              mobileSelect.insertAdjacentHTML('beforeend', `<option value="${weekObj.week}">第 ${weekObj.week} 週 (${weekObj.dates})</option>`);
            }
            
            // 產生卡片
            const noteBadge = weekObj.note ? `<span class="schedule-note">${weekObj.note}</span>` : '';
            
            let coursesHTML = '';
            weekObj.courses.forEach(course => {
              const tag = getCategoryDetails(course);
              coursesHTML += `
                <div class="schedule-course">
                  <span class="course-tag" style="background-color:${tag.bg}; color:${tag.color}">${tag.name}</span>
                  <span class="course-name">${course}</span>
                </div>
              `;
            });

            const cardHTML = `
              <div class="week-card" data-month="${month}" data-week="${weekObj.week}">
                <div class="week-header">
                  <h3 class="week-title">第 ${weekObj.week} 週</h3>
                  <span class="week-dates">${weekObj.dates}</span>
                  ${noteBadge}
                </div>
                <div class="week-courses">
                  ${coursesHTML}
                </div>
              </div>
            `;
            
            scheduleContent.insertAdjacentHTML('beforeend', cardHTML);
          });
        }
      });

      // Desktop Tab 邏輯
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const targetMonth = btn.getAttribute('data-month');
          scheduleContent.className = 'schedule-content show-' + targetMonth;
        });
      });

      // Mobile Select 邏輯
      if (mobileSelect) {
        mobileSelect.addEventListener('change', (e) => {
          const targetWeek = e.target.value;
          document.querySelectorAll('.week-card').forEach(card => {
            if (card.getAttribute('data-week') === targetWeek) {
              card.classList.add('active-mobile');
            } else {
              card.classList.remove('active-mobile');
            }
          });
        });
        mobileSelect.dispatchEvent(new Event('change'));
      }
      
      scheduleContent.className = 'schedule-content show-july';
    }

    // ============================
    // 11. FAQ 渲染與 Accordion 邏輯
    // ============================
    const homeAccordion = document.getElementById('home-accordion');
    if (homeAccordion && typeof FAQ !== 'undefined') {
      // 攤平 FAQ 資料，取出所有問題，並限制顯示前 6 題
      const displayQuestions = FAQ.flatMap(cat => cat.questions).slice(0, 6);

      displayQuestions.forEach(item => {
        const itemHTML = `
          <div class="accordion-item animate-on-scroll slide-up">
            <button class="accordion-header" aria-expanded="false">
              <span class="accordion-title">${item.q}</span>
              <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-content">
              <div class="accordion-content-inner">
                ${item.a}
              </div>
            </div>
          </div>
        `;
        homeAccordion.insertAdjacentHTML('beforeend', itemHTML);
      });
    }

    // 綁定點擊事件 (採委派方式或在渲染後重新選取)
    // 排除 faq-container-full 內的項目（由 faq.js 的 event delegation 處理）
    const accordionHeaders = document.querySelectorAll('.accordion-header:not(#faq-container-full .accordion-header)');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        // 收合其他已展開的項目
        const currentItem = header.parentElement;
        const isExpanded = currentItem.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
          const content = item.querySelector('.accordion-content');
          if (content) content.style.maxHeight = null;
          const btn = item.querySelector('.accordion-header');
          if (btn) {
            btn.setAttribute('aria-expanded', 'false');
            const icon = btn.querySelector('.accordion-icon');
            if (icon) icon.innerText = '+';
          }
        });

        // 展開當前的項目
        if (!isExpanded) {
          currentItem.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          const icon = header.querySelector('.accordion-icon');
          if (icon) icon.innerText = '−'; // 使用減號
          const content = currentItem.querySelector('.accordion-content');
          if (content) {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        }
      });
    });

    // ============================
    // 12. 滾動進入動畫 (Intersection Observer)
    // ============================
    const scrollObserverOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const prefersReducedMotionScroll = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotionScroll && 'IntersectionObserver' in window) {
      const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, scrollObserverOptions);

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
      });
    } else {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('is-visible');
      });
    }

  }, 50);
});

