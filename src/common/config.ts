// eslint-disable-next-line @typescript-eslint/no-var-requires
process.env.VUE_APP_VERSION = require('../../package.json').version;

export const Configuration = {
  TITLE: process.env.VUE_APP_TITLE,
  API_URL: process.env.VUE_APP_API_URL,
};
export default Configuration;