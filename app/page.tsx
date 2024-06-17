import Image from "next/image";
import {Header} from "../components/header"

export default function Home() {
  let introText = "Hi, I'm Alex Diehl."
  let workDesc = "I am a Platform Engineer based in Bellevue, WA currently working at Slalom Build helping clients migrate services and automate all sorts of things."
  let freeDesc = "In my free time, I'm typically tinkering with my 3D printers & home lab, exploring the Pacific Northwest on my motorcycle, making music, or playing D&D with my friends."
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        src="/main_bg.png"
        alt="I'm Alex Diehl"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}        
        unoptimized
      />

      <Header
        path = "/"
      />

      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{introText}</h1>
            
            <p>{workDesc}</p>
            <p>{freeDesc}</p>

            <div className="flex gap-x-4 text-neutral-100">

              <a href="https://www.linkedin.com/in/asdiehl/"><Image
              unoptimized 
              src="/LinkedIn_icon.svg"
              alt="My LinkedIn profile"
              width="20"
              height="20"
              /></a>

              <a href="https://github.com/asidiehl"><Image
              unoptimized  
              src="/github-dark.svg"
              alt="My GitHub profile"
              width="20"
              height="20"
              /></a>

            </div>
            <div className="flex w-full justify-center gap-x-4">
              <a className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white 
              ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 
              sm:text-base" href="/alex-diehl-resume.pdf" download="alex-diehl-resume"><Image
              unoptimized 
              src="/download.svg"
              alt="Downlad my resume"
              width="20"
              height="20"
              /> Resume</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
