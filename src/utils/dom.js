export const scrollToTop = () => {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  setTimeout(toTop, 100);
};

export const removeScrollBody = () => {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

export const addScrollBody = () => {
  document.getElementsByTagName("body")[0].style.overflow = "visible";
};
