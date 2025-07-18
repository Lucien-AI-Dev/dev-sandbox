// Simple validation test for the landing page
const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

console.log('🧪 Testing Landing Page Structure...\n');

// Test 1: Check for required HTML elements
const tests = [
    { name: 'DOCTYPE declaration', test: htmlContent.includes('<!DOCTYPE html>') },
    { name: 'HTML lang attribute', test: htmlContent.includes('<html lang="en">') },
    { name: 'Meta viewport', test: htmlContent.includes('name="viewport"') },
    { name: 'CSS link', test: htmlContent.includes('href="styles.css"') },
    { name: 'Header navigation', test: htmlContent.includes('class="header"') },
    { name: 'Hero section', test: htmlContent.includes('class="hero"') },
    { name: 'Features section', test: htmlContent.includes('id="features"') },
    { name: 'Waitlist section', test: htmlContent.includes('id="waitlist"') },
    { name: 'Waitlist form', test: htmlContent.includes('id="waitlistForm"') },
    { name: 'Form inputs', test: htmlContent.includes('name="firstName"') && htmlContent.includes('name="email"') },
    { name: 'Submit button', test: htmlContent.includes('type="submit"') },
    { name: 'Success message', test: htmlContent.includes('id="successMessage"') },
    { name: 'Footer', test: htmlContent.includes('class="footer"') },
    { name: 'JavaScript form handler', test: htmlContent.includes('addEventListener') }
];

let passed = 0;
let failed = 0;

tests.forEach(test => {
    if (test.test) {
        console.log(`✅ ${test.name}`);
        passed++;
    } else {
        console.log(`❌ ${test.name}`);
        failed++;
    }
});

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

// Test 2: Check CSS file exists and has content
try {
    const cssContent = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
    if (cssContent.length > 1000) {
        console.log('✅ CSS file exists and has substantial content');
    } else {
        console.log('❌ CSS file is too small or empty');
    }
} catch (error) {
    console.log('❌ CSS file not found');
}

console.log('\n🎉 Landing page structure validation complete!');
