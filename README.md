# VietMiTV OTA

Kho này lưu manifest và các bản phát hành OTA chính thức của VietMiTV.

Ứng dụng đọc `ota.json` từ nhánh `main`. Mỗi bản mới phải:

1. Giữ nguyên package `com.vxm.voiceassist.googletv`.
2. Ký bằng đúng khóa phát hành hiện tại.
3. Tăng `versionCode`.
4. Tạo GitHub Release và tải APK lên.
5. Cập nhật `ota.json` với URL APK và SHA-256 mới.

## Phiên bản hiện tại

- Version: v7
- Version code: 46
- APK: `vietmitv-v7.apk`
