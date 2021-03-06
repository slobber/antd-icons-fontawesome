## Instruction 介绍

Replace Ant Design Icons inside Ant Design components with FontAwesome icons. 

使用 FontAwesome 图标替换 Ant Design 组件中的内置图标。

## How to use 使用方式

### Installation 安装

```bash
> pnpm i '@slobber/antd-icons-fontawesome'
```

### API

```
// default use 'fas'
const defaultAliasWithFas = antdIconAlias()

// you can indicate the fontawesome set to replace ant icons (fontawesome pro subscribe only).
const aliasWithFal = antdIconAlias('fal')
```

### `react-app-rewired` Usage 用法

Add follow code in `config-overrides.js`:
在 `config-overrides.js` 中添加以下代码：

```js
const antdIconAlias = require('@slobber/antd-icons-fontawesome')
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
import antdIconAlias from "@slobber/antd-icons-fontawesome";

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        ...antdIconAlias("fas"),
      },
    },
    ...
  }
})
```

### 关于 FontAwesome Pro

If you have `FontAwesome Pro` subscribe, you can clone the repo and build your pro icons for ant design.

如果您有 `FontAwesome Pro` 的订阅，可以克隆本项目，构建你自己的替换图标。

Generate commands:

生成命令：

```bash
> git clone https://github.com/slobber/antd-icons-fontawesome.git
> cd antd-icons-fontawesome
> pnpm i
> pnpm build:pro
> pnpm publish -registry [your private registry]
```
