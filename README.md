# 枫影轻语AUTUMNBREEZE 文档

Hello 各位热爱枫叶源的玩家，枫影轻语AUTUMNBREEZE站点基于 [Docusaurus](https://docusaurus.io/) 构建, Docusaurus是一个现代化的快速站点生成工具！

注意！未经允许的情况下，你不得以任何形式将枫叶源文档二次公开。如本文档有误，欢迎随时提出Issue或PR.

本项目使用Yarn工具进行开发调试和构建！

### 安装

```bash
$ yarn
```

### 本地开发

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 构建

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 部署

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
