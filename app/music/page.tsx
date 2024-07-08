import Image from 'next/image';
import { Header } from '../../components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        unoptimized
        src="/music_bg.png"
        alt="Alex in Music"
        fill
        priority
        style={{
          objectFit: 'cover',
        }}
      />

      <Header path="music" />

      {/* TODO: Add stuff
            - Studio gear
              - Diagrams
              - Eurorack
                - dev
                - prod
            - Soundcloud
      */}

      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1>More coming soon!</h1>
          </div>
        </div>
      </div>

      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="App container"></div>
        </div>
      </div>
    </main>
  );
}
