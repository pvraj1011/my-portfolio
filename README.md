# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring smooth animations, interactive components, and a beautiful design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Animated navigation, skill progress bars, project modals
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Ready**: Structured for search engine optimization
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: JavaScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page component
├── components/
│   ├── Navbar.js           # Navigation component
│   ├── Hero.js             # Hero/Introduction section
│   ├── Skills.js           # Skills and technologies section
│   ├── Projects.js         # Projects showcase with filtering
│   ├── Contact.js          # Contact form and information
│   └── Footer.js           # Footer component
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── README.md              # Project documentation
```

## 🎨 Sections

### 1. Hero Section
- Animated introduction with rotating role titles
- Call-to-action buttons
- Floating background elements
- Scroll indicator

### 2. Skills Section
- Interactive skill cards with progress bars
- Categorized by Frontend, Backend, and Tools
- Animated progress indicators
- Additional expertise tags

### 3. Projects Section
- Filterable project gallery
- Modal views with detailed information
- Technology tags and live links
- Responsive grid layout

### 4. Contact Section
- Contact form with validation
- Social media links
- Contact information cards
- Quick stats and call-to-action

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`components/Hero.js`)
   - Change name in the main heading
   - Update role titles in the rotating text
   - Modify the description text

2. **Skills Section** (`components/Skills.js`)
   - Update skill categories and technologies
   - Modify skill levels (percentages)
   - Add or remove additional expertise tags

3. **Projects Section** (`components/Projects.js`)
   - Replace project data with your own projects
   - Update project images, descriptions, and links
   - Modify technologies used

4. **Contact Section** (`components/Contact.js`)
   - Update contact information (email, phone, location)
   - Modify social media links
   - Update statistics and achievements

5. **Footer** (`components/Footer.js`)
   - Update social media links
   - Modify contact information
   - Change copyright information

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind config
- **Animations**: Customize animations in `globals.css`

### Images
- Replace placeholder images with your own project screenshots
- Update the hero background or add personal photos
- Optimize images for web (use WebP format when possible)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Deploy through the AWS console
- **DigitalOcean**: Use App Platform for deployment

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Lazy Loading**: Images and components load as needed
- **SEO Optimization**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `app/page.js`
3. Update the navigation in `components/Navbar.js`
4. Add corresponding scroll behavior

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js and Tailwind CSS**
