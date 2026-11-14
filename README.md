# Profiles Library — Decaid Plugin

Profiles Library 2.0.0 是一个面向 Decaid 的曲线发现与导入插件。**只导入曲线**，不会启动萃取、激活 profile 或修改机器状态。

## 功能

- 离线：读取 Decaid 内置 profiles，同时包含随插件发布的 17 条补充快照（含四种 E61）
- 在线：搜索 / 刷新公开的 DE1app、Decenza、Decaid、Decent-Docs 及社区 profile 目录
- 扫描：发现已安装 Decaid skins 中可枚举的 profiles
- 导入：支持 JSON 与 DE1app TCL (`settings_2a`, `settings_2b`, `settings_2c`)
- 去重：以 Decaid 自身的 profile 内容哈希为准

## 安装

从仓库的 `release/Profiles_Library_v2.0.0.reaplugin.zip` 下载可安装包，在 Decaid → Plugins → Install plugin 选择 ZIP 文件。

## 源代码和交接

- `plugin.js`、`manifest.json`、`snapshot-manifest.json`、`snapshot/*.json` — 可直接维护的插件源代码和固定快照
- `WORK_HANDOFF.md` — 开发交接和回归测试重点
- `SOURCES.md` — 曲线数据来源
- `release/Profiles_Library_v2.0.0.reaplugin.zip` — 经用户真机确认可用的版本

发布快照原始来源、具体文件及 SHA 记录在 `snapshot-manifest.json`。第三方 profile 的作者归属与许可仍由其原始来源决定，请尊重上游许可。

## 当前状态

用户已确认 2.0.0 可安装使用。离线/在线/skin 导入与旧格式解析路径先前已通过模拟 API 测试，未来升级时请保留 v2.0.0 供回滚。