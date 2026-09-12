const NAVBAR_OFFSET_PX = 80;
const MENU_CLOSE_MS = 320;
const SECTION_POLL_MS = 50;
const SECTION_POLL_MAX_ATTEMPTS = 80;

function scrollToElement(element: HTMLElement) {
  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

/**
 * Scroll to a page section by hash id. Retries until the target mounts (deferred
 * chunks) and optionally waits so mobile menu exit animations can finish first.
 */
export function scrollToSection(
  href: string,
  { afterMenuClose = false }: { afterMenuClose?: boolean } = {},
) {
  const id = href.replace(/^#/, "");
  if (!id) return;

  const startedAt = Date.now();
  let attempts = 0;

  const tryScroll = () => {
    const element = document.getElementById(id);

    if (element) {
      const elapsed = Date.now() - startedAt;
      const delay = afterMenuClose
        ? Math.max(0, MENU_CLOSE_MS - elapsed)
        : 0;
      window.setTimeout(() => scrollToElement(element), delay);
      return;
    }

    attempts += 1;
    if (attempts < SECTION_POLL_MAX_ATTEMPTS) {
      window.setTimeout(tryScroll, SECTION_POLL_MS);
    }
  };

  requestAnimationFrame(tryScroll);
}
