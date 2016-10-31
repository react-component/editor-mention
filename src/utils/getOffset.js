export default function getOffset(element, container) {
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    const _container = container || element.parentElement;
    return {
      top: rect.top - _container.clientTop,
      left: rect.left - _container.clientLeft,
    };
  }
  return rect;
}
