from PIL import Image, ImageDraw
import math

# Create a new image with RGBA mode (for transparency)
size = 256
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Create a radial gradient
center = size // 2
for y in range(size):
    for x in range(size):
        # Calculate distance from center
        distance = math.sqrt((x - center) ** 2 + (y - center) ** 2)
        # Normalize distance (0 to 1)
        normalized_distance = min(distance / center, 1.0)
        # Calculate alpha based on distance (inverse - center is opaque)
        alpha = int(255 * (1 - normalized_distance))
        # Set pixel with white color and variable alpha
        img.putpixel((x, y), (255, 255, 255, alpha))

# Save the image
img.save('public/brush.png')
print('Brush texture created at public/brush.png')