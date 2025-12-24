"""
Course Images Compression Script
Resizes and compresses images to exact specifications:
- Dimensions: 1109 x 619 pixels
- DPI: 96
- Format: JPG (24-bit RGB)
- Target Size: 100-300 KB
"""

from PIL import Image
import os

# Configuration
input_dir = r"c:\Users\rajan\.gemini\antigravity\scratch\consultancy-platform\public\images\courses"
output_dir = input_dir  # Overwrite originals
TARGET_WIDTH = 1109
TARGET_HEIGHT = 619
TARGET_DPI = 96
QUALITY = 85  # JPEG quality (0-100)

print("=" * 70)
print("COURSE IMAGES COMPRESSION SCRIPT")
print("=" * 70)
print(f"Target Dimensions: {TARGET_WIDTH} x {TARGET_HEIGHT} pixels")
print(f"Target DPI: {TARGET_DPI}")
print(f"JPEG Quality: {QUALITY}")
print(f"Input Directory: {input_dir}")
print("=" * 70)

# Check if directory exists
if not os.path.exists(input_dir):
    print(f"\n❌ ERROR: Directory does not exist!")
    print(f"   Path: {input_dir}")
    print("\nPlease create the directory first:")
    print(f"   mkdir {input_dir}")
    input("\nPress Enter to exit...")
    exit(1)

# Get list of image files
image_files = [f for f in os.listdir(input_dir) 
               if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

if not image_files:
    print(f"\n⚠ WARNING: No image files found in directory!")
    print(f"   Looking in: {input_dir}")
    print("\nPlease add images to the directory first.")
    input("\nPress Enter to exit...")
    exit(1)

print(f"\nFound {len(image_files)} image(s) to process\n")

# Process each image
processed = 0
errors = 0

for filename in image_files:
    filepath = os.path.join(input_dir, filename)
    
    print(f"📁 Processing: {filename}")
    print("-" * 70)
    
    try:
        # Open image
        img = Image.open(filepath)
        original_size_kb = os.path.getsize(filepath) / 1024
        
        print(f"   Original: {img.width}x{img.height} px, {original_size_kb:.1f} KB, {img.mode} mode")
        
        # Convert to RGB if needed (remove alpha channel)
        if img.mode in ('RGBA', 'P', 'LA'):
            print(f"   Converting from {img.mode} to RGB (24-bit)...")
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = rgb_img
        elif img.mode != 'RGB':
            print(f"   Converting from {img.mode} to RGB...")
            img = img.convert('RGB')
        
        # Calculate resize dimensions maintaining aspect ratio
        img_ratio = img.width / img.height
        target_ratio = TARGET_WIDTH / TARGET_HEIGHT
        
        if img_ratio > target_ratio:
            # Image is wider - fit to height and crop width
            new_height = TARGET_HEIGHT
            new_width = int(TARGET_HEIGHT * img_ratio)
        else:
            # Image is taller - fit to width and crop height
            new_width = TARGET_WIDTH
            new_height = int(TARGET_WIDTH / img_ratio)
        
        # Resize with high-quality resampling
        print(f"   Resizing to {new_width}x{new_height} px...")
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Crop to exact dimensions from center
        left = (new_width - TARGET_WIDTH) // 2
        top = (new_height - TARGET_HEIGHT) // 2
        right = left + TARGET_WIDTH
        bottom = top + TARGET_HEIGHT
        
        print(f"   Cropping to exact {TARGET_WIDTH}x{TARGET_HEIGHT} px...")
        img = img.crop((left, top, right, bottom))
        
        # Prepare output filename (convert PNG to JPG)
        output_filename = filename.lower()
        if output_filename.endswith('.png'):
            output_filename = output_filename.replace('.png', '.jpg')
        
        output_path = os.path.join(output_dir, output_filename)
        
        # Save as JPEG with specified quality and DPI
        print(f"   Saving as JPG (Quality: {QUALITY}, DPI: {TARGET_DPI})...")
        img.save(output_path, 'JPEG', 
                quality=QUALITY, 
                optimize=True, 
                dpi=(TARGET_DPI, TARGET_DPI))
        
        # Check final file size
        final_size_kb = os.path.getsize(output_path) / 1024
        reduction = ((original_size_kb - final_size_kb) / original_size_kb) * 100 if original_size_kb > 0 else 0
        
        print(f"   ✅ Final: {TARGET_WIDTH}x{TARGET_HEIGHT} px, {final_size_kb:.1f} KB")
        print(f"   📊 Size reduction: {reduction:.1f}%")
        
        if final_size_kb > 300:
            print(f"   ⚠ Warning: File size ({final_size_kb:.1f} KB) exceeds 300 KB target")
        
        processed += 1
        
    except Exception as e:
        print(f"   ❌ Error: {str(e)}")
        errors += 1
    
    print()

# Summary
print("=" * 70)
print("PROCESSING COMPLETE")
print("=" * 70)
print(f"✅ Successfully processed: {processed} image(s)")
if errors > 0:
    print(f"❌ Errors: {errors} image(s)")
print()

# List final directory contents
print("Final directory contents:")
print("-" * 70)
for filename in sorted(os.listdir(input_dir)):
    if filename.lower().endswith(('.jpg', '.jpeg')):
        filepath = os.path.join(input_dir, filename)
        size_kb = os.path.getsize(filepath) / 1024
        
        # Open to check dimensions
        try:
            with Image.open(filepath) as img:
                status = "✅" if (img.width == TARGET_WIDTH and img.height == TARGET_HEIGHT and size_kb <= 300) else "⚠"
                print(f"{status} {filename:30s} {img.width}x{img.height} px, {size_kb:6.1f} KB")
        except:
            print(f"❌ {filename:30s} (Could not read)")

print("=" * 70)
input("\nPress Enter to exit...")
