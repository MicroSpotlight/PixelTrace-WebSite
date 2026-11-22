# PixelTrace 官网

PixelTrace（像素轨迹）的中英文产品官网。使用静态 HTML、CSS 和 JavaScript，打开 `index.html` 可查看中文版，`en.html` 为英文版。

## 本地预览

```sh
python3 -m http.server 8080
```

页面位于 `http://127.0.0.1:8080/`。可用鼠标、触摸或方向键切换产品预览。

## 部署

GitHub Pages 从 `main` 分支根目录发布静态文件。`.nojekyll` 让 Pages 直接发布 HTML、CSS、JavaScript 和图片。

[PixelTrace 官网](https://microspotlight.github.io/PixelTrace-WebSite/)

## 内容维护

- 功能文案、系统要求和截图以 [PixelTrace iOS 仓库](https://github.com/MicroSpotlight/PixelTrace) 中的当前实现为准。
- `assets/` 包含 PixelTrace 字标、合成示例照片和使用合成数据拍摄的 iPhone 模拟器截图。
- `privacy.html` 为上架前政策草案。正式使用前需确认运营主体联系方式、最终发行版的 SDK 数据实践与 App Store Connect 隐私标签，并发布可公开访问的 URL。
- App Store 下载地址以实际商店记录为准。
