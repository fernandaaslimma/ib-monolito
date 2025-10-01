export default () => ({
  addHeaderOnClickBack: (_, fun) => {
    const newFunction = fun ? fun : false;
    return { headerOnClickBack: newFunction };
  },
  addHeaderOnClickClose: (_, fun) => {
    const newFunction = fun ? fun : false;
    return { headerOnClickClose: newFunction };
  }
});
