import { cwd } from "process";
import { iconNames } from "../src/iconNames.js";
import fs from "fs";

const themes = {
  outline: JSON.parse(
    fs.readFileSync(
      `${cwd()}/node_modules/@tabler/icons/tabler-nodes-outline.json`
    )
  ),
  filled: JSON.parse(
    fs.readFileSync(
      `${cwd()}/node_modules/@tabler/icons/tabler-nodes-filled.json`
    )
  ),
};

fs.rmSync(`${cwd()}/dist`, { recursive: true, force: true });
Object.keys(iconNames).forEach((key) => {
  const tiStyle = iconNames[key].theme === "filled" ? "filled" : "outline";
  const tiName = iconNames[key].ti;
  const data = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "0 0 24 24", focusable: "false" },
      children: themes[tiStyle][tiName].map((x) => ({
        tag: x[0],
        attrs: x[1],
      })),
    },
    name: iconNames[key].name,
    theme: iconNames[key].theme || "outlined",
  };
  const fileContent = `export default ${JSON.stringify(data)}`;
  const folder = `${cwd()}/dist/icons`;
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  fs.writeFileSync(`${folder}/${key}.js`, fileContent);
});
console.log(`\x1b[32mIcons are generated\x1b[0m.`);

fs.createReadStream("src/index.js").pipe(fs.createWriteStream("dist/index.js"));
fs.createReadStream("src/iconNames.js").pipe(
  fs.createWriteStream("dist/iconNames.js")
);
