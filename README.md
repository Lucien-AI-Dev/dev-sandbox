# Landing Page with Waitlist Form

A modern, responsive landing page with a waitlist signup form built using only HTML and CSS.

## Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Waitlist Form**: Complete form with validation and success state
- **Smooth Animations**: CSS animations for enhanced user experience
- **Accessibility**: Proper focus states and semantic HTML structure
- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## Structure

- `index.html` - Main HTML file with semantic structure
- `styles.css` - Complete CSS styling with responsive design
- `test_validation.js` - Validation script to test the page structure

## Sections

1. **Header**: Fixed navigation with smooth scrolling links
2. **Hero**: Eye-catching introduction with call-to-action
3. **Features**: Three-column grid showcasing key benefits
4. **Waitlist**: Form to collect user information
5. **Footer**: Simple footer with links and branding

## Form Fields

- First Name (required)
- Last Name (required)
- Email Address (required)
- Company (optional)
- Newsletter subscription checkbox

## How to Use

1. Open `index.html` in any modern web browser
2. Or serve it using a local server:
   ```bash
   python3 -m http.server 8080
   ```
3. Navigate to `http://localhost:8080`

## Customization

The design uses CSS custom properties and is easy to customize:

- **Colors**: Modify the gradient colors in the CSS
- **Typography**: Change font families in the body selector
- **Spacing**: Adjust padding and margins throughout
- **Content**: Update text content in the HTML file

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

The form currently shows a success message on submission. To make it functional:

1. Add a backend API endpoint
2. Connect the form to your email service
3. Add form validation on the server side
4. Implement analytics tracking

## File Sizes

- HTML: ~6.3KB
- CSS: ~9.6KB
- Total: ~16KB (very lightweight!)
