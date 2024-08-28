export const drawImageFit = (g, img, x, y, w, h) => {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  if (iw / ih > w / h) {
    const iw2 = w;
    const ih2 = ih / iw * w;
    const offy = (h - ih2) / 2;
    g.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, x, y + offy, iw2, ih2);
  } else {
    const ih2 = h;
    const iw2 = iw / ih * h;
    const offx = (w - iw2) / 2;
    g.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, x + offx, y, iw2, ih2);
  }
};
