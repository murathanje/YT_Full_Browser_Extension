import React from "react"

const EXTENSION_NAME = "YouTube Full Browser Mode"
const EXTENSION_DESCRIPTION =
  "Experience YouTube in true full browser mode. Hide distractions, expand the video, and enjoy advanced, modular controls."
const ICON_PATH = "assets/icon.png"
const REPO_URL = "https://github.com/murathanje/YT_Full_Browser_Extension" 
const DEMO_GIF_PATH = "assets/video.gif"

const PopupCard = () => (
  <div
    style={{
      minWidth: 320,
      maxWidth: 420,
      minHeight: 340,
      boxSizing: "border-box",
      margin: "0 auto",
      padding: 28,
      background: "#fff",
      borderRadius: 14,
      boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif"
    }}
  >
    <img
      src={ICON_PATH}
      alt="Extension Icon"
      style={{ width: 60, height: 60, marginBottom: 18, borderRadius: 12, boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)" }}
    />
    <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, textAlign: "center", lineHeight: 1.2 }}>
      {EXTENSION_NAME}
    </h2>
    <p style={{ margin: "14px 0 18px 0", fontSize: 15, textAlign: "center", color: "#333", lineHeight: 1.5 }}>
      {EXTENSION_DESCRIPTION}
    </p>
    <img
      src={DEMO_GIF_PATH}
      alt="Demo GIF"
      style={{ width: "100%", maxWidth: 340, borderRadius: 8, marginBottom: 18, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)" }}
    />
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "10px 24px",
        background: "#FF0000",
        color: "#fff",
        borderRadius: 7,
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 15,
        marginTop: 10,
        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)",
        transition: "background 0.2s"
      }}
    >
      View on GitHub
    </a>
  </div>
)

export default PopupCard
