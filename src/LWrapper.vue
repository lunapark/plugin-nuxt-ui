<template>
    <div
        :class="colorClass"
        data-nuxt-body
    >
        <UApp portal="[data-nuxt-body]">
            <slot />
        </UApp>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { colorMode } from "@/color.ts";

const colorClass = computed(() => colorMode.state.value);
</script>

<style scoped>

</style>
