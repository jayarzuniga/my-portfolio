# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React and Vite, located in the `my-web-app` directory. The project uses Tailwind CSS for styling and React Router for navigation.

## Common Commands

Navigate to the `my-web-app` directory first, then run:

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Architecture

### Routing Structure
The application uses React Router with the following main routes defined in `src/App.jsx`:
- `/` - Home page
- `/about-me` - About Me page
- `/projects` - Projects showcase
- `/contact-me` - Contact information

### Component Organization
- **Pages** (`src/pages/`): Main route components including a guides section with sub-categories:
  - `guides/GuideIndex.jsx` - Main guides listing
  - `guides/cloud-guide/` - Cloud deployment guides
  - `guides/programming-guide/` - Programming tutorials
- **Components** (`src/components/`): Reusable UI components
  - `Navbar.jsx` - Navigation component
  - `Footer.jsx` - Footer component
  - `ColorPalette.js` - Color theme utilities

### Styling
- Tailwind CSS is configured through the Vite plugin (no separate tailwind.config.js)
- Global styles are in `src/index.css`

## Development Notes

- The project uses React 19.1 with modern features
- ESLint is configured with React hooks and refresh plugins
- Images are stored in `src/assets/images/`
- The build output goes to the `dist` directory (ignored by ESLint)