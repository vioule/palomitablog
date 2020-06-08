export default async function () {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
}
