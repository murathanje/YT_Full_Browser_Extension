import type { PlasmoCSConfig } from "plasmo"
import cssText from "data-text:./style.css"
import { createFullBrowserButton, BUTTON_ID } from "./FullBrowserButton"

// Import style.css as a string to be injected
// Note: The `data-text:` prefix is a Plasmo-specific way to import text files.
// Ensure your package.json is configured for this content script as discussed.

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"],
  // css: ["style.css"] // This can also be specified in package.json, which is preferred.
  all_frames: true, // Ensures the script runs in all frames if necessary
}

// Helper to inject CSS
const injectCSS = () => {
  try {
    const styleElement = document.createElement("style")
    styleElement.id = "full-browser-mode-style"
    styleElement.textContent = cssText
    document.head.appendChild(styleElement)
    console.log("Full Browser Mode CSS injected.")
  } catch (e) {
    console.error("Failed to inject CSS:", e)
  }
}

injectCSS() // Inject CSS as soon as the script runs

const FULL_BROWSER_CLASS = "full-browser-mode"

let isFullBrowserMode = false

const getPlayerControls = (): HTMLElement | null => {
  return document.querySelector(".ytp-right-controls")
}

const toggleFullBrowserMode = () => {
  isFullBrowserMode = !isFullBrowserMode
  document.body.classList.toggle(FULL_BROWSER_CLASS, isFullBrowserMode)
  window.dispatchEvent(new Event('resize'))
}

// Helper: Show/hide controls in full browser mode
const setFullBrowserControlsVisible = (visible: boolean) => {
  const chromeBottom = document.querySelector('.ytp-chrome-bottom') as HTMLElement
  if (!chromeBottom) return
  if (visible) {
    chromeBottom.classList.remove('full-browser-hide-controls')
  } else {
    chromeBottom.classList.add('full-browser-hide-controls')
  }
}

// Mouse move/leave logic for full browser mode
let hideControlsTimeout: ReturnType<typeof setTimeout> | null = null

const handleBodyMouseMove = (e: MouseEvent) => {
  if (!isFullBrowserMode) return
  // Eğer mouse video üzerinde değilse çubuğu gizle
  const video = document.querySelector('video')
  if (!video) return
  const rect = video.getBoundingClientRect()
  if (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  ) {
    setFullBrowserControlsVisible(true)
    if (hideControlsTimeout) clearTimeout(hideControlsTimeout)
    hideControlsTimeout = setTimeout(() => setFullBrowserControlsVisible(false), 2000)
  } else {
    setFullBrowserControlsVisible(false)
  }
}

const setupFullBrowserMouseHandlers = () => {
  document.body.addEventListener('mousemove', handleBodyMouseMove)
}

const removeFullBrowserMouseHandlers = () => {
  document.body.removeEventListener('mousemove', handleBodyMouseMove)
}

// Full browser mode toggle'da mouse handler ekle/çıkar
const originalToggleFullBrowserMode = toggleFullBrowserMode
const enhancedToggleFullBrowserMode = () => {
  originalToggleFullBrowserMode()
  if (isFullBrowserMode) {
    setupFullBrowserMouseHandlers()
  } else {
    removeFullBrowserMouseHandlers()
    setFullBrowserControlsVisible(true)
  }
}

// Replace button logic to use enhanced toggle
const injectButton = () => {
  const controls = getPlayerControls()
  if (controls && !document.getElementById(BUTTON_ID)) {
    const fullBrowserButton = createFullBrowserButton(enhancedToggleFullBrowserMode)
    const settingsButton = controls.querySelector('.ytp-settings-button')
    if (settingsButton) {
      controls.insertBefore(fullBrowserButton, settingsButton)
    } else {
      controls.insertBefore(fullBrowserButton, controls.lastChild)
    }
    console.log('Full Browser Mode button injected.')
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isFullBrowserMode) {
    // toggleFullBrowserMode()
  }
}

// Debounce function
const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => func(...args), waitFor)
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>
}

const handleResize = () => {
  if (isFullBrowserMode) {
    // The CSS should handle most of this, but if specific JS adjustments are needed:
    // For example, force video player to re-calculate dimensions if CSS isn't enough.
    // window.dispatchEvent(new Event('resize')); // Already in toggle, maybe not needed here unless specific logic
  }
}

const debouncedResizeHandler = debounce(handleResize, 250)

const initialize = () => {
  console.log("YouTube Full Browser Mode extension initializing...")
  injectButton()

  // Check if already in full browser mode (e.g., after a page reload while active)
  if (document.body.classList.contains(FULL_BROWSER_CLASS)) {
    isFullBrowserMode = true
  }
}

// Listen for YouTube navigation events to re-inject the button if needed
// YouTube uses different events, yt-navigate-finish is common for page changes.
// Using a MutationObserver is more robust for elements appearing dynamically.

const setupObserver = () => {
  const targetNode = document.getElementById("movie_player") || document.body;
  if (!targetNode) {
      console.warn("Target node for MutationObserver not found.");
      // Retry or use a more reliable selector if #movie_player isn't always there early
      setTimeout(setupObserver, 1000); // Retry after a second
      return;
  }

  const observer = new MutationObserver((mutationsList, observerInstance) => {
    // We are looking for the controls to appear or change.
    if (getPlayerControls() && !document.getElementById(BUTTON_ID)) {
      console.log("Controls appeared or changed, attempting to re-inject button.")
      injectButton()
    }
    // If the video changes, ensure the button is still there
    const videoElement = document.querySelector('video');
    if (videoElement && videoElement.onloadeddata === null) { // Check if new video loaded
        videoElement.onloadeddata = () => {
            if (getPlayerControls() && !document.getElementById(BUTTON_ID)) {
                injectButton();
            }
        };
    }
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
  console.log("MutationObserver set up on:", targetNode);
};

// Initial setup
if (document.readyState === "complete" || document.readyState === "interactive") {
  initialize()
  setupObserver()
} else {
  document.addEventListener("DOMContentLoaded", () => {
    initialize()
    setupObserver()
  })
}

document.addEventListener("yt-navigate-finish", initialize) // Re-initialize on YouTube navigation
window.addEventListener("keydown", handleKeyDown)
window.addEventListener("resize", debouncedResizeHandler)

console.log("YouTube Full Browser content script loaded.") 