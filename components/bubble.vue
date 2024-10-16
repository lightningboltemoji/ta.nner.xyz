<script setup lang="ts">
const props = defineProps<{
  className?: string;
  icon?: string;
  colors: Array<string>;
}>();
</script>

<template>
  <div
    class="inline-block rounded-full px-2 py-1"
    :style="{ backgroundColor: props.colors[0], color: props.colors[1] }"
  >
    <div className="flex items-center whitespace-nowrap">
      <div class="inline-block w-[11px] h-[11px] mr-1" v-if="props.icon" v-html="props.icon" />
      <slot />
    </div>
  </div>
</template>
