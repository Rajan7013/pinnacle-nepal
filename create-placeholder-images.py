from PIL import Image, ImageDraw, ImageFont
import os

d = 'public/images/hero'
slides = [
    ('visa', '#1a365d', '#2d3748'),
    ('study-india', '#234e52', '#276749'),
    ('study-abroad', '#2a4365', '#2b6cb0'),
    ('career-counseling', '#3c3666', '#553c9a'),
    ('test-prep', '#44337a', '#6b46c1'),
]

mobile_size = (1080, 1920)
tablet_size = (1280, 960)
desktop_size = (1920, 1080)

for name, bg_color, accent in slides:
    for device, size in [('mobile', mobile_size), ('tablet', tablet_size), ('desktop', desktop_size)]:
        w, h = size
        img = Image.new('RGB', size, bg_color)
        draw = ImageDraw.Draw(img)
        
        # Add subtle gradient effect
        for y in range(h):
            factor = y / h
            r = int(int(bg_color[1:3], 16) * (1 - factor * 0.3))
            g = int(int(bg_color[3:5], 16) * (1 - factor * 0.3))
            b = int(int(bg_color[5:7], 16) * (1 - factor * 0.2))
            draw.line([(0, y), (w, y)], fill=(r, g, b))
        
        # Add accent shape
        if device == 'mobile':
            draw.rectangle([0, h*0.4, w, h*0.45], fill=accent)
            draw.ellipse([w*0.3, h*0.15, w*0.7, h*0.35], fill=accent)
        elif device == 'tablet':
            draw.rectangle([w*0.6, 0, w*0.65, h], fill=accent)
            draw.ellipse([w*0.1, h*0.2, w*0.35, h*0.8], fill=accent)
        else:
            draw.rectangle([w*0.7, 0, w*0.75, h], fill=accent)
            draw.ellipse([w*0.15, h*0.1, w*0.4, h*0.9], fill=accent)
        
        path = os.path.join(d, f'hero-{name}-{device}.webp')
        img.save(path, 'WEBP', quality=85)
        print(f'Created: hero-{name}-{device}.webp ({w}x{h})')

print('\nDone! All 15 placeholder images created.')
