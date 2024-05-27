<script setup lang="ts">
import lax from "lax.js";
import email from "~/public/paper-plane.svg?raw";
import linkedin from "~/public/linkedin.svg?raw";
import github from "~/public/github-alt.svg?raw";

const show = ref(false);

onMounted(() => {
    show.value = true;

    lax.init();
    lax.addDriver("scrollY", () => window.scrollY);
    lax.addElements(".explodeAfterFirst", {
        scrollY: {
            scaleX: [
                ["screenHeight/2", "screenHeight"],
                [1, "(((screenWidth / 2) ** 2 + (screenHeight + 200) ** 2)) ** 0.5/100"],
            ],
            scaleY: [
                ["screenHeight/2", "screenHeight"],
                [1, "(((screenWidth / 2) ** 2 + (screenHeight + 200) ** 2)) ** 0.5/100"],
            ],
        },
    });
    lax.addElements(".fadeInOut", {
        scrollY: {
            opacity: [
                ["elInY", "elInY+elHeight", "elOutY-elHeight", "elOutY"],
                [0, 1, 1, 0],
            ],
        },
    });
});
</script>

<template>
    <div
        class="fixed bg-black rounded-full w-[200px] h-[200px] top-[100vh] left-[calc(50vw-100px)] explodeAfterFirst duration-500 ease-out"
    />
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
        <div class="flex flex-col justify-center items-center fadeInOut pb-[10vh] md:pb-0">
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
                <type-effect start text="Tanner Cecchetti" />
            </h1>
            <Transition name="slide-fade" appear v-if="show">
                <div class="flex flex-col items-center mt-5 pb-7 px-2 border-b-[1px] delay-[100ms]">
                    <h2><span class="opacity-20">a</span> Software Engineer 👨‍💻</h2>
                    <h2><span class="opacity-20">in</span> Seattle, WA 🌳</h2>
                </div>
            </Transition>
            <div class="flex items-center p-5">
                <Transition name="slide-fade" appear v-if="show">
                    <a href="mailto:t@nner.xyz" class="size-9 p-2 fill-zinc-800 delay-[300ms]" v-html="email" />
                </Transition>
                <Transition name="slide-fade" appear v-if="show">
                    <a
                        href="https://github.com/lightningboltemoji"
                        class="size-11 p-2 fill-zinc-800 ml-6 delay-[400ms]"
                        v-html="github"
                    />
                </Transition>
                <Transition name="slide-fade" appear v-if="show">
                    <a
                        href="https://www.linkedin.com/in/tanner-cecchetti/"
                        class="size-10 p-2 fill-zinc-800 ml-6 delay-[500ms]"
                        v-html="linkedin"
                    />
                </Transition>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
        <div class="flex flex-col justify-center items-center fadeInOut">
            <h1 class="font-mono text-3xl mt-7">
                <type-effect text="Work experience" />
            </h1>
            <h2>Amazon Web Services, 2022 -</h2>
            <h2>HealthSparq, 2015 - 2022</h2>
        </div>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
}

.slide-fade-enter-from {
    transform: translateY(20px);
    opacity: 0;
}
</style>
