<script setup lang="ts">
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
        setTimeout(type, Math.random() * 250);
    } else {
        setTimeout(blink, 800);
    }
};

onMounted(() => {
    type();
});
</script>

<template><span class="invisible">▌</span>{{ value }}<span :style="{ visibility: cursor }">▌</span></template>
