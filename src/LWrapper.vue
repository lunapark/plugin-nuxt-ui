<template>
    <div
        ref="body"
        :class="colorClass"
        data-nuxt-body
    >
        <UApp
            :locale="locale"
            :portal="body ?? false"
        >
            <slot />
        </UApp>
    </div>
</template>

<script setup lang="ts">
import { computed, provide, useTemplateRef } from "vue";

import { colorMode } from "@/color.ts";
import { collisionBoundaryKey } from "@/lib/boundary.ts";
import { locale } from "@/locale.ts";

const body = useTemplateRef<HTMLDivElement>("body");
provide(collisionBoundaryKey, computed(() => body.value?.closest<HTMLElement>("[data-scroll-root]") ?? undefined));
const colorClass = computed(() => colorMode.state.value);
</script>

<style scoped>

</style>
