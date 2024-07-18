import Image from "next/image";
import { ReactElement } from "react";

function Bubble({
  className,
  icon,
  name,
  colors,
}: {
  className?: string;
  icon?: string;
  name: string;
  colors: Array<string>;
}) {
  return (
    <div
      className={`inline-block rounded-full px-2 py-1 ${className}`}
      style={{ backgroundColor: colors[0], color: colors[1] }}
    >
      <span className="whitespace-nowrap">
        {icon && (
          <Image className="inline mr-1" src={`/icon/${icon}.svg`} alt={`Icon for ${name}`} width={14} height={14} />
        )}
        {name}
      </span>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="flex min-w-screen min-h-screen overflow-scroll screen:px-4 screen:py-16">
      <div className="fixed -z-10 bg-zinc-300 top-[-50vh] left-[-50vw] w-[200vw] h-[200vh] print:hidden"></div>
      <div className="m-auto flex flex-col min-w-[8.5in] max-w-[8.5in] min-h-[11in] max-h-[11in] box-content bg-white screen:border-[1px] screen:border-gray-300 screen:shadow-2xl">
        <div>
          <h1 className="text-center pt-8 font-bold font-mono text-4xl">Tanner Cecchetti</h1>
          <h2 className="text-center pb-4 font-mono text-2xl">Software Engineer</h2>
          <div className="flex justify-center">
            {repeat(34, (i) => (
              <Chevron key={i} />
            ))}
          </div>
        </div>
        <div className="flex-grow inline-grid grid-cols-[280px_1fr] w-full [&_h2]:font-bold [&_h2]:text-2xl">
          <div className="p-8 [&>div:not(:first-child)]:pt-8">
            <div>
              <h2>Contact</h2>
              <div className="pt-2 inline-grid grid-cols-[auto_1fr]">
                <span className="px-2 text-xs my-auto ml-auto opacity-60">email</span>
                <span>
                  <a href="mailto:t@nner.xyz" target="_blank">
                    t@nner.xyz
                  </a>
                </span>
                <span className="px-2 text-xs my-auto ml-auto  opacity-60">phone</span>
                <span>XXX-XXX-XXXX</span>
                <span className="px-2 text-xs my-auto ml-auto opacity-60">site</span>
                <span>
                  <a href="https://ta.nner.xyz" target="_blank">
                    https://ta.nner.xyz
                  </a>
                </span>
                <span className="px-2 text-xs my-auto ml-auto opacity-60">where</span>
                <span>Seattle, WA</span>
              </div>
            </div>
            <div>
              <h2>Technologies</h2>
              <div className="pt-2">
                <div className="text-xxs opacity-60">Strongest</div>
                <div className="text-xs [&>*]:mt-1 [&>div:not(:first-child)]:ml-1">
                  <Bubble colors={["#5382a1", "white"]} name="Java" icon="openjdk" />
                  <Bubble colors={["#ffde57", "black"]} name="Python" icon="python" />
                </div>
                <div className="text-xxs opacity-60 pt-2">Learning</div>
                <div className="text-xs [&>*]:mt-1 [&>div:not(:first-child)]:ml-1">
                  <Bubble colors={["#f46623", "black"]} name="Rust" icon="rust" />
                  <Bubble colors={["#00add8", "black"]} name="Go" icon="go" />
                  <Bubble colors={["#3178c6", "white"]} name="TypeScript" icon="typescript" />
                </div>
                <div className="text-xxs opacity-60 pt-2">Clouds</div>
                <div className="text-xs [&>*]:mt-1">
                  <Bubble colors={["#ff9900", "black"]} name="Amazon Web Services" icon="aws" />
                  <Bubble colors={["#4285f4", "white"]} name="Google Cloud Platform" icon="gcp" />
                </div>
              </div>
            </div>
            <div>
              <h2>Education</h2>
              <div className="pt-2">
                <div className="text-md">Oregon State University</div>
                <div className="text-sm">Computer Science, B.S., 2017</div>
                <div className="text-xxs mt-1 [&>div:not(:first-child)]:ml-1">
                  <Bubble colors={["#aaaaaa", "white"]} name="3.97 GPA" />
                  <Bubble colors={["#aaaaaa", "white"]} name="HKN Sophomore of the Year" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div>
              <div className="text-center pb-4">{"Hi there! 👋"}</div>
            </div>
            <div>
              <h2>Work experience</h2>
            </div>
            <div>
              <h2>Outside of work</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg className={`inline ${className}`} width="20" height="10" viewBox="0 0 20 10">
      <path d="M 0 0 L 10 10 L 20 0" fill="transparent" stroke="black" />
    </svg>
  );
}

function repeat(count: number, fn: (i: number) => ReactElement<any, any>) {
  return Array(count)
    .fill(0)
    .map((_, i) => fn(i));
}
