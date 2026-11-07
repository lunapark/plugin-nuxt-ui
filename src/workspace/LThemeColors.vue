<template>
    <LCard>
        <LSettingRow
            v-for="color in colorRows"
            :key="color.key"
            :description="color.description"
            :title="color.title"
        >
            <LDropdown
                v-model="internals.theme.colors[color.key]"
                :disabled="color.key === 'primary' && internals.theme.blackAsPrimary"
                :options="colorOptions"
                search
                small
            />
        </LSettingRow>
        <LSettingRow
            description="Use black in light mode and white in dark mode instead of the primary color."
            title="Black as primary"
        >
            <LSwitch
                v-model="internals.theme.blackAsPrimary"
                small
            />
        </LSettingRow>
        <LSettingRow
            description="Gray scale used for text, backgrounds and borders."
            title="Neutral"
        >
            <LDropdown
                v-model="internals.theme.colors.neutral"
                :options="neutralOptions"
                small
            />
        </LSettingRow>
    </LCard>
</template>

<script setup lang="ts">
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import type { TOptions } from "@luna-park/design";
import { LCard, LDropdown, LSettingRow, LSwitch } from "@luna-park/design";

import { internals } from "@/theme/internals.ts";
import type { TColorKey } from "@/theme/options.ts";
import { getColorSwatch, NEUTRAL_COLORS, PRIMARY_COLORS } from "@/theme/options.ts";

const colorRows: Array<{ description: string; key: TColorKey; title: string; }> = [
    { description: "Main color of buttons, links and focus rings.", key: "primary", title: "Primary" },
    { description: "Accent for secondary actions.", key: "secondary", title: "Secondary" },
    { description: "Positive feedback and confirmations.", key: "success", title: "Success" },
    { description: "Neutral information and hints.", key: "info", title: "Info" },
    { description: "Actions that need attention.", key: "warning", title: "Warning" },
    { description: "Errors and destructive actions.", key: "error", title: "Error" }
];

function getOptions(names: Array<string>, shade?: number) {
    return names.map((name) => ({
        icon: { color: getColorSwatch(name, shade), icon: faCircle },
        label: name.charAt(0).toUpperCase() + name.slice(1),
        value: name
    })) satisfies TOptions;
}

const colorOptions = getOptions(PRIMARY_COLORS);
const neutralOptions = getOptions(NEUTRAL_COLORS);
</script>
