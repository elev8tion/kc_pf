const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 256x256 radial gradient brush
const size = 256;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Create radial gradient
const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, size, size);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/brush.png', buffer);

console.log('Brush texture created at public/brush.png');