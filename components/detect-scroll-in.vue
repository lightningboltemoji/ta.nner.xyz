<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
    callback: () => void;
}>();

const fired = ref(false);
const container = ref(null);
let observer;

const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.target === container.value && entry.isIntersecting) {
            fire();
        }
    });
};

const fire = () => {
    if (fired.value) {
        return;
    }
    fired.value = true;
    props.callback();
    observer.unobserve(container.value);
};

onMounted(() => {
    observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5,
    });
    observer.observe(container.value);
});

onBeforeUnmount(fire);
</script>

<template>
    <div ref="container">
        <slot />
    </div>
</template>
