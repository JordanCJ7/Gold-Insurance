# NobleTrust Insurance Website

A responsive website for NobleTrust Insurance company, showcasing insurance products and services with a modern, user-friendly interface.

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Image slider on the homepage
- Product showcase with detailed information
- Contact form for inquiries
- Customer feedback system
- About page with company information

## Technologies Used

- HTML5
- CSS3
- Sass (SCSS)
- JavaScript (vanilla)

## Project Structure

```
NobleTrust/
├── css/
│   ├── styles.css              # Compiled CSS file
│   └── scss/                   # Sass source files
│       ├── _about.scss         # About page styles
│       ├── _contact.scss       # Contact page styles
│       ├── _feedback.scss      # Feedback page styles
│       ├── _footer.scss        # Footer styles
│       ├── _header.scss        # Header styles
│       ├── _homepage.scss      # Homepage specific styles
│       ├── _mixins.scss        # Sass mixins
│       ├── _packages.scss      # Packages page styles
│       ├── _reset.scss         # Base reset styles
│       ├── _slider.scss        # Image slider styles
│       ├── _variables.scss     # Sass variables
│       └── main.scss           # Main Sass file that imports all partials
├── images/                     # Image assets
├── js/
│   └── scripts.js              # JavaScript functionality
├── about.html                  # About page
├── contact.html                # Contact page
├── feedback.html               # Feedback page
├── index.html                  # Homepage
├── packages.html               # Packages page
└── package.json                # Node.js package file for Sass compilation
```

## Sass Implementation

This project uses Sass (SCSS syntax) for more maintainable CSS. The styles are organized as follows:

- **_variables.scss**: Contains all color, font, spacing variables
- **_mixins.scss**: Contains reusable style patterns
- **_reset.scss**: Basic reset and global styles
- Other files are organized by component or page

## Getting Started

### Prerequisites

- Node.js and npm (for Sass compilation)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/JordanCJ7/NobleTrust.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile Sass to CSS:
   ```
   npm run sass
   ```

4. For development with auto-recompilation:
   ```
   npm run sass:watch
   ```

## Development

To modify styles:

1. Edit the appropriate .scss file in the css/scss directory
2. The changes will be automatically compiled to styles.css if you're running sass:watch
3. If not running the watch script, manually compile with `npm run sass`
