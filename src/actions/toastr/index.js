export default () => ({
  openToastr: (_, config) => {
    return { toastrSettings: { isOpen: true, ...config } };
  },
  closeToastr: () => ({ toastrSettings: false }),
  cancelToastrTimeout: () => ({ cancelTimeout: true }),
  enableToastrTimeout: () => ({ cancelTimeout: false })
});
