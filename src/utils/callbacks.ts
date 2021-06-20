export const callbacks = {
  onMouseEnter: (el: HTMLElement) => {
    el.style.boxShadow = '0 45px 100px rgba(255, 255, 255, 0.3)';
  },
  onMouseLeave: (el: HTMLElement) => {
    el.style.boxShadow = '0 45px 100px rgba(255, 255, 255, 0)';
  },
  onDeviceMove: (el: HTMLElement) => {
    el.style.boxShadow = '0 45px 100px rgba(255, 255, 255, 0.3)';
  },
};
