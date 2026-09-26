const NAVBAR_OFFSET_PX = 80;

let activeScrollCancel: (() => void) | null = null;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Cancel any in-flight programmatic scroll (e.g. focus sequence cleanup). */
export function cancelActiveScroll(): void {
  activeScrollCancel?.();
  activeScrollCancel = null;
}

/** Animated scroll to a document Y position; waits until the animation finishes. */
export function animateScrollToY(targetY: number): Promise<void> {
  const clampedTarget = Math.max(0, targetY);
  const startY = window.scrollY;
  const distance = clampedTarget - startY;

  if (Math.abs(distance) < 2) {
    return Promise.resolve();
  }

  if (prefersReducedMotion()) {
    window.scrollTo(0, clampedTarget);
    return Promise.resolve();
  }

  cancelActiveScroll();

  return new Promise((resolve) => {
    const duration = Math.min(2000, Math.max(750, Math.abs(distance) * 1.15));
    const startTime = performance.now();
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      if (activeScrollCancel === cancel) {
        activeScrollCancel = null;
      }
      resolve();
    };

    const cancel = () => {
      if (cancelled) return;
      cancelled = true;
      if (activeScrollCancel === cancel) {
        activeScrollCancel = null;
      }
      resolve();
    };

    activeScrollCancel = cancel;

    const step = (now: number) => {
      if (cancelled) return;
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const y = startY + distance * easeInOutCubic(t);
      window.scrollTo(0, y);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, clampedTarget);
        finish();
      }
    };

    requestAnimationFrame(step);
  });
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/** Wait until React/layout has applied (e.g. after filter state changes). */
export function waitForLayout(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export function waitForElementById(
  id: string,
  maxAttempts = 80,
  intervalMs = 50,
): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    let attempts = 0;

    const tryFind = () => {
      const element = document.getElementById(id);
      if (element) {
        resolve(element);
        return;
      }
      attempts += 1;
      if (attempts >= maxAttempts) {
        resolve(null);
        return;
      }
      window.setTimeout(tryFind, intervalMs);
    };

    tryFind();
  });
}

/** Smooth-scroll so the element sits below the fixed navbar; resolves when scrolling settles. */
export function smoothScrollToElement(element: HTMLElement): Promise<void> {
  const targetTop = Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX,
  );
  return animateScrollToY(targetTop);
}

export async function smoothScrollToId(id: string): Promise<boolean> {
  const element = await waitForElementById(id);
  if (!element) return false;
  await smoothScrollToElement(element);
  return true;
}
