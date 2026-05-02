from PIL import Image
import os

for folder in ['mobile', 'Tablet', 'Laptop']:
    path = f'public/images/{folder}'
    print(f'\n=== {folder} ===')
    for f in os.listdir(path):
        if f.endswith('.png'):
            img = Image.open(os.path.join(path, f))
            print(f'{f}: {img.size}')
