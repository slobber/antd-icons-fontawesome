const path = require("path");
const iconNames = require("./iconNames");
const alias = (name) => {
  const aliasIcons = {};
  Object.keys(iconNames).forEach((icon) => {
    aliasIcons[`@ant-design/icons-svg/es/asn/${icon}`] = path.resolve(
      __dirname,
      `${name}-icons/${icon}`
    );
    aliasIcons[`@ant-design/icons-svg/lib/asn/${icon}`] = path.resolve(
      __dirname,
      `${name}-icons/${icon}`
    );
  });
  return aliasIcons;
};

module.exports = alias;
