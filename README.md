# YouTube Full Browser Mode Extension

This project is a Chrome extension that provides a true full browser experience on YouTube, with advanced customization for the video bar and controls. Built with the Plasmo framework.

![YouTube Full Browser Mode Extension Icon](assets/icon.png)

## Features

- **Full Browser Mode:**
  - Expands the YouTube video player and controls to fill the entire browser window.
  - Hides all unnecessary page elements for distraction-free viewing.
- **Video Bar & Controls:**
  - The video bar (`ytp-chrome-bottom`) and progress bar span the full width of the screen.
  - All right-side icons (settings, captions, fullscreen, etc.) are fully right-aligned.
  - Captions and the settings menu are always visible and accessible over the video.
- **Mouse-Driven Control Visibility:**
  - In full browser mode, the control bar automatically hides when the mouse is outside the video area.
  - When the mouse enters the video area, the bar appears and auto-hides after a short delay.
- **Modular, Reusable Code:**
  - All functions and styles are modular, reusable, and follow best practices.
  - No hard-coded or repetitive structures; all styles are externally manageable.

## Installation & Setup

> **Note:** This project uses [pnpm](https://pnpm.io/) as the recommended package manager. If you don't have pnpm installed, you can install it globally with:
>
> ```bash
> npm install -g pnpm
> ```

### 1. Clone the Repository

```bash
git clone https://github.com/murathanje/YT_Full_Browser_Extension
cd yt-full-extension
```

### 2. Install Dependencies

Install all dependencies listed in `package.json`:

```bash
pnpm install
```

> This will install all required packages as defined in your `package.json` file. For more details, see the [official npm install guide](https://www.browserstack.com/guide/update-dependencies-in-package-json-using-npm).

### 3. Keeping Dependencies Up to Date

To update all dependencies to their latest compatible versions as defined in `package.json`:

```bash
pnpm update
```

To update a specific package:

```bash
pnpm update <package-name>
```

After updating, always test your application to ensure compatibility. For more on updating and managing dependencies, see:
- [How to Update Dependencies in package.json Using npm? (BrowserStack Guide)](https://www.browserstack.com/guide/update-dependencies-in-package-json-using-npm)
- [How to Upgrade Dependencies in Your package.json (Better Programming)](https://betterprogramming.pub/how-to-upgrade-dependencies-in-package-json-e5546804187f?gi=8f38792ea594)

### 4. Start the Development Server

```bash
pnpm run dev
```

Load the development build in your browser from the `build/chrome-mv3-dev` directory.

### 5. Production Build

```bash
pnpm run build
```

You can load the generated build folder as a Chrome extension.

## Usage

1. Open any video on YouTube.
2. Click the newly added "Full Browser Mode" button in the video bar.
3. In full browser mode, the video bar and controls are automatically optimized for the best experience.
4. When your mouse leaves the video area, the control bar hides; when you move the mouse over the video, it reappears.

## Developer Notes & Best Practices

- **Modularity:** All functions are written in separate, functional modules.
- **No Code Duplication:** Shared logic is abstracted into reusable functions.
- **No Hard-Coding:** All styles and values are managed via variables and CSS custom properties.
- **Component-Based:** Button and control logic are managed in separate modules.
- **Comments:** Only clear, necessary comments are included for maintainability.

## Contributing

Pull requests and issues are welcome. Please follow modularity and best practice guidelines when contributing.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/) license.

- **You are free to:**
  - Share, copy, and redistribute the material in any medium or format
  - Adapt, remix, transform, and build upon the material
- **Under the following terms:**
  - **Attribution:** You must give appropriate credit to the original author (**murathanje**), provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
  - **NonCommercial:** You may not use the material for commercial purposes.

For full license details, see the [CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/).
