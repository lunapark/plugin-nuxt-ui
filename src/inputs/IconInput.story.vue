<template>
    <Story>
        <Variant title="Empty">
            <div class="story">
                <IconInput v-model="empty" />
                <span class="value">{{ empty ?? "undefined" }}</span>
            </div>
        </Variant>
        <Variant title="With value">
            <div class="story">
                <IconInput v-model="filled" />
                <span class="value">{{ filled }}</span>
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { ref } from "vue";

import IconInput from "@/inputs/IconInput.vue";

const empty = ref<string>();
const filled = ref("lucide:roller-coaster");
</script>

<style scoped>
.story {
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);
    width: 240px;
    padding: var(--length-m);

    .value {
        font-size: var(--font-size-s);
        color: var(--color-content-litest);
    }
}
</style>
