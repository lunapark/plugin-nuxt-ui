<template>
    <div class="presets">
        <button
            v-for="preset in PRESETS"
            :key="preset.id"
            class="preset"
            :class="{ active: internals.theme.preset === preset.id }"
            type="button"
            @click="applyPreset(preset)"
        >
            <span class="swatches">
                <span
                    v-for="(color, index) in getSwatches(preset)"
                    :key="index"
                    class="swatch"
                    :style="{ background: color }"
                />
            </span>
            <span class="name">
                {{ preset.name }}
                <span
                    v-if="internals.theme.preset === preset.id && modified"
                    class="modified"
                >
                    Modified
                </span>
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { internals } from "@/theme/internals.ts";
import { getColorSwatch } from "@/theme/options.ts";
import type { TPreset } from "@/theme/presets.ts";
import { getPresetTheme, isPresetModified, PRESETS } from "@/theme/presets.ts";

const modified = computed(() => isPresetModified(internals.theme));

function getSwatches(preset: TPreset) {
    const theme = getPresetTheme(preset);

    return [
        theme.blackAsPrimary ? "#000000" : getColorSwatch(theme.colors.primary),
        getColorSwatch(theme.colors.secondary),
        getColorSwatch(theme.colors.neutral, 300)
    ];
}

function applyPreset(preset: TPreset) {
    internals.theme = getPresetTheme(preset);
}
</script>

<style scoped>
.presets {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: var(--length-xs);

    .preset {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--length-xs);
        padding: var(--length-s);
        border: 1px solid var(--color-background-2);
        border-radius: var(--length-radius-s);
        background: var(--color-background-dark);
        color: var(--color-content);
        font: inherit;
        cursor: pointer;

        &:hover {
            border-color: var(--color-content-liter);
        }

        &.active {
            border-color: var(--color-primary);
            background: var(--color-primary-litest);
        }

        .swatches {
            --swatch-size: var(--length-m);
            --swatch-overlap: var(--length-xxs);
            --swatch-gap: 2px;

            display: flex;

            .swatch {
                width: var(--swatch-size);
                height: var(--swatch-size);
                border-radius: 50%;

                &:not(:last-child) {
                    mask: radial-gradient(
                        circle at calc(var(--swatch-size) * 1.5 - var(--swatch-overlap)) 50%,
                        transparent calc(var(--swatch-size) / 2 + var(--swatch-gap)),
                        #000 calc(var(--swatch-size) / 2 + var(--swatch-gap) + 0.5px)
                    );
                }

                & + .swatch {
                    margin-left: calc(var(--swatch-overlap) * -1);
                }
            }
        }

        .name {
            display: flex;
            align-items: center;
            gap: var(--length-xxs);
            font-size: var(--font-size-s);

            .modified {
                font-size: var(--font-size-xxs);
                color: var(--color-content-liter);
            }
        }
    }
}
</style>
