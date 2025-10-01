export default () => ({
  showNavigationMenu: (_, bool) => {
    return {
      isNavigationMenuShown: bool
    };
  }
});
