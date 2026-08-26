// ====== ДАННЫЕ УСЛУГ ======
// Меняйте этот массив, чтобы обновить карточки услуг
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
    "badge": "В разработке",
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
  }
];

// ====== РЕНДЕР КАРТОЧЕК ======
function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = '';

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
  const elements = document.querySelectorAll('.service-card, .example-card, .pricing-table-wrapper');
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

// ====== ИНИЦИАЛИЗАЦИЯ ======
document.addEventListener('DOMContentLoaded', () => {
  renderServices(servicesData);
  setupScrollAnimations();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});