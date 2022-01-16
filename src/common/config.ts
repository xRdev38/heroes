// eslint-disable-next-line @typescript-eslint/no-var-requires
const md5 = require('md5');

const ts = Date.now();
const hash = md5(
  ts + process.env.VUE_APP_KEY + process.env.VUE_APP_API_KEY
).toString();
export const Configuration = {
  TITLE: process.env.VUE_APP_TITLE,
  API_KEY: process.env.VUE_APP_API_KEY,
  API_BASE_URL: process.env.VUE_APP_API_URL_BASE,
  API_VERSION: process.env.VUE_APP_API_VERSION,
  API_ACCESS: process.env.VUE_APP_API_ACCESS_VERSION,
  API_HASH: hash,
  API_TIMESTAMP: ts,
  API_URL: `${process.env.VUE_APP_API_URL_BASE}/${process.env.VUE_APP_API_VERSION}/${process.env.VUE_APP_API_ACCESS_VERSION}`,
};
export default Configuration;
