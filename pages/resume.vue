<script setup lang="ts">
import awsSvg from "~/public/icon/aws.svg?raw";
import gcpSvg from "~/public/icon/gcp.svg?raw";
import goSvg from "~/public/icon/go.svg?raw";
import openjdkSvg from "~/public/icon/openjdk.svg?raw";
import pythonSvg from "~/public/icon/python.svg?raw";
import rustSvg from "~/public/icon/rust.svg?raw";
import typescriptSvg from "~/public/icon/typescript.svg?raw";
</script>

<template>
    <div class="flex min-w-screen min-h-screen overflow-scroll screen:px-4 screen:py-16">
        <div class="fixed -z-10 bg-zinc-300 top-[-50vh] left-[-50vw] w-[200vw] h-[200vh] print:hidden"></div>
        <div
            class="m-auto flex flex-col min-w-[8.5in] max-w-[8.5in] min-h-[11in] max-h-[11in] box-content bg-white screen:border-[1px] screen:border-gray-300 screen:shadow-2xl"
        >
            <div>
                <h1 class="text-center pt-8 font-bold font-mono text-4xl">Tanner Cecchetti</h1>
                <h2 class="text-center pb-4 font-mono text-2xl">Software Engineer</h2>
                <div class="flex justify-center">
                    <Chevron v-for="_ in 34" />
                </div>
            </div>
            <div class="flex-grow inline-grid grid-cols-[280px_1fr] w-full [&_h2]:font-bold [&_h2]:text-2xl">
                <div class="p-8 [&>div:not(:first-child)]:pt-8">
                    <div>
                        <h2>Contact</h2>
                        <div class="pt-2 inline-grid grid-cols-[auto_1fr]">
                            <span class="px-2 text-xs my-auto ml-auto opacity-60">email</span>
                            <span>
                                <a href="mailto:t@nner.xyz" target="_blank"> t@nner.xyz </a>
                            </span>
                            <span class="px-2 text-xs my-auto ml-auto opacity-60">phone</span>
                            <span>XXX-XXX-XXXX</span>
                            <span class="px-2 text-xs my-auto ml-auto opacity-60">site</span>
                            <span>
                                <a href="https://ta.nner.xyz" target="_blank"> https://ta.nner.xyz </a>
                            </span>
                            <span class="px-2 text-xs my-auto ml-auto opacity-60">where</span>
                            <span>Seattle, WA</span>
                        </div>
                    </div>
                    <div>
                        <h2>Technologies</h2>
                        <div class="pt-2">
                            <div class="text-xxs opacity-60">Strongest</div>
                            <div class="text-xs [&>*]:mt-1 [&>div:not(:first-child)]:ml-1">
                                <Bubble :colors="['#5382a1', 'white']" :icon="openjdkSvg">Java</Bubble>
                                <Bubble :colors="['#ffde57', 'black']" :icon="pythonSvg">Python</Bubble>
                            </div>
                            <div class="text-xxs opacity-60 pt-2">Learning</div>
                            <div class="text-xs [&>*]:mt-1 [&>div:not(:first-child)]:ml-1">
                                <Bubble :colors="['#f46623', 'black']" :icon="rustSvg">Rust</Bubble>
                                <Bubble :colors="['#00add8', 'black']" :icon="goSvg">Go</Bubble>
                                <Bubble :colors="['#3178c6', 'white']" :icon="typescriptSvg">TypeScript</Bubble>
                            </div>
                            <div class="text-xxs opacity-60 pt-2">Clouds</div>
                            <div class="text-xs [&>*]:mt-1">
                                <Bubble :colors="['#ff9900', 'black']" :icon="awsSvg">Amazon Web Services</Bubble>
                                <Bubble :colors="['#4285f4', 'white']" :icon="gcpSvg">Google Cloud Platform</Bubble>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Education</h2>
                        <div class="pt-2">
                            <div class="text-md">Oregon State University</div>
                            <div class="text-sm">Computer Science, B.S., 2017</div>
                            <div class="text-xxs mt-1 [&>div:not(:first-child)]:ml-1">
                                <Bubble :colors="['#aaaaaa', 'white']">3.97 GPA</Bubble>
                                <Bubble :colors="['#aaaaaa', 'white']">HKN Sophomore of the Year</Bubble>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-8">
                    <div>
                        <div class="text-center pb-4">Hi there! 👋</div>
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
</template>
