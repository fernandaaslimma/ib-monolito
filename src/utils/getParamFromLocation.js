export default function getQueryParam(location, param, fromHash = false) {
  if (fromHash) {
    if (location && location.hash) {
      const result = location.hash.match(
        new RegExp("(\\?|&|#)" + param + "(\\[\\])?=([^&]*)")
      );

      return result ? result[3] : false;
    }
    return false;
  } else {
    if (location && location.search) {
      const result = location.search.match(
        new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
      );

      return result ? result[3] : false;
    }
    return false;
  }
}
