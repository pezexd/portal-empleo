<script setup lang="ts">
defineProps<{
  separator?: boolean
  active?: boolean
}>()
</script>

<template>
  <div>
    <div class="flex gap-4 items-center">
      <button :class="active ? 'bg-secondary border-transparent' : 'bg-transparent border-black/50'" class="w-8 h-8 flex justify-center items-center rounded-full border-2">
        <div :class="active ? '' : 'hidden'" class="i-carbon-checkmark font-bold text-stone-900" />
      </button>
      <span class="font-display font-medium">
        <slot />
      </span>
    </div>
    <div :class="separator ? 'flex' : 'hidden'" class="mt-2 mb-2 w-8 h-auto justify-center">
      <div class="w-[2px] h-6 bg-black/50" />
    </div>
  </div>
</template>
