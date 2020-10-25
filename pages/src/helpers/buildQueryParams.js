export default (payload) =>
  Object.entries({ ...(payload || {}) })
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
