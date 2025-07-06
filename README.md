# DongL - Kết Nối Trái Tim Qua Từng Dòng Thư

Nền tảng hỗ trợ gia đình và bạn bè gửi những lá thư ý nghĩa đến người thân đang ở xa, những người lính đang làm nhiệm vụ, và những ai đang cần sự động viên tinh thần.

## 🚀 Tính năng chính

- **📝 Viết thư online**: Giao diện thân thiện, dễ sử dụng
- **📋 Mẫu thư có sẵn**: Hàng trăm mẫu thư theo chủ đề
- **🎨 Theme đa dạng**: Hot themes và seasonal themes
- **📱 Responsive Design**: Tối ưu cho mọi thiết bị
- **🎯 Mobile First**: Thiết kế ưu tiên mobile

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📦 Cài đặt

```bash
# Clone repository
git clone [repository-url]
cd dongl-project

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu trúc project

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── MainBanner.tsx
    ├── LetterTemplates.tsx
    ├── Statistics.tsx
    └── Footer.tsx
```

## 🎨 Thiết kế

### Mobile First Approach

- Mobile: Sidebar hiển thị dưới carousel
- Desktop: Sidebar hiển thị bên cạnh carousel

### Color Scheme

- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Accent: Pink, Green, Orange (gradient)

### Components

#### 1. Header

- Logo "DongL" (link về home)
- Navigation menu
- Mobile hamburger menu
- Login button

#### 2. Hero Section

- Main title với gradient text
- Description về dự án
- CTA buttons

#### 3. Main Banner

- Gradient background với animations
- Floating elements
- Glass morphism effects

#### 4. Letter Templates

- **Main Carousel**: 5 slides tự động chuyển
- **Write Letter Button**: Góc dưới phải
- **Hot Themes**: Sidebar với icons
- **Seasonal Themes**: Grid 2x2 với icons

#### 5. Statistics

- 4 số liệu chính
- Hover effects
- Gradient numbers

#### 6. Footer

- Company info
- Service links
- Contact details
- Social media
- Newsletter signup

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎭 Animations

- Auto-sliding carousel (5s interval)
- Hover transforms
- Pulse effects
- Floating animations
- Gradient transitions

## 🚀 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Scripts

- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run lint`: ESLint checking

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ for family connections
