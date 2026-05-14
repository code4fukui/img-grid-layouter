# img-grid-layouter

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web-based tool to arrange multiple images into a single grid layout, ideal for printing or creating contact sheets.

## Demo

**[https://code4fukui.github.io/img-grid-layouter/](https://code4fukui.github.io/img-grid-layouter/)**

## Features

*   **Customizable Grid:** Define grid dimensions up to 4x4.
*   **Flexible Layout:** Choose from a wide range of predefined paper sizes (ISO A/B series, Japanese photo sizes, postcards) and switch between vertical (portrait) and horizontal (landscape) orientation.
*   **Print-Ready Output:** Select the output resolution (DPI: 72, 150, or 300) to match printing requirements.
*   **Drag & Drop Interface:** Easily add JPEG images by dragging them from your desktop into the desired grid cells.
*   **Aspect-Ratio-Correct Scaling:** Images are automatically scaled to fit within their grid cell without distortion and are centered.
*   **Instant Download:** Generate and download the final composite image as a single JPEG file with one click.

## Usage

1.  **Configure Layout:** Select your desired paper size (default: B6), DPI (default: 300), and grid dimensions (default: 4x2) from the dropdown menus.
2.  **Set Orientation:** Choose between a vertical or horizontal page layout.
3.  **Add Images:** Drag and drop your JPEG files into the placeholder cells that appear on the screen.
4.  **Generate Image:** Click the "make!" button.
5.  **Download:** Your browser will automatically download the generated `grid-layout.jpg` file.

## Dependencies

This project utilizes several external JavaScript modules:
*   [CSV.js](https://code4fukui.github.io/CSV/CSV.js): For parsing the `papersize.csv` data.
*   [dataencoder](https://code4fukui.github.io/dataencoder/encodeData.js): For encoding image data.
*   [js.sabae.cc](https://js.sabae.cc/): For utility functions including `setDropFilesListener.js`, `waitFileRead.js`, and `cr.js`.

## Data Source

*   [papersize.csv](papersize.csv) - Contains paper dimension data, including ISO 216 (A and B series) and common Japanese sizes. Sourced from Wikipedia.

## License

MIT License — see [LICENSE](LICENSE).