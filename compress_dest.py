import os
from PIL import Image

def compress_images(directory, quality=70, max_width=1200):
    total_saved = 0
    print(f"Compressing images in {directory}...")
    
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        return

    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            filepath = os.path.join(directory, filename)
            original_size = os.path.getsize(filepath)
            
            try:
                with Image.open(filepath) as img:
                    # Convert P/RGBA to RGB if we want to force JPG, but here we just optimize inplace
                    if img.mode == 'P':
                        img = img.convert('RGB')
                    
                    # Resize if width > max_width
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    
                    # Save with optimization
                    save_args = {'optimize': True}
                    if filename.lower().endswith(('.jpg', '.jpeg')):
                         save_args['quality'] = quality
                    
                    img.save(filepath, **save_args)
                    
                    new_size = os.path.getsize(filepath)
                    saved = original_size - new_size
                    total_saved += saved
                    
                    print(f"Compressed {filename}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Saved {saved/1024:.1f}KB)")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

    print(f"\nTotal space saved: {total_saved/1024/1024:.2f} MB")

if __name__ == "__main__":
    target_dir = r"c:\Users\rajan\.gemini\antigravity\scratch\consultancy-platform\public\images\destinations"
    compress_images(target_dir)