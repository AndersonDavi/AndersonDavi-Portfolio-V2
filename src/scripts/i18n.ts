import { translations, type Lang } from '../data/translations';

export function buildHoverHtml(text: string, growSize = '8xl', useMars = false): string {
  const parts = text.split(/(#.*?#)/g);
  const characters = parts.flatMap(part => {
    if (part.startsWith('#') && part.endsWith('#')) {
      return part.slice(1, -1).split('').map(char => ({ char, isPrimary: true }));
    }
    return part.split('').map(char => ({ char, isPrimary: false }));
  });
  const marsStyle = useMars ? ' style="font-family: var(--font-mars) !important"' : '';
  return characters.map(({ char, isPrimary }) => {
    const color = isPrimary
      ? 'text-primary-500 hover:text-primary-300'
      : 'hover:text-primary-500';
    return `<span class="cursor-default relative select-none italic hover:transition-transform duration-75 ${color} hover:text-${growSize}"${marsStyle}>${char === ' ' ? '&nbsp;' : char}</span>`;
  }).join('');
}

export function formatHtml(text: string): string {
  return text.replace(/#(.*?)#/g, '<span class="text-primary-500">$1</span>');
}

function getNestedValue(obj: Record<string, unknown>, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, k) => {
    if (acc === null || acc === undefined) return undefined;
    const idx = parseInt(k);
    if (!isNaN(idx)) return (acc as unknown[])[idx];
    return (acc as Record<string, unknown>)[k];
  }, obj);
}

export function applyLang(lang: Lang): void {
  const t = translations[lang] as unknown as Record<string, unknown>;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const value = getNestedValue(t, el.dataset.i18n!);
    if (value && typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach(el => {
    const value = getNestedValue(t, el.dataset.i18nHtml!);
    if (value && typeof value === 'string') el.innerHTML = formatHtml(value);
  });

  document.querySelectorAll<HTMLElement>('[data-hover-key]').forEach(el => {
    const value = getNestedValue(t, el.dataset.hoverKey!);
    if (value && typeof value === 'string') {
      el.innerHTML = buildHoverHtml(value, el.dataset.growSize || '8xl', el.dataset.useMars === 'true');
    }
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-i18n-href]').forEach(el => {
    const value = getNestedValue(t, el.dataset.i18nHref!);
    if (value && typeof value === 'string') el.href = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-marquee]').forEach(el => {
    const value = getNestedValue(t, 'marquee');
    if (value && typeof value === 'string') {
      const items = Array.from({ length: 16 }, (_, i) =>
        i === 15 ? value.replace('-', '').trim() : value
      );
      el.innerHTML = items.map(txt => `<p>${txt}</p>`).join('');
    }
  });
}

export function getCurrentLang(): Lang {
  return (localStorage.getItem('selectedLanguage') as Lang) || 'es';
}

export function initLang(): void {
  const lang = getCurrentLang();
  if (lang !== 'es') applyLang(lang);
}

export function toggleLang(): Lang {
  const current = getCurrentLang();
  const next: Lang = current === 'es' ? 'en' : 'es';
  localStorage.setItem('selectedLanguage', next);
  applyLang(next);
  document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: next } }));
  return next;
}
