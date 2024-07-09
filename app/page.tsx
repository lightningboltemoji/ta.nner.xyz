import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="ball" className="fixed bg-black rounded-full" />
      <div className="flex flex-col justify-center items-center min-w-screen min-h-screen">
        <div className="flex flex-col justify-center items-center fade-in-out pb-[10vh] md:pb-0">
          <div className="relative">
            <video className="size-[200px] bg-black rounded-full" autoPlay loop muted playsInline src="/memoji.mp4" />
          </div>
          <h1 className="font-mono text-3xl mt-7">Tanner Cecchetti</h1>
          <div className="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px] delay-[100ms]">
            <h2>
              <span className="opacity-20">a</span> Software Engineer 👨‍💻
            </h2>
            <h2>
              <span className="opacity-20">in</span> Seattle, WA 🌳
            </h2>
          </div>
          <div className="flex items-center p-5">
            <a href="mailto:t@nner.xyz" className="p-2 fill-zinc-800 delay-[300ms]">
              <Image width={20} height={20} src="/paper-plane.svg" alt="Contact" priority />
            </a>
            <a href="https://github.com/lightningboltemoji" className="p-2 fill-zinc-800 ml-6 delay-[400ms]">
              <Image width={28} height={28} src="/github-alt.svg" alt="GitHub" priority />
            </a>
            <a
              href="https://www.linkedin.com/in/tanner-cecchetti/"
              className="size-10 p-2 fill-zinc-800 ml-6 delay-[500ms]"
              v-html="linkedin"
            >
              <Image width={24} height={24} src="/linkedin.svg" alt="Contact" priority />
            </a>
          </div>
        </div>
      </div>
      <div id="edu" className="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
        <div className="flex flex-col justify-center items-center fade-in-out">
          <h1 className="font-mono text-3xl mt-7">Work experience</h1>
          <h2>Amazon Web Services, 2022 -</h2>
          <h2>HealthSparq, 2015 - 2022</h2>
        </div>

        <div className="flex flex-col justify-center items-center fade-in-out">
          <h1 className="font-mono text-3xl mt-7">Education</h1>
          <h2>Oregon State University, 2017</h2>
          <h2>Computer Science, B.S.</h2>
        </div>
      </div>
    </>
  );
}
