const { getPublicUrl: defaultGetPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs');
const getPublicUrl = () => {
  return process.env.NODE_ENV !== 'production' ? defaultGetPublicUrl() : '';
}
module.exports = getPublicUrl;
