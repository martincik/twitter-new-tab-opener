# Twitter New Tab Opener

The **Twitter New Tab Opener** is a simple yet powerful Chrome extension designed to enhance your browsing experience on Twitter. With just one click, you can open tweets in a new tab, making it easier to manage multiple conversations, explore threads, and keep your main feed uncluttered. Whether you’re a power user, researcher, or casual scroller, this tool helps you multitask seamlessly and stay organized.

## Features

- **One-Click Operation:** Open tweets in a new background tab effortlessly.
- **Seamless Integration:** Adds a button directly to the tweet action group.
- **Automatic Processing:** Detects and processes new tweets dynamically.
- **Lightweight:** Minimal impact on browser performance.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/twitter-newtab-opener.git
   cd twitter-newtab-opener
   ```

2. **Build the Extension:**

   ```bash
   pnpm zip
   ```

   This will create a `extension.zip` file containing all necessary files.

3. **Load the Extension in Chrome:**

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode**.
   - Click on **Load unpacked** and select the project directory.

## Usage

Once installed, navigate to Twitter. You'll see a new button on each tweet allowing you to open it in a new tab. Click the button to manage your tweets more efficiently.

## Development

### Project Structure

- **`manifest.json`**: Configuration for the Chrome extension.
- **`content.js`**: Handles adding buttons to tweets.
- **`background.js`**: Manages background tasks like opening new tabs.
- **`styles.css`**: Styles for the new button.
- **`package.json`**: Project metadata and scripts.
- **`.gitignore`**: Specifies files to ignore in Git.
- **`.bolt/config.json`**: Configuration for Bolt, if applicable.

### Available Scripts

- **Zip the Extension:**

  ```bash
  pnpm zip
  ```

  This command zips all necessary files into `extension.zip` for distribution.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

MIT License. See [LICENSE](LICENSE) for more information.

## Acknowledgements

Built with ❤️ for an enhanced Twitter experience.
