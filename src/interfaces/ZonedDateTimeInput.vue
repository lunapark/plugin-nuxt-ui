<template>
    <div class="zoned">
        <LInput
            v-model="dateTime"
            :border="anchor"
            class="date-time"
            :class="{anchor}"
            :placeholder="placeholder"
            small
            :transparent="anchor"
            type="datetime-local"
        />
        <LDropdown
            v-model="timeZone"
            :border="anchor"
            class="time-zone"
            :class="{anchor}"
            :options="timeZones"
            search
            small
            :transparent="anchor"
        />
    </div>
</template>

<script setup lang="ts">
import { getLocalTimeZone } from "@internationalized/date";
import { LDropdown, LInput } from "@luna-park/design";
import type { TInterfaceEditorProps } from "@luna-park/plugin";
import { computed } from "vue";

defineProps<TInterfaceEditorProps>();

const value = defineModel<string>();

const timeZones = Intl.supportedValuesOf("timeZone");

const parts = computed(() => {
    const [, dateTime, zone] = value.value?.match(/^(.+?T[\d:.]+)(?:[+-]\d{2}:?\d{2}|Z)?(?:\[(.+)])?$/) ?? [];

    return { dateTime, timeZone: zone ?? getLocalTimeZone() };
});

const dateTime = computed({
    get: () => parts.value.dateTime,
    set: (dateTime) => update(dateTime, parts.value.timeZone)
});

const timeZone = computed({
    get: () => parts.value.timeZone,
    set: (timeZone) => update(parts.value.dateTime, String(timeZone))
});

function update(dateTime: string | undefined, timeZone: string) {
    value.value = dateTime ? `${ dateTime }[${ timeZone }]` : undefined;
}
</script>

<style scoped>
.zoned {
    display: flex;
    gap: 4px;
    min-width: 0;

    .date-time {
        flex-grow: 1;
        min-width: 0;
    }

    .time-zone {
        width: 40%;
        min-width: 0;
    }
}

.anchor {
    border-color: var(--color-type-interface) !important;

    &:hover, &:focus-within {
        background: var(--color-background-3) !important;
    }
}
</style>
