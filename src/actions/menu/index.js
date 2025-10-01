export default () => ({
  setHiddenContentForMenuMobile: (_state, menuOn) => {
    return { notVisible: menuOn };
  }
});
