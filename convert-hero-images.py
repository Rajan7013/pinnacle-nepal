from PIL import Image
import os

d = 'public/images/hero'
portrait_imgs = {
    'Study abroad.webp': 'hero-visa.webp',
    'Study in india.webp': 'hero-study-india.webp',
    'Travel Care.webp': 'hero-study-abroad.webp',
    'Your Destination.webp': 'hero-career-counseling.webp'
}

for src, dest in portrait_imgs.items():
    src_path = os.path.join(d, src)
    dest_path = os.path.join(d, dest)
    
    img = Image.open(src_path)
    w, h = img.size  # 1024x1536
    
    # Create landscape canvas 16:9 (1920x1080)
    canvas_w, canvas_h = 1920, 1080
    canvas = Image.new('RGB', (canvas_w, canvas_h), (0, 51, 102))
    
    # Scale image to fill canvas height
    scale = canvas_h / h
    new_w = int(w * scale)
    resized = img.resize((new_w, canvas_h), Image.LANCZOS)
    
    # Center paste
    x_offset = (canvas_w - new_w) // 2
    canvas.paste(resized, (x_offset, 0))
    
    canvas.save(dest_path, 'WEBP', quality=85)
    print(f'Created {dest}: {canvas_w}x{canvas_h}')
