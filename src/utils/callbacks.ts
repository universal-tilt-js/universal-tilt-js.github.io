// TODO types
export const callbacks = {
  onMouseEnter: (el) => {
    el.style.boxShadow = '0 45px 100px rgba(255, 255, 255, 0.3)';
  },
  onMouseLeave: (el) => {
    el.style.boxShadow = '0 45px 100px rgba(255, 255, 255, 0)';
  },
  onDeviceMove: (el) => {
    el.style.boxShadow = '0 45px 100px rgba(255, 255, 255, 0.3)';
  },
};
