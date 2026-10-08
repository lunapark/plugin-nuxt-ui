<template>
    <div
        :class="colorClass"
        data-nuxt-body
    >
        <UApp
            :locale="locale"
            portal="[data-nuxt-body]"
        >
            <slot />
        </UApp>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { colorMode } from "@/color.ts";
import { locale } from "@/locale.ts";

const colorClass = computed(() => colorMode.state.value);
</script>

<style scoped>

</style>
