<script setup lang="ts">
const show = ref(false);

onMounted(() => {
    show.value = true;
});
</script>

<template>
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
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
        <div class="flex flex-col items-center mt-5">
            <Transition name="slide-fade" appear v-if="show">
                <h2><span class="opacity-20">a</span> Software Engineer 👨‍💻</h2>
            </Transition>
            <h2 v-else>👨‍💻</h2>
            <Transition name="slide-fade" appear v-if="show">
                <h2><span class="opacity-20">in</span> Seattle, WA 🌳</h2>
            </Transition>
            <h2 v-else>🌳</h2>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-w-screen min-h-screen">
        <h1 class="font-mono text-3xl mt-7">
            <type-effect text="Work experience" />
        </h1>
        <h2>Amazon Web Services, 2022 -</h2>
        <h2>HealthSparq, 2015 - 2022</h2>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
