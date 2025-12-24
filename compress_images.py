"""
Image Compression Script
Compresses destinations.png and flag images to optimal web sizes
"""

from PIL import Image
import os

print("=" * 70)
print("IMAGE COMPRESSION SCRIPT")
print("=" * 70)

# Configuration
DESTINATIONS_PATH = r"public\images\services\destinations.png"
FLAGS_DIR = r"public\images\flags"
TARGET_DPI = 96
QUALITY = 85

# Process Destinations Image
print("\n1. COMPRESSING DESTINATIONS IMAGE")
print("-" * 70)

if os.path.exists(DESTINATIONS_PATH):
    try:
        img = Image.open(DESTINATIONS_PATH)
        original_size = os.path.getsize(DESTINATIONS_PATH) / 1024
        
        print(f"Original: {img.width}x{img.height}px, {original_size:.0f} KB, {img.mode}")
        
        # Convert to RGB if needed
        if img.mode in ('RGBA', 'P', 'LA'):
            print(f"Converting {img.mode} → RGB (24-bit)")
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = rgb_img
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize to 1024x557 (matching service image specs)
        TARGET_WIDTH = 1024
        TARGET_HEIGHT = 557
        
        img_ratio = img.width / img.height
        target_ratio = TARGET_WIDTH / TARGET_HEIGHT
        
        if img_ratio > target_ratio:
            new_height = TARGET_HEIGHT
            new_width = int(TARGET_HEIGHT * img_ratio)
        else:
            new_width = TARGET_WIDTH
            new_height = int(TARGET_WIDTH / img_ratio)
        
        print(f"Resizing → {new_width}x{new_height}px")
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Crop to exact size
        left = (new_width - TARGET_WIDTH) // 2
        top = (new_height - TARGET_HEIGHT) // 2
        img = img.crop((left, top, left + TARGET_WIDTH, top + TARGET_HEIGHT))
        
        print(f"Cropping → {TARGET_WIDTH}x{TARGET_HEIGHT}px")
        
        # Save as JPG
        output_path = DESTINATIONS_PATH.replace('.png', '.jpg')
        img.save(output_path, 'JPEG', quality=QUALITY, optimize=True, dpi=(TARGET_DPI, TARGET_DPI))
        
        final_size = os.path.getsize(output_path) / 1024
        reduction = ((original_size - final_size) / original_size) * 100
        
        print(f"✅ Saved: destinations.jpg")
        print(f"Final: {TARGET_WIDTH}x{TARGET_HEIGHT}px, {final_size:.0f} KB ({reduction:.0f}% smaller)")
        
        # Delete original PNG
        os.remove(DESTINATIONS_PATH)
        print(f"🗑️  Deleted: destinations.png")
        
    except Exception as e:
        print(f"❌ Error: {e}")
else:
    print(f"⚠️  File not found: {DESTINATIONS_PATH}")

# Process Flag Images
print("\n2. COMPRESSING FLAG IMAGES")
print("-" * 70)

if os.path.exists(FLAGS_DIR):
    flag_files = [f for f in os.listdir(FLAGS_DIR) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if flag_files:
        print(f"Found {len(flag_files)} flag image(s)\n")
        
        for filename in flag_files:
            filepath = os.path.join(FLAGS_DIR, filename)
            
            try:
                img = Image.open(filepath)
                original_size = os.path.getsize(filepath) / 1024
                
                print(f"📁 {filename}")
                print(f"   Original: {img.width}x{img.height}px, {original_size:.0f} KB")
                
                # Convert to RGB if needed
                if img.mode in ('RGBA', 'P', 'LA'):
                    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                    img = rgb_img
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Resize if too large (max 800x600 for flags)
                MAX_WIDTH = 800
                MAX_HEIGHT = 600
                
                if img.width > MAX_WIDTH or img.height > MAX_HEIGHT:
                    img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
                    print(f"   Resized → {img.width}x{img.height}px")
                
                # Save as JPG
                output_filename = filename.replace('.png', '.jpg').replace('.PNG', '.jpg')
                output_path = os.path.join(FLAGS_DIR, output_filename)
                
                img.save(output_path, 'JPEG', quality=QUALITY, optimize=True, dpi=(TARGET_DPI, TARGET_DPI))
                
                final_size = os.path.getsize(output_path) / 1024
                reduction = ((original_size - final_size) / original_size) * 100 if original_size > 0 else 0
                
                print(f"   ✅ Saved: {output_filename} ({final_size:.0f} KB, {reduction:.0f}% smaller)")
                
                # Delete original if it was PNG
                if filename.lower().endswith('.png') and filename != output_filename:
                    os.remove(filepath)
                    print(f"   🗑️  Deleted: {filename}")
                
                print()
                
            except Exception as e:
                print(f"   ❌ Error: {e}\n")
    else:
        print("⚠️  No flag images found")
else:
    print(f"⚠️  Directory not found: {FLAGS_DIR}")

print("=" * 70)
print("COMPRESSION COMPLETE!")
print("=" * 70)
input("\nPress Enter to exit...")
