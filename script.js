// ====== ДАННЫЕ УСЛУГ ======
const servicesData = [
  {
    "id": "telegram-bot",
    "title": "Telegram-бот под ключ",
    "description": "Разработка чат-бота по вашему техническому заданию. Аналитика, рассылки, интеграции с сервисами, воронки, админ-панели и прочая логика.",
    "price": "от 7 000 до 15 000 ₽",
    "badge": "Популярно",
    "features": [
      "Интеграция с API",
      "Админ-панель",
      "Автоматические рассылки",
      "Воронки продаж"
    ]
  },
  {
    "id": "from-the-void",
    "title": "FromTheVoid — конструктор ботов",
    "description": "Кроссплатформенное приложение для создания Telegram-ботов с внутренним редактором. Собирайте ботов без кода, визуально настраивая логику.",
    "price": "Скоро",
    "badge": "Скоро",
    "features": [
      "Визуальный редактор",
      "Кроссплатформенность",
      "Шаблоны сценариев",
      "Экспорт готового бота"
    ]
  },
  {
    "id": "parser-app",
    "title": "Парсер сервисов и сайтов",
    "description": "Кроссплатформенное приложение для сбора данных с веб-ресурсов и интеграции с различными сервисами.",
    "price": "Скоро",
    "badge": "В разработке",
    "features": [
      "Гибкие настройки сбора",
      "Интеграция с базами данных",
      "Автоматизация выгрузки"
    ]
  },
  {
    "id": "telegram-bot",
    "title": "Telegram-бот под ключ",
    "description": "Разработка чат-бота по вашему техническому заданию. Аналитика, рассылки, интеграции с сервисами, воронки, админ-панели и прочая логика.",
    "price": "от 7 000 до 15 000 ₽",
    "badge": "Популярно",
    "features": [
      "Интеграция с API",
      "Админ-панель",
      "Автоматические рассылки",
      "Воронки продаж"
    ]
  },
  {
    "id": "telegram-bot",
    "title": "Telegram-бот под ключ",
    "description": "Разработка чат-бота по вашему техническому заданию. Аналитика, рассылки, интеграции с сервисами, воронки, админ-панели и прочая логика.",
    "price": "от 7 000 до 15 000 ₽",
    "badge": "Популярно",
    "features": [
      "Интеграция с API",
      "Админ-панель",
      "Автоматические рассылки",
      "Воронки продаж"
    ]
  }

];

// ====== РЕНДЕР КАРТОЧЕК ======
function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  // Очищаем только реальные карточки, не трогаем заглушки
  const existingCards = grid.querySelectorAll('.service-card:not(.service-card--placeholder)');
  existingCards.forEach(card => card.remove());
  // Также удаляем старые заглушки, они будут добавлены заново при необходимости
  const existingPlaceholders = grid.querySelectorAll('.service-card--placeholder');
  existingPlaceholders.forEach(card => card.remove());

  services.forEach(service => {
    const card = document.createElement('article');
    card.className = 'service-card';

    const badgeHtml = service.badge
      ? `<span class="service-badge">${service.badge}</span>`
      : '';

    const featuresHtml = service.features && service.features.length
      ? '<ul class="service-features">' +
        service.features.map(f => `<li>${f}</li>`).join('') +
        '</ul>'
      : '';

    card.innerHTML = `
      ${badgeHtml}
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <p class="service-price">${service.price}</p>
      ${featuresHtml}
    `;

    grid.appendChild(card);
  });

  fillEmptySlots();
}

// ====== ЗАГЛУШКИ ДЛЯ ЗАПОЛНЕНИЯ СЕТКИ ======
function fillEmptySlots() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  // Удаляем существующие заглушки
  grid.querySelectorAll('.service-card--placeholder').forEach(el => el.remove());

  // Определяем количество колонок
  const gridStyle = window.getComputedStyle(grid);
  const columnCount = gridStyle.gridTemplateColumns.split(' ').length;

  // Если одна колонка — заглушки не нужны
  if (columnCount <= 1) return;

  // Считаем количество реальных карточек (не заглушек)
  const realCards = grid.querySelectorAll('.service-card:not(.service-card--placeholder)');
  const realCount = realCards.length;

  // Сколько карточек нужно для полного ряда
  const remainder = realCount % columnCount;
  if (remainder === 0) return; // сетка уже заполнена

  const placeholdersNeeded = columnCount - remainder;

  for (let i = 0; i < placeholdersNeeded; i++) {
    const placeholder = document.createElement('div');
    placeholder.className = 'service-card service-card--placeholder';
    placeholder.setAttribute('aria-hidden', 'true');
    placeholder.innerHTML = `
      <span class="placeholder-icon">+</span>
      <span class="placeholder-text">Скоро новый продукт</span>
    `;
    grid.appendChild(placeholder);
  }
}

// ====== ФОРМА (если раскомментируете) ======
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();

  if (!name || !email) {
    alert('Пожалуйста, заполните обязательные поля');
    return;
  }

  const subject = encodeURIComponent(`Заявка с сайта Void от ${name}`);
  const body = encodeURIComponent(
    `Имя: ${name}\nКонтакт: ${email}\n\nСообщение:\n${message || 'Не указано'}`
  );
  window.location.href = `mailto:f4ustth3vo1d@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    alert('Спасибо! Ваша заявка отправлена.');
    form.reset();
  }, 500);
}

// ====== АНИМАЦИЯ ПОЯВЛЕНИЯ ======
function setupScrollAnimations() {
  const elements = document.querySelectorAll('.service-card:not(.service-card--placeholder), .example-card, .pricing-table-wrapper');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ====== ОБРАБОТЧИК ИЗМЕНЕНИЯ РАЗМЕРА ОКНА ======
function handleResize() {
  fillEmptySlots();
}

// ====== ИНИЦИАЛИЗАЦИЯ ======
document.addEventListener('DOMContentLoaded', () => {
  renderServices(servicesData);
  setupScrollAnimations();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Пересчитываем заглушки при изменении размера окна
  window.addEventListener('resize', handleResize);
});