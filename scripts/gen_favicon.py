#!/usr/bin/env python3
"""Generate favicon.ico (32x32) and apple-touch-icon (180x180) from BKH logo PNG."""
import os
from PIL import Image

SRC = "/home/z/my-project/public/uploads/logo-bkh.png"
OUT_ICO = "/home/z/my-project/public/favicon.ico"

def make_with_white_bg(src_img, size):
    """Composite RGBA onto white background (favicon can't have alpha reliably)."""
    im = src_img.convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    composed = Image.alpha_composite(bg, im).convert("RGB")
    return composed.resize((size, size), Image.LANCZOS)

def main():
    src = Image.open(SRC)
    print(f"Source: {src.size} {src.mode}")

    # Multi-size ICO (Windows loves 16, 32, 48 in one file)
    sizes = [16, 32, 48]
    imgs = [make_with_white_bg(src, s) for s in sizes]
    imgs[0].save(OUT_ICO, format="ICO", sizes=[(s, s) for s in sizes], append_images=imgs[1:])
    print(f"OK  {OUT_ICO}  ({os.path.getsize(OUT_ICO)} bytes, sizes={sizes})")

if __name__ == "__main__":
    main()
