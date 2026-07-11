# AI 文生图提示词生成器 | Text2ImagePrompt

输入画面描述，一键生成适用于 Stable Diffusion、ComfyUI 等主流 AI 绘图模型的正向（positive）与负向（negative）提示词（prompt / trigger words）。

## 功能

- 一键生成正向 / 负向提示词（逗号分隔 trigger words 格式）
- 自定义默认正向 / 负向提示词，生成时自动合并
- 生成历史记录，支持回显、重用、删除
- API 设置本地持久化（Base URL、模型名）
- 控制台日志，方便监看 API 调用详情
- 纯静态部署，无服务端依赖

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发
pnpm dev

# 构建
pnpm build
```

构建产物在 `dist/` 目录，可部署到任意静态托管平台。

## 自部署配置

编辑 `src/config.ts` 即可修改站点信息、默认 API、默认提示词等：

```ts
export const site = {
  title: 'AI 文生图提示词生成器 | Text2ImagePrompt',
  desc: '输入画面描述，一键生成正向 / 负向提示词。',
  description: '...',  // SEO meta description
  createdAt: '2026-07-11T20:00:00',
  favicon: 'https://www.mcxiaochen.top/favicon.ico',
};

export const api = {
  baseUrl: 'https://api.openai.com/v1',
  model: 'gpt-4o-mini',
};

export const defaultPrompts = {
  positive: 'masterpiece, best quality, newest, absurdres, highres',
  negative: 'text, watermark, worst quality, ...',
};

export const icp = {
  show: false,
  text: '京ICP备XXXXXXXX号',
  link: 'https://beian.miit.gov.cn/',
};
```

## 技术栈

- [Astro](https://astro.build) 7
- Font Awesome 6
- OpenAI 兼容 API（客户端直连）

## 部署

纯静态站点，支持以下平台（及任意静态托管）：

- GitHub Pages
- Vercel (Static)
- Netlify
- Cloudflare Pages

## License

MIT
