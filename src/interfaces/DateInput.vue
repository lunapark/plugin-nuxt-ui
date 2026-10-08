<template>
    <LInput
        v-model="value"
        :border="anchor"
        :class="{anchor}"
        :placeholder="placeholder"
        small
        :transparent="anchor"
        :type="type"
    />
</template>

<script setup lang="ts">
import { LInput } from "@luna-park/design";
import type { TInterfaceEditorProps, TSchema } from "@luna-park/plugin";
import { computed } from "vue";

const props = defineProps<TInterfaceEditorProps>();

const inputTypes: Record<string, string> = {
    CalendarDateTime: "datetime-local",
    Time: "time"
};

const type = computed(() => inputTypes[(props.schema as TSchema & { className: string; }).className] ?? "date");

const value = defineModel<string>({
    set: (date) => date || undefined
});
</script>

<style scoped>
.anchor {
    border-color: var(--color-type-interface) !important;

    &:hover, &:focus-within {
        background: var(--color-background-3) !important;
    }
}
</style>
