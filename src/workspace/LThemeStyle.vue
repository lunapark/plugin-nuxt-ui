<template>
    <LCard>
        <LSettingRow
            description="Base corner radius of every component."
            title="Radius"
        >
            <LDropdown
                v-model="internals.theme.radius"
                :options="radiusOptions"
                small
            />
        </LSettingRow>
        <LSettingRow
            description="Icon set used inside components (chevrons, close buttons, loaders…)."
            title="Icons"
        >
            <LDropdown
                v-model="internals.theme.icons"
                :options="iconOptions"
                small
            />
        </LSettingRow>
        <LSettingRow
            description="Default size of components that accept one."
            title="Size"
        >
            <LSegmented
                v-model="internals.theme.size"
                :options="sizeOptions"
                small
            />
        </LSettingRow>
        <LSettingRow
            v-for="(group, id) in VARIANT_GROUPS"
            :key="id"
            :description="`Default variant of ${ group.label.toLowerCase() }.`"
            :title="group.label"
        >
            <LDropdown
                v-model="internals.theme.variants[id]"
                :options="getVariantOptions(group.variants)"
                small
            />
        </LSettingRow>
    </LCard>
</template>

<script setup lang="ts">
import type { TOptions } from "@luna-park/design";
import { LCard, LDropdown, LSegmented, LSettingRow } from "@luna-park/design";

import { ICON_PACKS } from "@/theme/icons.ts";
import { internals } from "@/theme/internals.ts";
import { RADIUSES, SIZES, VARIANT_GROUPS } from "@/theme/options.ts";

const radiusOptions = RADIUSES.map((radius) => ({ label: `${ radius }rem`, value: radius })) satisfies TOptions<number>;

const iconOptions = ICON_PACKS.map((pack) => ({ icon: { icon: pack.logo }, label: pack.label, value: pack.id })) satisfies TOptions;

const sizeOptions = SIZES.map((size) => ({ label: size.toUpperCase(), value: size })) satisfies TOptions;

function getVariantOptions(variants: ReadonlyArray<string>) {
    return variants.map((variant) => ({ label: variant.charAt(0).toUpperCase() + variant.slice(1), value: variant })) satisfies TOptions;
}
</script>
