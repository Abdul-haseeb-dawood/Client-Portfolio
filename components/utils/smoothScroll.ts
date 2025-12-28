export function smoothScrollToSection(
  event: React.MouseEvent,
  targetId: string,
  duration: number = 1000 
) {
  event.preventDefault();
  const target = document.querySelector(targetId);
  if (!target) return;

  const start = window.scrollY;
  const end = (target as HTMLElement).offsetTop - 80; 
  const distance = end - start;
  let startTime: number | null = null;

  function easeInOutQuad(t: number) {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }

  function animation(currentTime: number) {
    if (!startTime) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInOutQuad(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
