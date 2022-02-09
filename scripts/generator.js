const iconNames = require("../src/iconNames.js");

const fs = require("fs");

const license = process.env.FALICENSE || "free"
const libraries = [];
if (license === 'pro') {
  libraries.push(require("@fortawesome/pro-solid-svg-icons"));
  libraries.push(require("@fortawesome/pro-duotone-svg-icons"));
  libraries.push(require("@fortawesome/pro-light-svg-icons"));
  libraries.push(require("@fortawesome/pro-thin-svg-icons"));
  libraries.push(require("@fortawesome/pro-regular-svg-icons"));
} else {
  libraries.push(require("@fortawesome/free-solid-svg-icons"))
  libraries.push(require("@fortawesome/free-regular-svg-icons"))
}
fs.rmSync("./dist", { recursive: true, force: true })
const template = `
export default {
  name: '{{name}}',
  theme: 'outlined',
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 {{width}} {{height}}', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: '{{path}}'
        }
      }
    ]
  }
}
`;
libraries.forEach((set) => {
  Object.keys(iconNames).forEach((key) => {
    const icon = set[iconNames[key][1]];
    if (!icon) {
      console.log(`\x1b[31m${iconNames[key][1]}\x1b[0m doesn't exist in \x1b[32m${set.prefix}\x1b[0m set, the ant design will use the default icon.`)
      return
    }
    const data = {
      name: iconNames[key][0],
      width: icon.icon[0],
      height: icon.icon[1],
      theme: iconNames[key][2] || "outlined",
      path: icon.icon[4],
    };
    const fileContent = template.replace(/\{\{(\w*)\}\}/g, function (m, key) {
      return data.hasOwnProperty(key) ? data[key] : "";
    });
    const folder = `dist/${set.prefix}-icons`;
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    fs.writeFileSync(`${folder}/${key}.js`, fileContent);
  });
});

fs.createReadStream('src/index.js').pipe(fs.createWriteStream('dist/index.js'))
fs.createReadStream('src/iconNames.js').pipe(fs.createWriteStream('dist/iconNames.js'))
