"""
Hero Image Processor for Pinnacle Nepal
Renames, resizes, and compresses images for optimal web performance
"""

from PIL import Image
import os
from pathlib import Path

# Configuration
INPUT_DIR = r"c:\Users\rajan\.gemini\antigravity\scratch\consultancy-platform\public\images\hero"
TARGET_WIDTH = 1920
TARGET_HEIGHT = 1080
QUALITY = 85  # JPEG quality (1-100)
MAX_FILE_SIZE_KB = 500  # Target max file size

def get_image_files(directory):
    """Get all image files from directory"""
    valid_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    files = []
    
    for file in Path(directory).iterdir():
        if file.is_file() and file.suffix.lower() in valid_extensions:
            files.append(file)
    
    return sorted(files)

def resize_and_compress(input_path, output_path, width=TARGET_WIDTH, height=TARGET_HEIGHT, quality=QUALITY):
    """Resize image to target dimensions and compress"""
    try:
        # Open image
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for PNG with alpha channel)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Calculate aspect ratio
            original_width, original_height = img.size
            target_ratio = width / height
            original_ratio = original_width / original_height
            
            # Crop to target aspect ratio (center crop)
            if original_ratio > target_ratio:
                # Image is wider - crop width
                new_width = int(original_height * target_ratio)
                left = (original_width - new_width) // 2
                img = img.crop((left, 0, left + new_width, original_height))
            elif original_ratio < target_ratio:
                # Image is taller - crop height
                new_height = int(original_width / target_ratio)
                top = (original_height - new_height) // 2
                img = img.crop((0, top, original_width, top + new_height))
            
            # Resize to target dimensions
            img = img.resize((width, height), Image.Resampling.LANCZOS)
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Check file size and reduce quality if needed
            file_size_kb = os.path.getsize(output_path) / 1024
            current_quality = quality
            
            while file_size_kb > MAX_FILE_SIZE_KB and current_quality > 60:
                current_quality -= 5
                img.save(output_path, 'JPEG', quality=current_quality, optimize=True)
                file_size_kb = os.path.getsize(output_path) / 1024
            
            return True, file_size_kb
            
    except Exception as e:
        return False, str(e)

def main():
    print("=" * 60)
    print("PINNACLE NEPAL - HERO IMAGE PROCESSOR")
    print("=" * 60)
    print(f"\nInput Directory: {INPUT_DIR}")
    print(f"Target Size: {TARGET_WIDTH}x{TARGET_HEIGHT}")
    print(f"Quality: {QUALITY}%")
    print(f"Max File Size: {MAX_FILE_SIZE_KB}KB\n")
    
    # Get all image files
    image_files = get_image_files(INPUT_DIR)
    
    if not image_files:
        print("❌ No images found in directory!")
        return
    
    print(f"Found {len(image_files)} images\n")
    print("-" * 60)
    
    # Process and rename images
    for idx, image_file in enumerate(image_files, start=1):
        if idx > 15:  # Only process first 15 images
            print(f"⚠️  Skipping {image_file.name} (only processing first 15 images)")
            continue
        
        output_filename = f"hero-{idx}.jpg"
        output_path = Path(INPUT_DIR) / output_filename
        
        print(f"\n[{idx}/15] Processing: {image_file.name}")
        print(f"         → {output_filename}")
        
        # Get original file size
        original_size_kb = image_file.stat().st_size / 1024
        print(f"         Original size: {original_size_kb:.1f} KB")
        
        # Resize and compress
        success, result = resize_and_compress(image_file, output_path)
        
        if success:
            print(f"         ✅ Processed: {result:.1f} KB")
            print(f"         Compression: {((original_size_kb - result) / original_size_kb * 100):.1f}% reduction")
        else:
            print(f"         ❌ Error: {result}")
    
    print("\n" + "=" * 60)
    print("✅ PROCESSING COMPLETE!")
    print("=" * 60)
    print(f"\nAll images saved to: {INPUT_DIR}")
    print("Images are named: hero-1.jpg through hero-15.jpg")
    print("\nNext steps:")
    print("1. Check the images in the folder")
    print("2. Run: npm run dev")
    print("3. Open: http://localhost:3000")
    print("\n" + "=" * 60)

if __name__ == "__main__":
    main()
