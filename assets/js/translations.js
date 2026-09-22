// ====== ПЕРЕВОДЫ / TRANSLATIONS ======
// Все строки интерфейса + состояние языка + helper-функции.
// При добавлении нового языка — дублируй блок ru/en и меняй значения.

const translations = {
  ru: {
    // Мета
    "meta.title": "Void — автоматизация бизнеса",
    "meta.title.404": "404 — Void",

    // Шапка
    "nav.services": "Услуги",
    "nav.pricing": "Цены",
    "nav.example": "Пример",
    "nav.contact": "Контакты",
    "nav.cta": "Оставить заявку",

    // Hero
    "hero.subtitle": "Автоматизация бизнеса через Telegram",
    "hero.title": "Void — технологии, которые работают на вас",
    "hero.description": "Разрабатываю Telegram-ботов под ключ, создаю инструменты для конструирования ботов и парсинга данных. Малому и среднему бизнесу — понятные решения без лишней сложности",
    "hero.btn.services": "Смотреть услуги",
    "hero.btn.example": "Пример",
    "hero.stats.directions": "направления",
    "hero.stats.spec": "по ТЗ",
    "hero.stats.support": "поддержка",

    // Услуги
    "services.label": "Что я предлагаю",
    "services.title": "Услуги и продукты",
    "services.desc": "Выберите подходящий формат автоматизации или свяжитесь со мной для обсуждения индивидуального проекта",
    "services.placeholder": "Скоро новый продукт",

    // Прайс-лист
    "pricing.label": "Прозрачные цены",
    "pricing.title": "Прайс-лист",
    "pricing.desc": "Точная стоимость зависит от сложности и объёма работ. Ниже — базовые ориентиры",
    "pricing.th.service": "Услуга",
    "pricing.th.description": "Описание",
    "pricing.th.price": "Стоимость",
    "pricing.row.bot.service": "Telegram-бот под ключ",
    "pricing.row.bot.description": "Разработка по строгому ТЗ с аналитикой и интеграциями",
    "pricing.row.bot.price": "от 7 000 до 15 000 ₽",
    "pricing.row.voidbots.service": "VoidBots — конструктор ботов",
    "pricing.row.voidbots.description": "Кроссплатформенное приложение с визуальным редактором",
    "pricing.row.voidbots.price": "Скоро",
    "pricing.row.parser.service": "Парсер сервисов и сайтов",
    "pricing.row.parser.description": "Кроссплатформенное приложение для сбора данных",
    "pricing.row.parser.price": "Скоро",
    "pricing.row.voidtex.service": "VoidTeX — редактор LaTeX-документов",
    "pricing.row.voidtex.description": "Кроссплатформенный редактор для удобной работы с LaTeX-документами",
    "pricing.row.voidtex.price": "Бесплатно",

    // Пример
    "example.label": "Готовый пример",
    "example.title": "Бот для суши-бара",
    "example.text1": "Пример-визитка: Telegram-бот <strong>@SushiBarSwallowBot</strong> для приёма заявок в суши-бар. Бот принимает заказы, уведомляет менеджера и ведёт запись клиентов — всё работает автоматически",
    "example.text2": "Вы можете протестировать его прямо сейчас, чтобы оценить качество и удобство",
    "example.cta": "Открыть бота в Telegram",
    "example.chat.header": "Суши-бар «Ласточка»",
    "example.chat.msg1": "🍣Добро пожаловать в Sushi Bar!",
    "example.chat.msg2": "<b>Посмотреть каталог</b>",
    "example.chat.msg3": "<b>Филадельфия классик</b> <br> Лосось, сливочный сыр, огурец, рис <br> ...",

    // Контакты
    "contact.label": "Свяжитесь со мной",
    "contact.title": "Обсудим ваш проект?",
    "contact.desc": "Оставьте заявку — я отвечу в течение рабочего дня. Расскажите кратко о задаче, и я предложу оптимальное решение",

    // Футер
    "footer.text": "© 2026 Void. Автоматизация бизнеса через Telegram",

    // 404
    "error404.label": "Ошибка 404",
    "error404.text": "Эта страница затянута в чёрную дыру. Возможно, её переместили, удалили или она никогда здесь не появлялась",
    "error404.btn.home": "Вернуться на главную",
    "error404.btn.back": "Назад",

    // Кнопка в карточках услуг
    "services.learnMore": "Подробнее",

    // Страница VoidTeX
    "meta.title.voidtex": "VoidTeX — Void",
    "voidtex.nav.back": "На главную",
    "voidtex.badge": "В разработке",
    "voidtex.subtitle": "Кроссплатформенный редактор LaTeX-документов",
    "voidtex.description": "Мы делаем работу с LaTeX простой и приятной. Современный интерфейс, интеграция с git и динамический просмотр документов — всё в одном приложении",
    "voidtex.btn.features": "Возможности",
    "voidtex.btn.contact": "Связаться",
    "voidtex.features.label": "Что внутри",
    "voidtex.features.title": "Возможности редактора",
    "voidtex.features.desc": "VoidTeX находится в активной разработке. Ниже — то, над чем мы работаем",
    "voidtex.feature.interface.title": "Современный интерфейс",
    "voidtex.feature.interface.desc": "Чистый и понятный редактор, в котором приятно писать. Продуманная типографика, подсветка синтаксиса и аккуратная компоновка панелей",
    "voidtex.feature.git.title": "Интеграция с git",
    "voidtex.feature.git.desc": "Встроенная поддержка контроля версий: коммиты, ветки и синхронизация с удалёнными репозиториями прямо из приложения",
    "voidtex.feature.preview.title": "Динамический просмотр документов",
    "voidtex.feature.preview.desc": "Мгновенный рендер LaTeX рядом с исходником. Изменения отображаются по мере набора, без ручной пересборки документа",
    "voidtex.status.title": "Скоро",
    "voidtex.status.desc": "VoidTeX находится в активной разработке. Следите за обновлениями — мы сообщим о релизе",
    "voidtex.status.cta": "Узнать больше",
  },

  en: {
    // Meta
    "meta.title": "Void — business automation",
    "meta.title.404": "404 — Void",

    // Header
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.example": "Example",
    "nav.contact": "Contacts",
    "nav.cta": "Get in touch",

    // Hero
    "hero.subtitle": "Business automation via Telegram",
    "hero.title": "Void — technology that works for you",
    "hero.description": "I build turnkey Telegram bots and create tools for bot building and data parsing. Clear solutions for small and medium businesses — without unnecessary complexity",
    "hero.btn.services": "View services",
    "hero.btn.example": "Example",
    "hero.stats.directions": "directions",
    "hero.stats.spec": "to spec",
    "hero.stats.support": "support",

    // Services
    "services.label": "What I offer",
    "services.title": "Services and products",
    "services.desc": "Choose the right automation format or get in touch to discuss a custom project",
    "services.placeholder": "A new product is coming soon",

    // Pricing
    "pricing.label": "Transparent pricing",
    "pricing.title": "Price list",
    "pricing.desc": "Exact cost depends on complexity and scope. Below are baseline estimates",
    "pricing.th.service": "Service",
    "pricing.th.description": "Description",
    "pricing.th.price": "Price",
    "pricing.row.bot.service": "Turnkey Telegram bot",
    "pricing.row.bot.description": "Development to a strict specification with analytics and integrations",
    "pricing.row.bot.price": "from 7,000 to 15,000 RUB",
    "pricing.row.voidbots.service": "VoidBots — bot builder",
    "pricing.row.voidbots.description": "Cross-platform app with a visual editor",
    "pricing.row.voidbots.price": "Coming soon",
    "pricing.row.parser.service": "Web & service parser",
    "pricing.row.parser.description": "Cross-platform app for data collection",
    "pricing.row.parser.price": "Coming soon",
    "pricing.row.voidtex.service": "VoidTeX — LaTeX document editor",
    "pricing.row.voidtex.description": "Cross-platform editor for convenient work with LaTeX documents",
    "pricing.row.voidtex.price": "Free",

    // Example
    "example.label": "Live example",
    "example.title": "Sushi bar bot",
    "example.text1": "Showcase: Telegram bot <strong>@SushiBarSwallowBot</strong> for taking orders at a sushi bar. The bot accepts orders, notifies the manager and keeps a client log — all running automatically",
    "example.text2": "You can try it right now to see the quality and convenience for yourself",
    "example.cta": "Open the bot in Telegram",
    "example.chat.header": "Sushi Bar Swallow",
    "example.chat.msg1": "🍣Welcome to Sushi Bar!",
    "example.chat.msg2": "<b>View catalog</b>",
    "example.chat.msg3": "<b>Philadelphia Classic</b> <br> Salmon, cream cheese, cucumber, rice <br> ...",

    // Contacts
    "contact.label": "Get in touch",
    "contact.title": "Let's discuss your project?",
    "contact.desc": "Leave a request — I'll reply within one business day. Briefly describe your task and I'll suggest the best solution",

    // Footer
    "footer.text": "© 2026 Void. Business automation via Telegram",

    // 404
    "error404.label": "Error 404",
    "error404.text": "This page has been swallowed by a black hole. It might have been moved, deleted, or never existed here at all",
    "error404.btn.home": "Back to home",
    "error404.btn.back": "Back",
    "services.learnMore": "Learn more",

    "meta.title.voidtex": "VoidTeX — Void",
    "voidtex.nav.back": "Back to home",
    "voidtex.badge": "In development",
    "voidtex.subtitle": "A cross-platform editor for LaTeX documents",
    "voidtex.description": "We make working with LaTeX simple and pleasant. A modern interface, git integration and live document preview — all in one app",
    "voidtex.btn.features": "Features",
    "voidtex.btn.contact": "Get in touch",
    "voidtex.features.label": "What's inside",
    "voidtex.features.title": "Editor features",
    "voidtex.features.desc": "VoidTeX is in active development. Here's what we're working on",
    "voidtex.feature.interface.title": "Modern interface",
    "voidtex.feature.interface.desc": "A clean, understandable editor that's a pleasure to write in. Thoughtful typography, syntax highlighting and a tidy panel layout",
    "voidtex.feature.git.title": "Git integration",
    "voidtex.feature.git.desc": "Built-in version control: commits, branches and remote sync — all from within the app",
    "voidtex.feature.preview.title": "Live document preview",
    "voidtex.feature.preview.desc": "Instant LaTeX rendering next to the source. Changes appear as you type, with no manual rebuilds",
    "voidtex.status.title": "Coming soon",
    "voidtex.status.desc": "VoidTeX is in active development. Stay tuned — we'll announce the release",
    "voidtex.status.cta": "Learn more",
  }
};

// ====== ШУТКИ ДЛЯ 404 ======
const jokes404 = {
  ru: [
    "Эта страница ушла в сингулярность. Обещала вернуться",
    "Мы отправили запрос в параллельную вселенную. Ответа нет",
    "Сюда даже свет не доходит. Что уж о странице говорить",
    "Простите, страница решила стать ботом и ушла в Telegram"
  ],
  en: [
    "This page fell into a singularity. It promised to come back",
    "We sent a request into a parallel universe. No response",
    "Even light doesn't reach here — let alone a page",
    "Sorry, the page decided to become a bot and left for Telegram"
  ]
};

// ====== СОСТОЯНИЕ ЯЗЫКА ======
const DEFAULT_LANG = "ru";
const SUPPORTED_LANGS = ["ru", "en"];
const LANG_STORAGE_KEY = "void-lang";

function getInitialLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const browserLang = (navigator.language || "").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
}

let currentLang = getInitialLang();

// ====== ХЕЛПЕРЫ ======
function t(key) {
  const dict = translations[currentLang] || translations[DEFAULT_LANG];
  return dict[key] !== undefined ? dict[key] : (translations[DEFAULT_LANG][key] || key);
}

function pickLocalized(obj) {
  if (obj == null) return "";
  if (typeof obj !== "object") return obj;
  return obj[currentLang] !== undefined ? obj[currentLang] : obj[DEFAULT_LANG];
}

function applyTranslationsToDocument() {
  document.documentElement.lang = currentLang;

  const titleKey = document.querySelector("title[data-i18n]");
  if (titleKey) {
    document.title = t(titleKey.getAttribute("data-i18n"));
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle(
      "lang-btn--active",
      btn.getAttribute("data-lang-btn") === currentLang
    );
  });
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslationsToDocument();
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function initLangSwitcher() {
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslationsToDocument();
  initLangSwitcher();
});