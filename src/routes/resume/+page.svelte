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
  import svelteSvg from '$lib/icon/svelte.svg?raw';
  import terraformSvg from '$lib/icon/terraform.svg?raw';
  import typescriptSvg from '$lib/icon/typescript.svg?raw';
  import zigSvg from '$lib/icon/zig.svg?raw';
  import { password } from '$lib/password.svelte';
  import Bubble from './bubble.svelte';
  import Chevron from './chevron.svelte';
  import Redacted from './redacted.svelte';

  let offsetWidth = $state(0);
  let innerWidth = $state(0);
  $effect(() => window.scrollTo((offsetWidth - innerWidth) / 2, 0));

  const print = () => window.print();
</script>

<svelte:window bind:innerWidth />
<svelte:body bind:offsetWidth />

<svelte:head>
  <title>Tanner Cecchetti (ta.nner.xyz) - Resume</title>
</svelte:head>

<div class="flex flex-col w-min min-w-[100vw] min-h-screen px-4 py-16 print:p-0">
  <div class="flex select-none text-center pb-8 print:hidden *:px-12 *:basis-0 *:grow w-[8.5in] self-center">
    <div>
      <p class="text-sm">This page is designed to be converted to PDF</p>
      <p class="text-xs pb-2 opacity-40">(Chromium-based browsers only, unfortunately)</p>
      <Bubble onclick={print} class="cursor-pointer px-4 mt-3" colors={['black', 'white']}>⌘+P → Save as PDF</Bubble>
    </div>
    <div>
      <p class="text-sm">Some elements are redacted for privacy</p>
      <p class="text-xs pb-4">Enter the password to decrypt them!</p>
      <input
        class="px-3 py-1 bg-white rounded-full border"
        type="password"
        placeholder="password"
        bind:value={password.current}
      />
    </div>
  </div>
  <div
    class="m-auto flex flex-col min-w-[8.5in] max-w-[8.5in] min-h-[11in] max-h-[11in] box-content bg-white border border-zinc-300 shadow-2xl shadow-zinc-500 print:border-0 print:shadow-none"
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
    <div class="flex-grow inline-grid grid-cols-[285px_1fr] w-full **:[h2]:font-bold **:[h2]:text-2xl">
      <div class="py-8 pl-12 pr-0 *:[div:not(:first-child)]:pt-8">
        <div class="text-xs">
          <h2 class="flex items-center">
            Hi there
            <img class="inline w-6 h-6 ml-1" src="/waving-hand.png" alt="Waving hand" />
          </h2>
          <div class="pt-2">
            I've spent 8+ years building APIs, data pipelines, developer platforms, and the occassional UI.
          </div>
          <div class="pt-2">I'm passionate about finding elegant solutions that do more with less.</div>
        </div>
        <div>
          <h2>Contact</h2>
          <div class="pt-2 inline-grid grid-cols-[auto_1fr]">
            <span class="px-2 text-xs my-auto ml-auto opacity-60">email</span>
            <span>
              <a href="mailto:t@nner.xyz" target="_blank">t@nner.xyz</a>
            </span>
            <span class="px-2 text-xs my-auto ml-auto opacity-60">phone</span>
            <Redacted
              ciphertext="od3kPHeZPpw+1LzqYpVaXE5aMNxLRLyVMsvkuA=="
              salt="ccsSRxocaxcL2wMacCCZsg=="
              iv="zZ/epfOnnaHDJPW4"
              placeholder="321-654-0987"
            />
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
            <div class="text-xxs mt-1 *:[div:not(:first-child)]:ml-1">
              <Bubble colors={['#aaaaaa', 'white']}>3.97 GPA</Bubble>
              <Bubble colors={['#aaaaaa', 'white']}>HKN Sophomore of the Year</Bubble>
            </div>
          </div>
        </div>
        <div>
          <h2>Technologies</h2>
          <div>
            {@render bubbleGroup('Most experience with', [
              { name: 'Java', colors: ['#007396', 'white'], icon: javaSvg },
              { name: 'Python', colors: ['#ffde57', 'black'], icon: pythonSvg },
              { name: 'TypeScript', colors: ['#3178c6', 'white'], icon: typescriptSvg },
            ])}
            {@render bubbleGroup('Interested in', [
              { name: 'Rust', colors: ['#f46623', 'black'], icon: rustSvg },
              { name: 'Kotlin', colors: ['#7F52FF', 'white'], icon: kotlinSvg },
              { name: 'Go', colors: ['#00add8', 'white'], icon: goSvg },
              { name: 'Zig', colors: ['#F7A41D', 'black'], icon: zigSvg },
            ])}
            {@render bubbleGroup('Clouds', [
              { name: 'Amazon Web Services', colors: ['#f56600', 'white'], icon: awsSvg },
              { name: 'Google Cloud', colors: ['#4285f4', 'white'], icon: gcpSvg },
            ])}
            {@render bubbleGroup('Tools', [
              { name: 'GitHub', colors: ['#181717', 'white'], icon: githubSvg },
              { name: 'CircleCI', colors: ['#343434', 'white'], icon: circleCiSvg },
              { name: 'Terraform', colors: ['#844FBA', 'white'], icon: terraformSvg },
            ])}
            {@render bubbleGroup('Libraries', [
              { name: 'Spring Boot', colors: ['#6DB33F', 'white'], icon: springBootSvg },
              { name: 'Polars', colors: ['#CD792C', 'white'], icon: polarsSvg },
              { name: 'React', colors: ['#087ea4', 'white'], icon: reactSvg },
              { name: 'Svelte', colors: ['#FF3E00', 'white'], icon: svelteSvg },
            ])}
          </div>
        </div>
      </div>
      <div class="py-8 pl-8 pr-12 *:[div:not(:first-child)]:mt-4">
        <div>
          <h2>Experience</h2>
          <div class="flex flex-col mt-2">
            {@render companyHeader('Amazon Web Services (AWS)', 'Software Development Engineer II (L5)', '2022 –')}
            <div class="text-xs pt-1">
              {@render responsibilities([''])}
              {@render deliverables([])}
            </div>
          </div>
          <div class="flex flex-col mt-2">
            {@render companyHeader(
              'HealthSparq (Kyruus Health)',
              'Intern → SDE I → SDE II → SDE III → Architect',
              '2016 – 2022',
            )}
            <div class="text-xs pt-1">
              {@render responsibilities([
                'Owned immutable, IaC developer platform used by 15+ services teams to deploy 50+ times a day across 150+ stacks in AWS and GCP',
                'Designed and built APIs, asynchronous processes, and testing tools across all product verticals',
              ])}
              {@render deliverables([
                'Led cross-team initiative to modernize edge routing and identity infrastructure, reducing static asset latency by 40% and API latency by 20%',
                'Added support for Google Cloud to developer platform, enabling use of Dataflow and BigQuery, reducing customer data intake from days to hours',
                'Rebuilt cron-like deployment logic to instantly react to a stack build completing, saving an average of 5 minutes on 50+ deployments per day',
                'Built web-based internal load testing tool on top of Gatling, used by multiple service teams to benchmark their service under load (UI + service + workers)',
                'Live-migrated external developer API from Apigee to platform-native service, using replay testing to prevent regressions',
              ])}
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

{#snippet companyHeader(name: string, title: string, time: string)}
  <div class="flex justify-between items-center">
    <div>
      <h3>{name}</h3>
      <p class="text-xs">{title}</p>
    </div>
    <p>{time}</p>
  </div>
{/snippet}

{#snippet list(title: string, items: string[])}
  <div class="text-xs font-bold pt-1">{title}</div>
  <ul class="pl-3 list-disc *:[li]:pt-1">
    {#each items as i}
      <li>{i}</li>
    {/each}
  </ul>
{/snippet}

{#snippet responsibilities(items: string[])}
  {@render list('High-level responsibilities', items)}
{/snippet}

{#snippet deliverables(items: string[])}
  {@render list('Key deliverables', items)}
{/snippet}

{#snippet bubbleGroup(title: string, items: { name: string; colors: string[]; icon: string }[])}
  <div class="text-xxs opacity-60 pt-2">{title}</div>
  <div class="text-xxs *:mt-1 *:[div:not(:last-child)]:mr-1">
    {#each items as i}
      <Bubble colors={i.colors} icon={i.icon}>{i.name}</Bubble>
    {/each}
  </div>
{/snippet}

<style>
  :global(body) {
    width: max-content;
    background-color: var(--color-zinc-300);
  }
</style>
