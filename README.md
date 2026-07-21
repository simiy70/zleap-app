# Zleap SaaS Demo

Zleap 移动端 SaaS 原型的前端工程，覆盖信息流、全局搜索、信息源结果、事项详情、录音助手与 Super Agent 等交互。

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`，可直接部署到 Vercel。

## 项目结构

- `src/App.jsx`：React 应用入口与原型挂载
- `src/legacy-markup.html`：页面结构
- `src/styles.css`：界面样式与响应式布局
- `src/prototype.js`：搜索、详情、录音与页面切换等交互
- `scripts/extract-prototype.mjs`：从原始单文件原型同步生成工程源码
- `Zleap-APP原型-SaaS-信息搜索&事项详情.html`：原始设计与交互基准

修改原始原型后，可运行以下命令同步拆分后的源码：

```bash
node scripts/extract-prototype.mjs
```
