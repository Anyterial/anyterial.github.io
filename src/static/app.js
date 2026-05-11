(function () {
  const THEME_KEY = "anyterial_theme";
  const DEFAULT_THEME = "twilight";
  const THEME_OPTIONS = new Set(["dark", "twilight", "light"]);

  const root = document.documentElement;
  const themeButtons = Array.from(document.querySelectorAll("[data-theme-option]"));

  const normalizeTheme = (value) => {
    if (typeof value !== "string") {
      return DEFAULT_THEME;
    }
    const lowered = value.trim().toLowerCase();
    return THEME_OPTIONS.has(lowered) ? lowered : DEFAULT_THEME;
  };

  const applyTheme = (theme) => {
    const active = normalizeTheme(theme);
    root.setAttribute("data-theme", active);
    themeButtons.forEach((btn) => {
      const option = normalizeTheme(btn.getAttribute("data-theme-option"));
      btn.classList.toggle("is-active", option === active);
      btn.setAttribute("aria-pressed", option === active ? "true" : "false");
    });
  };

  applyTheme(window.localStorage.getItem(THEME_KEY) || DEFAULT_THEME);

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = normalizeTheme(btn.getAttribute("data-theme-option"));
      applyTheme(selected);
      window.localStorage.setItem(THEME_KEY, selected);
    });
  });
})();
