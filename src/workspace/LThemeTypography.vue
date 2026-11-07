<template>
    <LCard>
        <LSettingRow
            v-for="row in rows"
            :key="row.category"
            :description="row.description"
            :title="row.title"
        >
            <LDropdown
                v-model="internals.theme.fonts[row.category]"
                :options="getOptions(row.category)"
                search
                small
            />
        </LSettingRow>
    </LCard>
</template>

<script setup lang="ts">
import type { TOptions } from "@luna-park/design";
import { LCard, LDropdown, LSettingRow } from "@luna-park/design";

import { internals } from "@/theme/internals.ts";
import type { TFontCategory } from "@/theme/options.ts";
import { FONTS } from "@/theme/options.ts";

const rows: Array<{ category: TFontCategory; description: string; title: string; }> = [
    { category: "sans", description: "Default text of the app, used by every component.", title: "Sans" },
    { category: "serif", description: "Used by the font-serif utility.", title: "Serif" },
    { category: "mono", description: "Used by code, keyboard keys and the font-mono utility.", title: "Mono" }
];

function getOptions(category: TFontCategory) {
    return [
        { label: "System default", value: "" },
        ...FONTS.filter((font) => font.category === category).map(({ name }) => ({ label: name, value: name }))
    ] satisfies TOptions;
}
</script>
