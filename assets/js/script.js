// ====== ДАННЫЕ УСЛУГ / SERVICES DATA ======
const servicesData = [
  {
    id: "telegram-bot",
    title: {
      ru: "Telegram-бот под ключ",
      en: "Turnkey Telegram bot"
    },
    description: {
      ru: "Разработка чат-бота по вашему техническому заданию. Аналитика, рассылки, интеграции с сервисами, воронки, админ-панели и прочая логика",
      en: "Custom chatbot development based on your specification. Analytics, broadcasts, service integrations, funnels, admin panels and other logic"
    },
    price: {
      ru: "от 7 000 до 15 000 ₽",
      en: "from 7,000 to 15,000 RUB"
    },
    badge: {
      ru: "Популярно",
      en: "Popular"
    },
    features: {
      ru: [
        "Интеграция с API",
        "Админ-панель",
        "Автоматические рассылки",
        "Воронки продаж"
      ],
      en: [
        "API integration",
        "Admin panel",
        "Automated broadcasts",
        "Sales funnels"
      ]
    }
  },
  {
    id: "VoidBots",
    title: {
      ru: "VoidBots — конструктор ботов",
      en: "VoidBots — bot builder"
    },
    description: {
      ru: "Кроссплатформенное приложение для создания Telegram-ботов с внутренним редактором. Собирайте ботов без кода, визуально настраивая логику",
      en: "Cross-platform app for building Telegram bots with a built-in editor. Assemble bots without code, configuring logic visually"
    },
    price: {
      ru: "Скоро",
      en: "Coming soon"
    },
    badge: {
      ru: "Скоро",
      en: "Coming soon"
    },
    features: {
      ru: [
        "Визуальный редактор",
        "Кроссплатформенность",
        "Шаблоны сценариев",
        "Экспорт готового бота"
      ],
      en: [
        "Visual editor",
        "Cross-platform",
        "Scenario templates",
        "Export a finished bot"
      ]
    }
  },
  {
    id: "parser-app",
    title: {
      ru: "Парсер сервисов и сайтов",
      en: "Web & service parser"
    },
    description: {
      ru: "Кроссплатформенное приложение для сбора данных с веб-ресурсов и интеграции с различными сервисами",
      en: "Cross-platform app for scraping data from web resources and integrating with various services"
    },
    price: {
      ru: "Скоро",
      en: "Coming soon"
    },
    badge: {
      ru: "В разработке",
      en: "In development"
    },
    features: {
      ru: [
        "Гибкие настройки сбора",
        "Интеграция с базами данных",
        "Автоматизация выгрузки"
      ],
      en: [
        "Flexible scraping settings",
        "Database integration",
        "Automated data export"
      ]
    }
  },
  {
    id: "VoidTeX",
    title: {
      ru: "VoidTeX — удобный, кроссплатформенный редактор для LaTeX-документов",
      en: "VoidTeX — a convenient cross-platform editor for LaTeX documents"
    },
    description: {
      ru: "Удобный редактор для создания, редактирования LaTeX-документов",
      en: "A handy editor for creating and editing LaTeX documents"
    },
    price: {
      ru: "Бесплатно",
      en: "Free"
    },
    badge: {
      ru: "В разработке",
      en: "In development"
    },
    features: {
      ru: [
        "Современный интерфейс",
        "Интеграция с git",
        "Динамический просмотр документов"
      ],
      en: [
        "Modern interface",
        "Git integration",
        "Live document preview"
      ]
    }
  }
];

// ====== РЕНДЕР КАРТОЧЕК ======
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.querySelectorAll(".service-card:not(.service-card--placeholder)")
    .forEach(card => card.remove());
  grid.querySelectorAll(".service-card--placeholder")
    .forEach(card => card.remove());

  servicesData.forEach(service => {
    const card = document.createElement("article");
    card.className = "service-card";

    const badgeText = pickLocalized(service.badge);
    const badgeHtml = badgeText
      ? `<span class="service-badge">${badgeText}</span>`
      : "";

    const featuresList = pickLocalized(service.features) || [];
    const featuresHtml = featuresList.length
      ? '<ul class="service-features">' +
        featuresList.map(f => `<li>${f}</li>`).join("") +
        "</ul>"
      : "";

    card.innerHTML = `
      ${badgeHtml}
      <h3 class="service-title">${pickLocalized(service.title)}</h3>
      <p class="service-description">${pickLocalized(service.description)}</p>
      <p class="service-price">${pickLocalized(service.price)}</p>
      ${featuresHtml}
    `;

    grid.appendChild(card);
  });

  fillEmptySlots();
}

// ====== ЗАГЛУШКИ ======
function fillEmptySlots() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.querySelectorAll(".service-card--placeholder").forEach(el => el.remove());

  const gridStyle = window.getComputedStyle(grid);
  const columnCount = gridStyle.gridTemplateColumns.split(" ").length;
  if (columnCount <= 1) return;

  const realCards = grid.querySelectorAll(".service-card:not(.service-card--placeholder)");
  const remainder = realCards.length % columnCount;
  if (remainder === 0) return;

  const placeholdersNeeded = columnCount - remainder;

  for (let i = 0; i < placeholdersNeeded; i++) {
    const placeholder = document.createElement("div");
    placeholder.className = "service-card service-card--placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.innerHTML = `
      <span class="placeholder-icon">+</span>
      <span class="placeholder-text">${t("services.placeholder")}</span>
    `;
    grid.appendChild(placeholder);
  }
}

// ====== ФОРМА ======
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();

  if (!name || !email) {
    alert(currentLang === "en"
      ? "Please fill in the required fields"
      : "Пожалуйста, заполните обязательные поля");
    return;
  }

  const subject = encodeURIComponent(
    currentLang === "en"
      ? `Request from Void site — ${name}`
      : `Заявка с сайта Void от ${name}`
  );
  const body = encodeURIComponent(
    currentLang === "en"
      ? `Name: ${name}\nContact: ${email}\n\nMessage:\n${message || "Not specified"}`
      : `Имя: ${name}\nКонтакт: ${email}\n\nСообщение:\n${message || "Не указано"}`
  );
  window.location.href = `mailto:f4ustth3vo1d@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    alert(currentLang === "en"
      ? "Thank you! Your request has been sent."
      : "Спасибо! Ваша заявка отправлена.");
    form.reset();
  }, 500);
}

// ====== АНИМАЦИЯ ПОЯВЛЕНИЯ ======
function setupScrollAnimations() {
  const elements = document.querySelectorAll(
    ".service-card:not(.service-card--placeholder), .example-card, .pricing-table-wrapper"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ====== RESIZE ======
function handleResize() {
  fillEmptySlots();
}

// ====== ИНИЦИАЛИЗАЦИЯ ======
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  setupScrollAnimations();

  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", handleFormSubmit);

  document.addEventListener("langchange", () => {
    renderServices();
  });

  window.addEventListener("resize", handleResize);
});