"""
Course Images Compression Script
Converts PNG to JPG and resizes to exact specifications:
- Input: PNG files (1.0-1.4 MB each)
- Output: JPG files at 1109x619px, 96 DPI, 100-300 KB
"""

from PIL import Image
import os

# Configuration
input_dir = r"public\images\courses"
TARGET_WIDTH = 1109
TARGET_HEIGHT = 619
TARGET_DPI = 96
QUALITY = 85

print("=" * 70)
print("COURSE IMAGES COMPRESSION SCRIPT")
print("=" * 70)
print(f"Target: {TARGET_WIDTH}x{TARGET_HEIGHT}px, 96 DPI, JPG format")
print(f"Directory: {input_dir}")
print("=" * 70)

if not os.path.exists(input_dir):
    print(f"\n❌ ERROR: Directory not found: {input_dir}")
    input("\nPress Enter to exit...")
    exit(1)

# Get PNG files
png_files = [f for f in os.listdir(input_dir) if f.lower().endswith('.png')]

if not png_files:
    print(f"\n⚠ No PNG files found!")
    input("\nPress Enter to exit...")
    exit(1)

print(f"\nFound {len(png_files)} PNG file(s)\n")

processed = 0
for filename in png_files:
    filepath = os.path.join(input_dir, filename)
    
    print(f"📁 {filename}")
    print("-" * 70)
    
    try:
        img = Image.open(filepath)
        original_kb = os.path.getsize(filepath) / 1024
        
        print(f"   Original: {img.width}x{img.height}px, {original_kb:.0f} KB, {img.mode}")
        
        # Convert to RGB (remove alpha channel)
        if img.mode in ('RGBA', 'P', 'LA'):
            print(f"   Converting {img.mode} → RGB (24-bit)")
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = rgb_img
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize to exact dimensions
        img_ratio = img.width / img.height
        target_ratio = TARGET_WIDTH / TARGET_HEIGHT
        
        if img_ratio > target_ratio:
            new_height = TARGET_HEIGHT
            new_width = int(TARGET_HEIGHT * img_ratio)
        else:
            new_width = TARGET_WIDTH
            new_height = int(TARGET_WIDTH / img_ratio)
        
        print(f"   Resizing → {new_width}x{new_height}px")
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Crop to exact size
        left = (new_width - TARGET_WIDTH) // 2
        top = (new_height - TARGET_HEIGHT) // 2
        img = img.crop((left, top, left + TARGET_WIDTH, top + TARGET_HEIGHT))
        
        print(f"   Cropping → {TARGET_WIDTH}x{TARGET_HEIGHT}px")
        
        # Save as JPG
        output_filename = filename.replace('.png', '.jpg')
        output_path = os.path.join(input_dir, output_filename)
        
        img.save(output_path, 'JPEG', quality=QUALITY, optimize=True, dpi=(TARGET_DPI, TARGET_DPI))
        
        final_kb = os.path.getsize(output_path) / 1024
        reduction = ((original_kb - final_kb) / original_kb) * 100
        
        print(f"   ✅ Saved: {output_filename}")
        print(f"   Final: {TARGET_WIDTH}x{TARGET_HEIGHT}px, {final_kb:.0f} KB ({reduction:.0f}% smaller)")
        
        # Delete original PNG
        os.remove(filepath)
        print(f"   🗑️  Deleted: {filename}")
        
        processed += 1
        
    except Exception as e:
        print(f"   ❌ Error: {e}")
    
    print()

print("=" * 70)
print(f"✅ Processed {processed} image(s)")
print("=" * 70)

# Show final results
print("\nFinal files:")
print("-" * 70)
for filename in sorted(os.listdir(input_dir)):
    if filename.lower().endswith('.jpg'):
        filepath = os.path.join(input_dir, filename)
        size_kb = os.path.getsize(filepath) / 1024
        with Image.open(filepath) as img:
            status = "✅" if size_kb <= 300 else "⚠"
            print(f"{status} {filename:30s} {img.width}x{img.height}px, {size_kb:6.0f} KB")

print("=" * 70)
input("\nPress Enter to exit...")
