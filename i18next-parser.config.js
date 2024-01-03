var config = require('./src/config');

module.exports = {
  locales: config.languages,
  namespaceSeparator: false,
  keySeparator: false,
  useKeysAsDefaultValue: true,
  output: 'src/assets/locales/$LOCALE/$NAMESPACE.json',
  createOldCatalogs: false,
  sort: true,
};
