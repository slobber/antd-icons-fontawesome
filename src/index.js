import { fileURLToPath } from "url";
import path from "path";
import { iconNames } from "./iconNames.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const antdIconAlias = () => {
  const aliasIcons = {};
  Object.keys(iconNames).forEach((icon) => {
    aliasIcons[`@ant-design/icons-svg/es/asn/${icon}`] = path.resolve(
      __dirname,
      `icons/${icon}.js`
    );
    aliasIcons[`@ant-design/icons-svg/lib/asn/${icon}`] = path.resolve(
      __dirname,
      `icons/${icon}.js`
    );
  });
  return aliasIcons;
};
