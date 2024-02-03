export const getCode = () => {
  if (new URLSearchParams(window.location.search).get("code") !== null) {
    return new URLSearchParams(window.location.search).get("code");
  }
  return null;
};

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
