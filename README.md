## Instruction 介绍

Replace Ant Design Icons inside Ant Design components with FontAwesome icons. 

使用 tabler/icons 图标替换 Ant Design 组件中的内置图标。

## How to use 使用方式

### Installation 安装

```bash
> pnpm i @slobber/antd-5-tabler-icons
```

### API

```

### `react-app-rewired` Usage 用法

Add follow code in `config-overrides.js`:
在 `config-overrides.js` 中添加以下代码：

```js
const antdIconAlias = require('@slobber/antd-5-tabler-icons')
......

const addCustomize = () => (config, env) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    ...antdIconAlias()
  }
  ......
}
......

```

### `vite` Usage 用法

Add follow code in `vite.config.js`:
在 `vite.config.js` 中添加以下代码：

```js
import antdIconAlias from "@slobber/antd-5-tabler-icons";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        ...antdIconAlias(),
      },
    },
    ...
  }
})
```