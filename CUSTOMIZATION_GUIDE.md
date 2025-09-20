# Portfolio Customization Guide

## 🎯 Quick Start Customization

### 1. Personal Information Updates

#### Hero Section (`components/Hero.js`)

```javascript
// Line 75: Update your name
<span className="gradient-text">
  Your Name  // ← Change this
</span>

// Line 81-87: Update role titles
const roles = [
  'Full Stack Developer',  // ← Customize these
  'React Specialist',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Tech Innovator'
]

// Line 91-95: Update description
Passionate about creating exceptional digital experiences through clean code,
innovative design, and cutting-edge technologies. Let's build something amazing together!
// ← Customize this text
```

#### Contact Information (`components/Contact.js`)

```javascript
// Line 32-42: Update contact info
const contactInfo = [
  {
    icon: HiMail,
    title: "Email",
    value: "your.email@example.com", // ← Change this
    link: "mailto:your.email@example.com", // ← Change this
    color: "text-red-500",
  },
  // ... update phone and location too
];
```

### 2. Skills Section (`components/Skills.js`)

#### Update Your Skills

```javascript
// Line 15-70: Replace with your skills
const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", icon: FaReact, color: "text-blue-500", level: 95 },
      {
        name: "Your Skill",
        icon: YourIcon,
        color: "text-green-500",
        level: 85,
      },
      // Add/remove skills as needed
    ],
  },
  // Add more categories...
];
```

### 3. Projects Section (`components/Projects.js`)

#### Replace with Your Projects

```javascript
// Line 25-120: Update project data
const projects = [
  {
    id: 1,
    title: "Your Project Name", // ← Change this
    description: "Your project description...", // ← Change this
    image: "your-project-image.jpg", // ← Add your image
    category: "frontend", // or 'backend', 'fullstack', 'mobile'
    technologies: ["React", "Node.js"], // ← Your tech stack
    github: "https://github.com/yourusername/yourproject", // ← Your repo
    live: "https://yourproject.com", // ← Your live site
    // ... add more projects
  },
];
```

### 4. Social Links

#### Update Social Media Links

In `components/Navbar.js`, `components/Footer.js`, and `components/Contact.js`:

```javascript
// Replace these URLs with your actual profiles
href = "https://github.com/yourusername";
href = "https://linkedin.com/in/yourusername";
href = "https://twitter.com/yourusername";
```

## 🎨 Design Customization

### Colors (`tailwind.config.js`)

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Update these color values
        500: '#3b82f6',  // Main primary color
        600: '#2563eb',  // Darker primary
        // ... other shades
      },
      secondary: {
        // Update secondary colors
      }
    }
  }
}
```

### Fonts (`tailwind.config.js`)

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],  // ← Change font
  mono: ['JetBrains Mono', 'monospace'],
}
```

## 📸 Adding Your Images

### Project Images

1. Add your project screenshots to `/public/images/`
2. Update the `image` property in projects array:

```javascript
image: "/images/your-project-screenshot.jpg";
```

### Profile Picture (Optional)

1. Add your photo to `/public/`
2. Update the hero section to include it

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Custom Domain

1. Add your domain in Vercel settings
2. Update DNS records as instructed

## 📱 Mobile Optimization

The portfolio is already mobile-responsive, but you can:

- Test on different screen sizes
- Adjust breakpoints in Tailwind classes
- Modify spacing for mobile devices

## 🔧 Advanced Customization

### Adding New Sections

1. Create new component in `/components/`
2. Import in `/app/page.js`
3. Add navigation link in `/components/Navbar.js`

### Custom Animations

- Modify Framer Motion animations in components
- Add new animation variants
- Customize timing and easing

### SEO Optimization

Update `/app/layout.js`:

```javascript
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your personal portfolio description",
  keywords: "your, keywords, here",
};
```

## 🎯 Content Tips

### Writing Your Bio

- Keep it concise but engaging
- Highlight your unique value proposition
- Include your passion and expertise areas

### Project Descriptions

- Focus on the problem you solved
- Mention technologies and challenges
- Include results/impact if measurable

### Skills Assessment

- Be honest about your skill levels
- Group related skills logically
- Include both technical and soft skills

## 🔍 Testing Checklist

Before going live:

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form functions
- [ ] Mobile responsiveness
- [ ] Loading performance
- [ ] SEO meta tags
- [ ] Social media previews

## 📞 Support

If you need help with customization:

1. Check the main README.md
2. Review the code comments
3. Test changes incrementally
4. Use browser developer tools for debugging

---

**Happy Customizing! 🎉**
