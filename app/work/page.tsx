"use client"
import Image from "next/image";
import {Header} from "../../components/header"
import {Component} from "../../components/collapsible"

const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <style jsx global>{`
        body {
          background: "antiquewhite"};
        }
      `}</style>
      
      {/* <UnoptimizedImage
        src="/work_bg.png"
        alt="Alex at Work"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      /> */}

      <Header
        page="work"
      />

      
      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="App container">
          </div>
        </div>
      </div>
    </main>
  );
}