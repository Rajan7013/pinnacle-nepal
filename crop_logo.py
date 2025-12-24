from PIL import Image
import sys
import os

def crop_icon(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        # Simple bounding box detection for non-white pixels
        # efficient approach: scan and find bounds
        
        # Since the icon is on the left, we can probably target the left half of the image
        # or just crop to content.
        
        # Let's crop to content first (remove whitespace)
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
        
        # Now, assuming the text is to the right of the icon.
        # The icon is roughly square-ish and on the left.
        # Let's inspect the width and height.
        w, h = img.size
        
        # Heuristic: The icon is likely the first distinct object on the left.
        # However, a simpler approach given the user's specific request and standard logo layouts:
        # The icon is usually separated from the text. 
        # Let's try to just crop the left 30-40% or check mainly for vertical whitespace columns?
        
        # Actually, looking at the uploaded image artifact, the icon is a diamond shape on the left.
        # It seems separated by whitespace from "Pinnacle".
        # Let's find the first column of white space after some content to separate icon from text.
        
        pixels = img.load()
        width, height = img.size
        
        split_x = width # Default to full width if no split found
        
        # Start scanning from left (after some initial content)
        # Skip first 10% to avoid edge noise
        scan_start = int(width * 0.1)
        found_content = False
        
        for x in range(scan_start, width):
            is_column_white = True
            for y in range(height):
                r, g, b, a = pixels[x, y]
                # Check for non-white pixel
                if a > 0 and (r < 240 or g < 240 or b < 240):
                    is_column_white = False
                    break
            
            if not is_column_white:
                found_content = True
            
            # If we found content, then hit a white column, that's our split
            if found_content and is_column_white:
                # Check if it's a wide enough gap? 
                # Let's just take the first white column as the cut point for safety.
                split_x = x
                break
        
        # Crop to the split
        icon = img.crop((0, 0, split_x, height))
        
        # Trim whitespace again from the icon
        bbox_icon = icon.getbbox()
        if bbox_icon:
            icon = icon.crop(bbox_icon)
            
        icon.save(output_path)
        print(f"Successfully cropped icon to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    crop_icon(sys.argv[1], sys.argv[2])
