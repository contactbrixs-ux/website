from PIL import Image, ImageDraw
import sys

def remove_background(input_path, output_path, tolerance=30):
    # Open image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    
    # We will use floodfill to create a mask of the background.
    # Start floodfill from the four corners.
    width, height = img.size
    
    # Create a mask image (L mode, 1-bit or 8-bit pixels)
    # 0 = not background, 255 = background
    mask = Image.new('L', (width, height), 0)
    
    # To use floodfill effectively, we can floodfill the original image 
    # but we need a target color. Since we just want transparency, 
    # we can floodfill with a unique color like (255,0,255,0), but ImageDraw.floodfill 
    # modifies the image in place.
    
    # Let's do it on a copy
    img_copy = img.copy()
    
    corners = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    # Transparent magenta as our "magic" background replacement color
    magic_color = (255, 0, 255, 0)
    
    for corner in corners:
        # Get the color at the corner
        corner_color = img_copy.getpixel(corner)
        
        # If it's already the magic color, skip
        if corner_color == magic_color:
            continue
            
        # Flood fill the background with magic color
        ImageDraw.floodfill(img_copy, corner, magic_color, thresh=tolerance)
        
    # Now anything that is magic_color becomes transparent
    data = img_copy.getdata()
    new_data = []
    for item in data:
        if item == magic_color:
            new_data.append((255, 255, 255, 0)) # Fully transparent
        else:
            # Let's also do a bit of alpha blending for edges if possible, but 
            # for now hard transparency is fine.
            new_data.append(item)
            
    img_copy.putdata(new_data)
    img_copy.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

# Process all three
remove_background("public/assets/use-brixs-new.jpg", "public/assets/use-brixs-new.png", tolerance=15)
remove_background("public/assets/build-brixs-new.jpg", "public/assets/build-brixs-new.png", tolerance=20)
remove_background("public/assets/open-source-new.jpg", "public/assets/open-source-new.png", tolerance=15)
