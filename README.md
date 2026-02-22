# FutureCode Academy

A modern, futuristic EdTech landing page built with React, Tailwind CSS, and Framer Motion. Dark-themed with glassmorphism effects, neon accents, and smooth animations — designed to attract Gen-Z students.

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **Lucide React** — Icon library

## Features

- Fully responsive (mobile, tablet, desktop)
- Dark theme with purple/cyan neon accents
- Glassmorphism cards and navbar
- Scroll-reveal animations throughout
- Animated stat counters
- Filterable course grid (IT / Non-IT)
- Bento grid "Why Choose Us" section
- Interactive testimonial carousel
- Step-by-step learning path timeline
- Pricing cards with highlighted popular plan
- Animated FAQ accordion
- Email capture CTA section
- Floating counseling button with pulse effect
- Scroll progress indicator
- Subtle grain texture overlay
- Custom styled scrollbar

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/vamshidhar-kasulabada/futurecode-academy
cd futurecode-academy

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

Output goes to the `dist/` directory. Preview the build locally with:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   ├── Hero.jsx            # Hero section with animated counters
│   ├── TrustedBy.jsx       # Infinite scrolling company logos
│   ├── Courses.jsx         # Filterable course card grid
│   ├── WhyChooseUs.jsx     # Bento grid feature cards
│   ├── LearningPath.jsx    # Step-by-step timeline
│   ├── SuccessStories.jsx  # Testimonial carousel
│   ├── Pricing.jsx         # Three-tier pricing cards
│   ├── FAQ.jsx             # Animated accordion
│   ├── CTA.jsx             # Email capture call-to-action
│   ├── Footer.jsx          # Footer with links and socials
│   ├── ScrollProgress.jsx  # Top scroll progress bar
│   └── FloatingCTA.jsx     # Floating counseling button
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles and Tailwind config
```
