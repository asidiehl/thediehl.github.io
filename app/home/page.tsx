import Image from "next/image";
import {Header} from "../../components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <Image
        unoptimized
        src="/home_bg.png"
        alt="Uno at Home"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />

      <Header
        path="work"
      />
      
      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1>More coming soon!</h1>
          </div>
        </div>
      </div>
    </main>
  );
}