# Contributing to NobleTrust

Thank you for considering contributing to the NobleTrust website project! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating in this project.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
- Check the [issue tracker](https://github.com/JordanCJ7/NobleTrust/issues) to see if the problem has already been reported
- If the issue doesn't exist, create a new issue with a clear title and detailed description
- Include steps to reproduce, expected behavior, and actual behavior
- Add screenshots if applicable
- Specify your browser, operating system, and device

### Suggesting Enhancements

We welcome suggestions for improvements! When suggesting an enhancement:
- Provide a clear title and detailed description
- Explain why the enhancement would be useful to most users
- Consider including mockups or examples of how the feature might work

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run any tests or linting processes
5. Commit your changes with a descriptive message
6. Push to your branch: `git push origin feature/your-feature-name`
7. Submit a pull request

#### Style Guidelines

- **HTML**: Use semantic HTML5 elements
- **CSS/Sass**:
  - Follow the existing component-based structure
  - Add new styles to the appropriate partial SCSS file
  - Follow the established naming conventions
- **JavaScript**:
  - Follow existing code style (indentation, comments, etc.)
  - Write clear, commented code

## Development Setup

1. Clone the repository:
```
git clone https://github.com/JordanCJ7/NobleTrust.git
```

2. Install dependencies:
```
npm install
```

3. For Sass compilation during development:
```
npm run sass:watch
```

4. Make your changes and test in a browser

## Sass Structure

When adding new styles, follow the established structure:
- Global variables belong in `_variables.scss`
- Reusable mixins go in `_mixins.scss`
- Page-specific styles should be in their respective files (e.g., `_about.scss`)
- Common components should be grouped in the appropriate partial

## File Organization

Please maintain the current file organization:
- HTML files in the root directory
- CSS/SCSS files in the css directory
- JavaScript in the js directory
- Images in the images directory

## Build Process

Before submitting a pull request, ensure your code builds correctly:
```
npm run build
```

This will create a production-ready CSS file with compression.

## Questions?

If you have any questions about contributing, please open an issue in the repository or contact the maintainer directly.

Thank you for your interest in improving NobleTrust!
