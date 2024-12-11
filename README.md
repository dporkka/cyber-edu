# CyberEdu - Cybersecurity Learning Platform

![Screenshot 2024-12-10 202329](https://github.com/user-attachments/assets/348abca4-ed65-4e8c-bfef-7e4922d6d802)

A modern e-learning platform focused on cybersecurity education, built with React, TypeScript, and Strapi CMS.


![Screenshot 2024-12-10 202345](https://github.com/user-attachments/assets/c033e50a-2c8e-46c9-a726-801e32041ff9)

![Screenshot 2024-12-10 202411](https://github.com/user-attachments/assets/95eecd7b-d808-42a5-842e-4620827e1e7a)

![Screenshot 2024-12-10 202430](https://github.com/user-attachments/assets/4c551144-c2d8-4577-9a5e-bf366ac94318)

## Features

- 🛡️ Comprehensive cybersecurity courses
- 🎓 Expert-led curriculum
- 💻 Interactive learning experience
- 📱 Responsive design
- 🔒 Secure authentication (coming soon)
- 💳 Stripe payment integration(coming soon)

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
