<script lang="ts">
  import awsSvg from '$lib/icon/aws.svg?raw';
  import circleCiSvg from '$lib/icon/circleci.svg?raw';
  import gcpSvg from '$lib/icon/gcp.svg?raw';
  import githubSvg from '$lib/icon/github.svg?raw';
  import goSvg from '$lib/icon/go.svg?raw';
  import javaSvg from '$lib/icon/java.svg?raw';
  import kotlinSvg from '$lib/icon/kotlin.svg?raw';
  import polarsSvg from '$lib/icon/polars.svg?raw';
  import pythonSvg from '$lib/icon/python.svg?raw';
  import reactSvg from '$lib/icon/react.svg?raw';
  import rustSvg from '$lib/icon/rust.svg?raw';
  import springBootSvg from '$lib/icon/springboot.svg?raw';
  import terraformSvg from '$lib/icon/terraform.svg?raw';
  import typescriptSvg from '$lib/icon/typescript.svg?raw';
  import vueSvg from '$lib/icon/vuedotjs.svg?raw';
  import Bubble from '$lib/bubble.svelte';
  import Chevron from './chevron.svelte';

  let offsetWidth = $state(0);
  let innerWidth = $state(0);
  $effect(() => window.scrollTo((offsetWidth - innerWidth) / 2, 0));

  const print = () => window.print();
</script>

<svelte:window bind:innerWidth />
<svelte:body bind:offsetWidth />

<svelte:head>
  <title>Tanner Cecchetti - Resume</title>
</svelte:head>

<div class="flex flex-col w-min min-w-[100vw] min-h-screen screen:px-4 screen:py-16">
  <div class="fixed -z-10 top-[-50vh] left-[-50vw] w-[200vw] h-[200vh] print:hidden"></div>
  <div class="select-none text-center pb-8 print:hidden">
    <p class="text-sm">This page is designed to be converted to PDF</p>
    <p class="text-xs pb-2 opacity-40">(Chromium-based browsers only, unfortunately)</p>
    <Bubble onclick={print} class="cursor-pointer" colors={['black', 'white']}>⌘+P → Save as PDF</Bubble>
  </div>
  <div
    class="m-auto flex flex-col min-w-[8.5in] max-w-[8.5in] min-h-[11in] max-h-[11in] box-content bg-white screen:border-[1px] screen:border-zinc-300 screen:shadow-2xl screen:shadow-zinc-500"
  >
    <div>
      <h1 class="text-center pt-8 font-bold font-mono text-4xl">Tanner Cecchetti</h1>
      <h2 class="text-center pb-4 font-mono text-2xl">Software Engineer</h2>
      <div class="flex justify-center">
        {#each { length: 34 } as _, __}
          <Chevron />
        {/each}
      </div>
    </div>
    <div class="flex-grow inline-grid grid-cols-[285px_1fr] w-full [&_h2]:font-bold [&_h2]:text-2xl">
      <div class="py-8 pl-12 pr-0 [&>div:not(:first-child)]:pt-8">
        <div class="text-xs">
          <h2 class="flex items-center">
            Hi there
            <img class="inline w-6 h-6 ml-1" src="/waving-hand.png" alt="Waving hand" />
          </h2>
          <div class="pt-2">
            I've spent 8+ years building APIs, data pipelines, developer platforms, and the occassional UI.
          </div>
          <div class="pt-2">I'm passionate about finding ways to do more with less code.</div>
        </div>
        <div>
          <h2>Contact</h2>
          <div class="pt-2 inline-grid grid-cols-[auto_1fr]">
            <span class="px-2 text-xs my-auto ml-auto opacity-60">email</span>
            <span>
              <a href="mailto:t@nner.xyz" target="_blank">t@nner.xyz</a>
            </span>
            <span class="px-2 text-xs my-auto ml-auto opacity-60">phone</span>
            <span>XXX-XXX-XXXX</span>
            <span class="px-2 text-xs my-auto ml-auto opacity-60">links</span>
            <span>
              <a href="https://ta.nner.xyz" target="_blank">https://ta.nner.xyz</a>
            </span>
            <span class="px-2 text-xs my-auto ml-auto opacity-60">where</span>
            <span>Seattle, WA</span>
          </div>
        </div>
        <div>
          <h2>Education</h2>
          <div class="pt-2">
            <div>Oregon State University</div>
            <div class="text-xs">Computer Science, B.S., 2017</div>
            <div class="text-xxs mt-1 [&>div:not(:first-child)]:ml-1">
              <Bubble colors={['#aaaaaa', 'white']}>3.97 GPA</Bubble>
              <Bubble colors={['#aaaaaa', 'white']}>HKN Sophomore of the Year</Bubble>
            </div>
          </div>
        </div>
        <div>
          <h2>Technologies</h2>
          <div class="pt-2">
            <div class="text-xxs opacity-60">Strongest</div>
            <div class="text-xxs [&>*]:mt-1 [&>div:not(:last-child)]:mr-1">
              <Bubble colors={['#007396', 'white']} icon={javaSvg}>Java</Bubble>
              <Bubble colors={['#ffde57', 'black']} icon={pythonSvg}>Python</Bubble>
              <Bubble colors={['#3178c6', 'white']} icon={typescriptSvg}>TypeScript</Bubble>
            </div>
            <div class="text-xxs opacity-60 pt-2">Learning</div>
            <div class="text-xxs [&>*]:mt-1 [&>div:not(:last-child)]:mr-1">
              <Bubble colors={['#00add8', 'white']} icon={goSvg}>Go</Bubble>
              <Bubble colors={['#f46623', 'black']} icon={rustSvg}>Rust</Bubble>
              <Bubble colors={['#7F52FF', 'white']} icon={kotlinSvg}>Kotlin</Bubble>
            </div>
            <div class="text-xxs opacity-60 pt-2">Clouds</div>
            <div class="text-xxs [&>*]:mt-1 [&>div:not(:last-child)]:mr-1">
              <Bubble colors={['#f56600', 'white']} icon={awsSvg}>Amazon Web Services</Bubble>
              <Bubble colors={['#4285f4', 'white']} icon={gcpSvg}>Google Cloud</Bubble>
            </div>
            <div class="text-xxs opacity-60 pt-2">Tools</div>
            <div class="text-xxs [&>*]:mt-1 [&>div:not(:last-child)]:mr-1">
              <Bubble colors={['#181717', 'white']} icon={githubSvg}>GitHub</Bubble>
              <Bubble colors={['#343434', 'white']} icon={circleCiSvg}>CircleCI</Bubble>
              <Bubble colors={['#844FBA', 'white']} icon={terraformSvg}>Terraform</Bubble>
            </div>
            <div class="text-xxs opacity-60 pt-2">Libraries</div>
            <div class="text-xxs [&>*]:mt-1 [&>div:not(:last-child)]:mr-1">
              <Bubble colors={['#6DB33F', 'white']} icon={springBootSvg}>Spring Boot</Bubble>
              <Bubble colors={['#CD792C', 'white']} icon={polarsSvg}>Polars</Bubble>
              <Bubble colors={['#61DAFB', 'black']} icon={reactSvg}>React</Bubble>
              <Bubble colors={['#4FC08D', 'black']} icon={vueSvg}>Vue</Bubble>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 pl-8 pr-12 [&>div:not(:first-child)]:mt-4">
        <div>
          <h2>Work experience</h2>
          <div class="flex flex-col mt-2">
            <div class="flex justify-between items-center">
              <div>
                <h3>Amazon Web Services (AWS)</h3>
                <p class="text-xs">Software Development Engineer II (L5)</p>
              </div>
              <span>2022 -</span>
            </div>
          </div>
          <div class="flex flex-col mt-2">
            <div class="flex justify-between items-center">
              <div>
                <h3>HealthSparq (Kyruus Health)</h3>
                <p class="text-xs">Intern → SDE I → SDE II → SDE III → Architect</p>
              </div>
              <p>2016 - 2022</p>
            </div>
            <div class="text-xs pt-1">
              <div class="text-xs font-bold pt-1">General responsibilities</div>
              <ul class="[&>li]:pt-1">
                <li>
                  Owned immutable, IaC developer platform used by 15+ services teams to deploy 50+ times a day across
                  150+ stacks in AWS and GCP
                </li>
                <li>
                  Designed and built many APIs, asynchronous processes, and testing tools across all product verticals
                </li>
              </ul>
              <div class="text-xs font-bold pt-1">Key initiatves</div>
              <ul class="[&>li]:pt-1">
                <li>
                  Led cross-team initiative to modernize edge routing and identity infrastructure, reducing static asset
                  latency by 40% and API latency by 20%
                </li>
                <li>
                  Built internal load testing tool on top of Gatling, used by 3+ service teams to benchmark their
                  service under load (UI + service + workers)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
        </div>
        <div>
          <h2>Outside of work</h2>
        </div>
      </div>
    </div>
  </div>
  <footer class="print:hidden">
    <div class="flex text-xs opacity-40 justify-center mt-8">
      <a href="https://github.com/lightningboltemoji/ta.nner.xyz" target="_blank">
        ↗ Built with SvelteKit and Tailwind CSS ❤️
      </a>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    width: max-content;
    @apply bg-zinc-300;
  }
</style>
