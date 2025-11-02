"use client";
import errorbg from "@/images/errorbg.jpeg";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const router = useRouter();
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${errorbg?.src})` }}
      onMouseMove={handleMouseMove}
    >
      
      <div className="w-full h-full flex justify-center items-center"
      style={{
          background: `radial-gradient(
            circle 450px at ${mousePosition.x}px ${mousePosition.y}px,
            transparent 0%,
            rgba(0,0,0,0.90) 100%
          )`,
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-5">
            <h2 className="text-7xl font-black flex justify-center items-center text-white font-sans">
              <span
                className="text-shadow-white blur-[1px]"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                P
              </span>
              <span
                className="text-shadow-white blur-[1px]"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                a
              </span>
              <span
                className="blur-[1px] opacity-60"
                style={{ textShadow: "0px 0px 10px white" }}
              >
                g
              </span>
              <span
                className="text-shadow-white dotAnimation"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                e
              </span>
            </h2>
            <h2 className="text-7xl font-black flex justify-center items-center text-white font-sans">
              <span
                className="text-shadow-white blur-[1px]"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                n
              </span>
              <span
                className="text-shadow-white blur-[1px] blinkAnimation"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                o
              </span>
              <span
                className="blur-[1px]"
                style={{ textShadow: "0px 0px 10px white" }}
              >
                t
              </span>
            </h2>
            <h2 className="text-7xl font-black flex justify-center items-center text-white font-sans">
              <span
                className="text-shadow-white blur-[1px] f"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                f
              </span>
              <span
                className="broken"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                o
              </span>
              <span
                className="blur-[1px] opacity-60"
                style={{ textShadow: "0px 0px 10px white" }}
              >
                u
              </span>
              <span
                className="text-shadow-white dotAnimation"
                style={{ textShadow: "0px 0px 20px white" }}
              >
                n
              </span>
              <span
                className="blur-[1px]"
                style={{ textShadow: "0px 0px 10px white" }}
              >
                d
              </span>
            </h2>
          </div>
          <p className="text-white text-xl mt-10 mb-5">
            Hmm, the page you were looking for doesn’t seem to exist anymore.
          </p>
          <button onClick={() => router.push("/")} className="px-10 py-2 rounded bg-white text-lg  cursor-pointer">Back to Trip</button>
        </div>
      </div>
    </div>
  );
}
