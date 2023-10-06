export function lockScroll() {
  document.body.classList.add('scroll-lock');
}

export function unlockScroll() {
  document.body.classList.remove('scroll-lock');
}
