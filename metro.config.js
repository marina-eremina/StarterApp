/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = {
  // resolver: {
  //   blacklistRE: blacklist([
  //     /#current-cloud-backend\/.*/,
  //   ]),
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
