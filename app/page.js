import Image from 'next/image'
import VideoWrapper from './components/VideoWrapper/index'

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <VideoWrapper />
      <div className="mx-auto absolute animate-pulse top-0 z-50 items-center flex flex-col w-screen h-screen justify-center align-middle">
        <h1 className="text-8xl uppercase font-bold text-white">Miguel</h1>
        <h1 className="text-8xl uppercase font-bold text-white">Guell</h1>
      </div>
    </main>
  )
}
