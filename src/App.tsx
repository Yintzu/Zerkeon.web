import Logo from "./assets/Logo.png"
import Walk from "./assets/Walk.gif"
import Idle from "./assets/Idle.gif"
import Play from "./assets/Play.png"
import PlayHover from "./assets/PlayHover.png"
import Pause from "./assets/Pause.png"
import PauseHover from "./assets/PauseHover.png"
import ZerkeronTheme from "./assets/zerkeon.wav"
import { useState } from "react"

const mainTheme = new Audio(ZerkeronTheme)
mainTheme.volume = 0.3

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const calcButtonSprite = () => {
    if (isHovering) {
      if (isPlaying) return PauseHover
      return PlayHover
    }
    if (isPlaying) return Pause
    return Play
  }

  const togglePlay = () => {
    console.log("first")
    if (isPlaying) {
      mainTheme.pause()
      setIsPlaying(false)
    } else {
      mainTheme.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={Logo} />
        <img
          className="playButton"
          src={calcButtonSprite()}
          onMouseOver={(e) => setIsHovering(true)}
          onMouseLeave={(e) => setIsHovering(false)}
          onClick={() => togglePlay()}
        />
        <h1>
          In development
          {[...new Array(3)].map((dot, i) => (
            <span className="dot" style={{ animationDelay: `0.${i}s` }}>
              .
            </span>
          ))}
        </h1>
        <img className="zerkman" src={isPlaying ? Walk : Idle} />
      </div>
    </div>
  )
}
