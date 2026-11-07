<template>
    <LCard>
        <LSettingRow
            description="Color scheme of the app. Auto follows the system preference."
            title="Color mode"
        >
            <LSegmented
                v-model="internals.colorMode"
                :options="colorModeOptions"
                small
            />
        </LSettingRow>
        <LSettingRow
            description="Language of the components and order of the date segments. Navigator follows the browser language."
            title="Locale"
        >
            <LDropdown
                v-model="internals.locale"
                :options="localeOptions"
                search
                small
            />
        </LSettingRow>
    </LCard>
</template>

<script setup lang="ts">
import type { TOptions } from "@luna-park/design";
import { LCard, LDropdown, LSegmented, LSettingRow } from "@luna-park/design";

import { localeCodes, NAVIGATOR_LOCALE } from "@/locale.ts";
import { internals } from "@/theme/internals.ts";

const colorModeOptions = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Auto", value: "auto" }
] satisfies TOptions;

const localeOptions = [
    { label: "Navigator", value: NAVIGATOR_LOCALE },
    ...localeCodes.map((code) => ({ label: code, value: code }))
] satisfies TOptions;
</script>
