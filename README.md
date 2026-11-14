# Profiles Library — Decaid Plugin

Profiles Library 2.0.3 是一个面向 Decaid 的曲线发现与导入插件。**只导入曲线**，不会启动萃取、激活 profile 或修改机器状态。

## 功能

- 离线：读取 Decaid 内置 profiles，同时包含随插件发布的 17 条补充快照（含四种 E61）
- 在线：搜索 / 刷新公开的 DE1app、Decenza、Decaid、Decent-Docs 及社区 profile 目录
- 扫描：发现已安装 Decaid skins 中可枚举的 profiles
- 导入：支持 JSON 与 DE1app TCL (`settings_2a`, `settings_2b`, `settings_2c`)；严格校验、请求超时保护
- 预览：目标曲线缩略图（实线=控制目标，虚线=limiter；内置 73 条官方默认参考数据，在线曲线懒加载）
- 去重：以 Decaid 自身的 profile 内容哈希为准
- 皮肤集成（Streamline）：设置页 Open 以浮层打开（皮肤自绘 ×、点背景关闭、萃取开始自动收起）；整页模式带 ← Back 返回来源页；浮层内跟随皮肤明暗主题

## 版本 lineage

- 2.0.0：仓库基线（离线快照 + 在线目录 + 导入）。
- 2.0.1 / 2.0.2：曾在平板以 local_zip 安装、未入库的增强分支（2.0.1 严格导入校验 / Tcl 引号解析 / 请求 deadline；2.0.2 曲线缩略图 + 默认参考预览数据 + 每卡重试）。2.0.2 包已从平板 Download 找回并并入仓库。
- 2.0.3（当前）：2.0.2 基座 + Streamline 皮肤集成（浮层握手 / 整页返回 / 主题跟随 / 滚动条）。

## 安装

从仓库的 `release/Profiles_Library_v2.0.3.reaplugin.zip` 下载可安装包，在 Decaid → Plugins → Install plugin 选择 ZIP 文件；或 Install plugin → GitHub Release → `ladiosupp/profilelibrary`（github_release 来源，Decaid 每 12 小时自动检查更新，权限不增加时自动安装）。

## 源代码和交接

- `plugin.js`、`manifest.json`、`snapshot-manifest.json`、`snapshot/*.json`、`default-previews.json` — 可直接维护的插件源代码、固定快照与预览参考数据
- `WORK_HANDOFF.md` — 开发交接和回归测试重点
- `SOURCES.md` — 曲线数据来源
- `release/Profiles_Library_v2.0.3.reaplugin.zip` — 当前版本
- `release/Profiles_Library_v2.0.0.reaplugin.zip` — 仓库基线，保留供回滚

发布快照原始来源、具体文件及 SHA 记录在 `snapshot-manifest.json`。第三方 profile 的作者归属与许可仍由其原始来源决定，请尊重上游许可。

## 当前状态

2.0.3 已在本地 mock + 无头浏览器验证：浮层握手 / × 与背景关闭 / 明暗主题 / 内滚动 / 预览缩略图 / 整页返回 / 导入回归；skin 答复经 Streamline 真实 parseSkinAnswer 验收。待平板真机确认。
