<script setup lang="ts">
import { ref } from "vue";
import anime from "animejs/lib/anime.es.js";

import emailSvg from "~/public/icon/paper-plane.svg?raw";
import linkedinSvg from "~/public/icon/linkedin.svg?raw";
import githubSvg from "~/public/icon/github-alt.svg?raw";

const circle = ref(null);
const subtitle = ref(null);
const email = ref(null);
const github = ref(null);
const linkedin = ref(null);

onMounted(() => {
    anime
        .timeline({ easing: "easeOutSine" })
        .add({ targets: subtitle.value, translateY: [40, 0], opacity: [0, 1], duration: 500 })
        .add({ targets: email.value, translateY: [30, 0], opacity: [0, 1], duration: 300 }, "-=200")
        .add({ targets: github.value, translateY: [30, 0], opacity: [0, 1], duration: 300 }, "-=200")
        .add({ targets: linkedin.value, translateY: [30, 0], opacity: [0, 1], duration: 300 }, "-=200")
        .play();

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const maxCircleRadius = Math.sqrt((vw / 2) ** 2 + (vh + 120) ** 2);
    const circleExpand = anime({
        targets: circle.value,
        easing: "linear",
        duration: 1000,
        padding: [0, maxCircleRadius],
        autoplay: false,
    });

    const scrollPercent = () => window.scrollY / (document.body.scrollHeight - vh);
    window.onscroll = () => {
        let p = Math.max(Math.min(scrollPercent(), 0.95), 0.1) - 0.1;
        circleExpand.seek((p / 0.85) * circleExpand.duration);
    };
});
</script>

<template>
    <div
        class="fixed top-[-10000px] bottom-[calc(-10000px-100vh)] left-[-10000px] right-[-10000px] m-auto w-0 h-0 bg-black rounded-full z-10"
        ref="circle"
    />
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
        <div class="flex flex-col justify-center items-center pb-[10vh] md:pb-0">
            <div class="relative">
                <video
                    class="size-[200px] bg-black rounded-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/public/memoji.mp4?url"
                />
            </div>
            <h1 class="font-mono text-3xl mt-7" ref="name">
                <TypeEffect start text="Tanner Cecchetti" />
            </h1>
            <div class="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px]" ref="subtitle">
                <h2><span class="opacity-20">a</span> Software Engineer 👨‍💻</h2>
                <h2><span class="opacity-20">in</span> Seattle, WA 🌳</h2>
            </div>
            <div class="flex items-center p-5">
                <a href="mailto:t@nner.xyz" class="size-9 p-2 fill-zinc-800" v-html="emailSvg" ref="email" />
                <a
                    href="https://github.com/lightningboltemoji"
                    class="size-11 p-2 fill-zinc-800 ml-6"
                    v-html="githubSvg"
                    ref="github"
                />
                <a
                    href="https://www.linkedin.com/in/tanner-cecchetti/"
                    class="size-10 p-2 fill-zinc-800 ml-6"
                    v-html="linkedinSvg"
                    ref="linkedin"
                />
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
        <div class="flex flex-col justify-center items-center z-20">
            <h1 class="font-mono text-3xl mt-7">
                <TypeEffect text="Work experience" />
            </h1>
            <h2>Amazon Web Services, 2022 -</h2>
            <h2>HealthSparq, 2015 - 2022</h2>
        </div>
    </div>
</template>
