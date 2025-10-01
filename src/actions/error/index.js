export default () => ({
  addError: (_, error) => {
    return { error };
  },

  resetErrors: () => {
    return { error: null };
  }
});
