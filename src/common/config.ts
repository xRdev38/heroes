export const Configuration = {
  TITLE: process.env.VUE_APP_TITLE,
  API_KEY: process.env.VUE_APP_API_KEY,
  API_BASE_URL: process.env.VUE_APP_API_URL_BASE,
  API_VERSION: process.env.VUE_APP_API_VERSION,
  API_ACCESS: process.env.VUE_APP_API_ACCESS_VERSION,
  API_URL: `${process.env.VUE_APP_API_URL_BASE}/${process.env.VUE_APP_API_VERSION}/${process.env.VUE_APP_API_ACCESS_VERSION}`
};
export default Configuration;
