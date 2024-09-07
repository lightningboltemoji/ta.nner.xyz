<script setup lang="ts">
import emailSvg from "~/public/icon/paper-plane.svg?raw";
import linkedinSvg from "~/public/icon/linkedin.svg?raw";
import githubSvg from "~/public/icon/github-alt.svg?raw";
import { computed } from "vue";
import { useWindowScroll, useWindowSize } from "@vueuse/core/index.cjs";
import { ref } from "vue";
import { onMounted } from "vue";

const initialPaint = ref(false);
onMounted(() => requestAnimationFrame(() => requestAnimationFrame(() => (initialPaint.value = true))));

const scroll = useWindowScroll();
const scrollPercent = computed(() => scroll.y.value / (document.body.scrollHeight - windowSize.height.value));

const windowSize = useWindowSize();
const maxCircleRadius = computed(() =>
    Math.sqrt((windowSize.width.value / 2) ** 2 + (windowSize.height.value + 120) ** 2),
);
const expandCircle = computed(() => scrollPercent.value >= 0.6);

const circleStyles = computed(() => ({
    transition: "transform 0.5s ease",
    transform: expandCircle.value ? `scale(${maxCircleRadius.value / 1000})` : "scale(0)",
}));

const subheadingStyles = computed(() => ({
    transition: "all 0.6s ease",
    transform: initialPaint.value ? "translateY(0px)" : "translateY(40px)",
    opacity: initialPaint.value ? 1 : 0,
}));

const buttonStyles = computed(() => ({
    transitionProperty: "all",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease",
    transform: initialPaint.value ? "translateY(0px)" : "translateY(30px)",
    opacity: initialPaint.value ? 1 : 0,
}));
</script>

<template>
    <div
        class="fixed top-[calc(100vh-1000px)] left-[calc(50vw-1000px)] w-[2000px] h-[2000px] bg-black rounded-full z-10"
        :style="circleStyles"
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
            <h1 class="font-mono text-3xl mt-7">
                <TypeEffect start text="Tanner Cecchetti" />
            </h1>
            <div class="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px]" :style="subheadingStyles">
                <h2><span class="opacity-20">a</span> Software Engineer 👨‍💻</h2>
                <h2><span class="opacity-20">in</span> Seattle, WA 🌳</h2>
            </div>
            <div class="flex items-center p-5">
                <a
                    href="mailto:t@nner.xyz"
                    class="size-9 p-2 fill-zinc-800 delay-200"
                    v-html="emailSvg"
                    :style="buttonStyles"
                />
                <a
                    href="https://github.com/lightningboltemoji"
                    class="size-11 p-2 fill-zinc-800 ml-6 delay-300"
                    v-html="githubSvg"
                    :style="buttonStyles"
                />
                <a
                    href="https://www.linkedin.com/in/tanner-cecchetti/"
                    class="size-10 p-2 fill-zinc-800 ml-6 delay-[400ms]"
                    v-html="linkedinSvg"
                    :style="buttonStyles"
                />
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
        <div class="flex flex-col justify-center items-center z-20">
            <h1 class="font-mono text-3xl mt-7 mb-5">
                <TypeEffect text="Work experience" />
            </h1>
            <h2>Amazon Web Services, 2022 -</h2>
            <h2>HealthSparq, 2015 - 2022</h2>
        </div>
    </div>
</template>
