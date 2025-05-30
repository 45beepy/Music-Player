import AudioPlayer from '../components/AudioPlayer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">My Music Player</h1>
      <AudioPlayer />
    </main>
  )
}