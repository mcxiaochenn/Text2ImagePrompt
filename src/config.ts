/**
 * 站点配置 — 自部署用户只需修改此文件
 */

export const site = {
	title: 'AI 文生图提示词生成器 | Text2ImagePrompt',
	desc: '输入画面描述，一键生成正向 / 负向提示词。',
	description: '由辰渊尘（ChenDusk）开发的 AI 文生图提示词生成工具。输入画面描述，一键生成适用于 Stable Diffusion、ComfyUI 等主流 AI 绘图模型的正向（positive）与负向（negative）提示词（prompt / trigger words）。支持自定义 API 接口，本地运行，开箱即用。',
	createdAt: '2026-07-11T20:00:00',
	favicon: 'https://www.mcxiaochen.top/favicon.ico',
};

export const api = {
	baseUrl: 'https://api.openai.com/v1',
	model: 'gpt-4o-mini',
};

export const defaultPrompts = {
	positive: 'masterpiece, best quality, newest, absurdres, highres',
	negative: 'text, watermark, worst quality, old, early, low quality, lowres, signature, username, logo, bad hands, mutated hands, mammal, anthro, furry, ambiguous form, feral, semi-anthro, vibrant colors, oversaturated, high saturation, neon colors, vivid',
};

export const icp = {
	show: false,
	text: '京ICP备XXXXXXXX号',
	link: 'https://beian.miit.gov.cn/',
};
