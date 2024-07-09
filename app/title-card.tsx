"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TitleCard() {
  return (
    <div className="flex flex-col justify-center items-center min-w-screen min-h-screen">
      <div className="flex flex-col justify-center items-center fade-in-out pb-[10vh] md:pb-0">
        <div className="relative">
          <video className="size-[200px] bg-black rounded-full" autoPlay loop muted playsInline src="/memoji.mp4" />
        </div>
        <h1 className="font-mono text-3xl mt-7">Tanner Cecchetti</h1>
        <motion.div
          className="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h2>
            <span className="opacity-20">a</span> Software Engineer 👨‍💻
          </h2>
          <h2>
            <span className="opacity-20">in</span> Seattle, WA 🌳
          </h2>
        </motion.div>
        <div className="flex items-center p-5">
          <motion.a
            href="mailto:t@nner.xyz"
            className="p-2 fill-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Image width={20} height={20} src="/paper-plane.svg" alt="Contact" priority />
          </motion.a>
          <motion.a
            href="https://github.com/lightningboltemoji"
            className="p-2 fill-zinc-800 ml-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Image width={28} height={28} src="/github-alt.svg" alt="GitHub" priority />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tanner-cecchetti/"
            className="size-10 p-2 fill-zinc-800 ml-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Image width={24} height={24} src="/linkedin.svg" alt="Contact" priority />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
