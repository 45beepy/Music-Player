'use client'
import { useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <audio ref={audioRef} src="/music/sample.mp3" />
      <button
        onClick={togglePlay}
        className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}