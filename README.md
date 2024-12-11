# CyberEdu - Cybersecurity Learning Platform

A modern e-learning platform focused on cybersecurity education, built with React, TypeScript, and Strapi CMS.

## Features

- 🛡️ Comprehensive cybersecurity courses
- 🎓 Expert-led curriculum
- 💻 Interactive learning experience
- 📱 Responsive design
- 🔒 Secure authentication
- 💳 Stripe payment integration

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Strapi CMS

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cyberedu.git
cd cyberedu
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

### Setting up Strapi CMS

1. Install Strapi globally:
```bash
npm install -g @strapi/strapi
```

2. Create a new Strapi project:
```bash
npx create-strapi-app@latest cms --quickstart
```

3. Configure content types in Strapi:
   - Courses
   - Instructors
   - Categories
   - Lessons
   - Users

4. Set up permissions in Strapi admin panel:
   - Navigate to Settings > Roles
   - Configure public and authenticated user permissions

## Project Structure

```
cyberedu/
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── services/      # API services
│   └── types/         # TypeScript types
├── public/            # Static assets
└── cms/              # Strapi CMS
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Courses

1. Log in to Strapi admin panel
2. Navigate to Content Manager > Courses
3. Click "Create new entry"
4. Fill in course details
5. Publish the course

### Environment Variables

```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Deployment

### Frontend (Vite + React)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

### Strapi CMS

1. Configure production database
2. Set up environment variables
3. Deploy Strapi application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.