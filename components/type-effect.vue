<script setup lang="ts">
import { ref } from "vue";
import DetectScrollIn from "./detect-scroll-in.vue";

const props = defineProps<{
    text: string;
}>();

const value = ref("");
const cursor = ref("unset");

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
</script>

<template>
    <DetectScrollIn :callback="type">{{ value }}<span :style="{ visibility: cursor }">▌</span> </DetectScrollIn>
</template>
