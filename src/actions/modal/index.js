export default () => ({
  openModal: (_, config) => ({
    modalSettings: { isOpen: true, ...config }
  }),
  closeModal: (_, hasContextError = null) => {
    return hasContextError
      ? { modalSettings: false, error: hasContextError }
      : { modalSettings: false };
  }
});
