<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { onUnmounted } from "vue";

const props = defineProps<{
    text: string;
}>();

const container = ref(null);
const running = ref(false);
const value = ref("");
const cursor = ref<"unset" | "hidden">("unset");

const blink = () => {
    cursor.value = cursor.value === "hidden" ? "unset" : "hidden";
    setTimeout(blink, 800);
};

const type = () => {
    if (value.value !== props.text) {
        value.value = props.text.substring(0, value.value.length + 1);
        setTimeout(type, Math.random() * 150 + 50);
    } else {
        setTimeout(blink, 800);
    }
};

const { stop } = useIntersectionObserver(container, ([{ isIntersecting }]) => {
    if (isIntersecting && !running.value) {
        running.value = true;
        type();
    }
});
onUnmounted(stop);
</script>

<template>
    <div class="py-1" ref="container">
        <span>{{ value }}</span>
        <span class="p-1" :style="{ visibility: cursor }">█</span>
    </div>
</template>
