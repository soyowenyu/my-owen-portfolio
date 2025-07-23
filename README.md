````markdown
<p align="center">
  <img src="https://raw.githubusercontent.com/ichowenyu/my-owen-portfolio/main/public/logo.png" height="120" alt="Logo" />
</p>

<h1 align="center">My Owen Portfolio</h1>

<p align="center">
  🚀 A modern portfolio website built with React + Vite, deployed to GitHub Pages.<br/>
  ✨ 使用 React 和 Vite 构建的现代化个人作品集网站，已部署至 GitHub Pages。
</p>

<p align="center">
  <a href="https://github.com/ichowenyu/my-owen-portfolio/stargazers"><img src="https://img.shields.io/github/stars/ichowenyu/my-owen-portfolio?style=social" alt="GitHub stars"/></a>
  <a href="https://github.com/ichowenyu/my-owen-portfolio/commits/main"><img src="https://img.shields.io/github/last-commit/ichowenyu/my-owen-portfolio" alt="Last commit"/></a>
  <a href="https://ichowenyu.github.io/my-owen-portfolio/"><img src="https://img.shields.io/website?url=https%3A%2F%2Fichowenyu.github.io%2Fmy-owen-portfolio%2F" alt="Live site status"/></a>
  <a href="https://github.com/ichowenyu/my-owen-portfolio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ichowenyu/my-owen-portfolio" alt="License"/></a>
</p>

---

## 🌐 Live Demo / 在线预览

- 👉 [https://ichowenyu.github.io/my-owen-portfolio/](https://ichowenyu.github.io/my-owen-portfolio/)

---

## 📦 Technologies Used / 使用技术

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

---

## 🛠️ Getting Started / 快速开始

### 🔧 Install Dependencies / 安装依赖

```bash
npm install
```
````

### 🧪 Local Development / 本地开发

```bash
npm run dev
```

---

## 🚀 Deploy to GitHub Pages / 部署至 GitHub Pages

### 1. ✍️ 修改 `vite.config.js`

```js
export default defineConfig({
  base: "/my-owen-portfolio/", // 替换为你的仓库名
  plugins: [react()],
});
```

### 2. 📦 构建项目

```bash
npm run build
```

### 3. 🚚 安装 gh-pages

```bash
npm install --save-dev gh-pages
```

### 4. 📜 添加部署命令至 `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

### 5. 🗂️ 推送到 GitHub

```bash
git init
git remote add origin https://github.com/ichowenyu/my-owen-portfolio.git
git add .
git commit -m "initial commit"
git branch -M main
git push -u origin main
```

### 6. 🚀 部署

```bash
npm run deploy
```

### 7. ✅ GitHub Pages 设置

- 打开你的 GitHub 仓库
- 点击 `Settings > Pages`
- 设置发布分支为 `gh-pages`，文件夹为 `/ (root)`
- 几分钟后访问你的网址

---

## 💡 Tips

- 若首次访问样式加载失败，请强制刷新（`Ctrl + Shift + R`）或用无痕窗口打开。
- 每次部署前建议先删除旧构建目录再打包：

```bash
rm -rf dist
npm run build
```
