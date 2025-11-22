# Việt Chỉ - Website Node.js

Website thương hiệu khăn cotton thêu họa tiết dân gian Việt Nam được xây dựng bằng Node.js + Express + EJS.

## 🚀 Tính năng chính

- ✅ **Dynamic Content**: Tất cả dữ liệu được lưu trong file JSON, dễ dàng chỉnh sửa
- ✅ **Responsive Design**: Giao diện tương thích đa thiết bị
- ✅ **SEO Optimized**: Meta tags, Open Graph, Schema markup
- ✅ **Performance**: Compression, static files caching
- ✅ **Security**: Helmet middleware bảo mật

## 📁 Cấu trúc thư mục

```
├── server.js                 # Main server file
├── package.json              # Dependencies và scripts
├── public/                   # Static files (CSS, JS, images)
│   └── assets/              # Thư mục assets gốc
├── views/                    # EJS templates
│   ├── index.ejs            # Trang chủ
│   ├── 404.ejs              # Trang 404 (full layout)
│   └── error.ejs            # Trang lỗi server (full layout)
├── routes/                   # Route handlers
│   └── index.js             # Main route
└── data/                     # JSON data files
    ├── site-config.json     # Cấu hình website
    ├── hero-slides.json     # Hero slider content
    ├── products.json        # Dữ liệu sản phẩm
    ├── features.json        # Ưu điểm/tính năng
    ├── about.json           # Thông tin về công ty
    ├── categories.json      # Danh mục sản phẩm
    └── testimonials.json    # Đánh giá khách hàng
```

## 🎨 Tính năng Error Pages

### Trang 404 (Không tìm thấy)
- **Full layout** với header, footer giống trang chủ
- **Quick navigation** với các links quan trọng
- **Responsive design** tương thích mobile
- **SEO friendly** với meta tags phù hợp

### Trang 500 (Lỗi server)
- **Professional layout** với thông tin bảo trì chi tiết  
- **Maintenance status** hiển thị thời gian dự kiến
- **Contact support** với thông tin hotline
- **User-friendly** hướng dẫn người dùng rõ ràng

## 🛠️ Hướng dẫn chạy dự án

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy ở chế độ development
```bash
npm run dev
```

### 3. Chạy ở chế độ production
```bash
npm start
```

Website sẽ chạy tại: http://localhost:3000

## 🎨 Cách chỉnh sửa nội dung

### Thay đổi thông tin website
Chỉnh sửa file `data/site-config.json`:
```json
{
  "site": {
    "name": "Việt Chỉ",
    "tagline": "Khăn Cotton Thêu Họa Tiết Dân Gian Cao Cấp",
    "description": "Mô tả website...",
    "keywords": "từ khóa SEO...",
    "url": "https://domain.com"
  }
}
```

### Cập nhật sản phẩm
Chỉnh sửa file `data/products.json`:
```json
{
  "productLines": [
    {
      "name": "Dòng sản phẩm mới",
      "products": [
        {
          "name": "Tên sản phẩm",
          "price": "100.000đ",
          "description": "Mô tả sản phẩm",
          "image": "/assets/images/product.jpg"
        }
      ]
    }
  ]
}
```

### Thay đổi slider/hero
Chỉnh sửa file `data/hero-slides.json` để cập nhật nội dung slider.

### Cập nhật đánh giá khách hàng
Chỉnh sửa file `data/testimonials.json` để thêm/sửa đánh giá.

## 🌍 Deployment

### Deploy lên Vercel
1. Push code lên GitHub
2. Kết nối repo với Vercel
3. Vercel sẽ tự động deploy

### Deploy lên Heroku
1. Tạo app trên Heroku
2. Push code:
```bash
git push heroku main
```

### Deploy lên VPS/Server
1. Upload code lên server
2. Cài Node.js và npm
3. Chạy:
```bash
npm install
npm start
```

## 📱 Static Files

Tất cả files static (CSS, JS, images) nằm trong thư mục `public/assets/` và có thể được truy cập từ bên ngoài qua URL `/assets/...`

Ví dụ:
- CSS: `/assets/css/style.css`
- Images: `/assets/images/logo.png`
- JS: `/assets/js/main.js`

## 🔧 Mở rộng tính năng

### Thêm trang mới
1. Tạo file `.ejs` trong thư mục `views/`
2. Tạo route trong `routes/index.js` hoặc file route riêng
3. Tạo file JSON data nếu cần

### Thêm API endpoints
```javascript
// routes/api.js
router.get('/api/products', (req, res) => {
  const products = loadData('products.json');
  res.json(products);
});
```

### Thêm form contact
Có thể tích hợp với các service như Formspree, Netlify Forms hoặc tự xây dựng API endpoint.

## 📞 Hỗ trợ

Mọi thắc mắc về việc sử dụng và phát triển, vui lòng liên hệ team phát triển.

---

**Made with ❤️ for Việt Chỉ Brand**