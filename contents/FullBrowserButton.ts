// FullBrowserButton.ts
// YouTube Full Browser Mode - Full Browser Button Creator (Modular)

const BUTTON_ID = "ytp-full-browser-button"

function launchPlayerFullscreen() {
  // YouTube video player'ı bul
  const player = document.getElementById("player") || document.querySelector(".html5-video-player");
  if (player && player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player && (player as any).webkitRequestFullscreen) {
    (player as any).webkitRequestFullscreen();
  } else if (player && (player as any).msRequestFullscreen) {
    (player as any).msRequestFullscreen();
  } else {
    // fallback: video elementi bul ve dene
    const video = document.querySelector("video");
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
}

export const createFullBrowserButton = (toggleFullBrowserMode: () => void): HTMLElement => {
  const button = document.createElement("button")
  button.className = "ytp-button ytp-full-browser-button"
  button.id = BUTTON_ID
  button.title = "Full Browser Mode"

  const img = document.createElement("img")
  const imgSrc = chrome.runtime.getURL("assets/full.png")
  img.src = imgSrc
  img.alt = "Full Browser"
  img.onload = () => {
    // Optionally log or handle loaded
  }
  img.onerror = () => {
    img.alt = "FB"
  }
  button.appendChild(img)
  button.addEventListener("click", toggleFullBrowserMode)
  return button
}

export { BUTTON_ID } 