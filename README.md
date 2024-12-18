# CyberEdu Platform

A modern cybersecurity education platform template built with:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

## License

This template is available under a modified MIT license:

- Free for personal use
- Commercial use allowed for teams of 2 or fewer
- Teams larger than 2 require a lifetime license ($90)

Purchase options:
- [Purchase via Stripe](https://buy.stripe.com/28o7sQesAe7BbnicMN)
- [Purchase via PayPal](https://www.paypal.com/donate/?hosted_button_id=KMK2EUCL379LC)

## Features

- 🔒 Authentication system
- 🎨 Modern UI with Shadcn components
- 📱 Fully responsive design
- 🚀 Built with performance in mind
- 🌙 Dark mode support
- 🔍 SEO optimized
- 📝 TypeScript for better development experience

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
