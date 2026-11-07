<template>
    <div class="theme-preview">
        <div class="toolbar">
            <span class="title">Preview</span>
            <div class="controls">
                <LSegmented
                    v-model="zoom"
                    :options="zoomOptions"
                    small
                />
                <LSegmented
                    v-model="mode"
                    :options="modeOptions"
                    small
                />
            </div>
        </div>
        <div
            class="root"
            data-root
        >
            <LWrapper :mode="mode || undefined">
                <div
                    class="samples"
                    :style="{ zoom }"
                >
                    <div class="text">
                        <h3 class="text-lg font-semibold text-highlighted">
                            Build faster with Nuxt UI
                        </h3>
                        <p class="text-sm text-muted">
                            Every setting of the workspace applies here. Press <UKbd value="meta" /> <UKbd value="K" /> to search.
                        </p>
                    </div>

                    <div class="row">
                        <UButton
                            v-for="color in colors"
                            :key="color"
                            :color="color"
                            :label="color"
                        />
                    </div>

                    <div class="row">
                        <UButton
                            v-for="variant in variants"
                            :key="variant"
                            :label="variant"
                            :variant="variant"
                        />
                    </div>

                    <div class="column">
                        <UInput
                            v-model="search"
                            icon="i-lucide-search"
                            placeholder="Search…"
                        />
                        <USelect
                            v-model="plan"
                            :items="plans"
                        />
                        <UTextarea
                            placeholder="Write a message…"
                            :rows="2"
                        />
                    </div>

                    <UCard>
                        <div class="user">
                            <UAvatar alt="Marty McFly" />
                            <div class="name">
                                <span class="text-sm font-medium text-highlighted">Marty McFly</span>
                                <span class="text-xs text-muted">marty@hillvalley.com</span>
                            </div>
                            <UBadge
                                color="success"
                                label="Active"
                                variant="subtle"
                            />
                        </div>
                        <USeparator class="my-3" />
                        <div class="column">
                            <USwitch
                                v-model="notifications"
                                label="Email notifications"
                            />
                            <UCheckbox
                                v-model="terms"
                                label="Accept the terms"
                            />
                        </div>
                    </UCard>

                    <UAlert
                        close
                        color="warning"
                        description="Your trial ends in 3 days."
                        icon="i-lucide-triangle-alert"
                        title="Heads up"
                        variant="subtle"
                    />

                    <UTabs
                        :content="false"
                        :items="tabs"
                    />

                    <UProgress :model-value="60" />
                </div>
            </LWrapper>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TOptions } from "@luna-park/design";
import { LSegmented } from "@luna-park/design";
import { ref } from "vue";

import LWrapper from "@/LWrapper.vue";

const mode = ref<"" | "dark" | "light">("");

const zoom = ref(0.75);

const zoomOptions = [
    { label: "75%", value: 0.75 },
    { label: "100%", value: 1 }
] satisfies TOptions<number>;

const modeOptions = [
    { label: "Project", value: "" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" }
] satisfies TOptions;

const colors = ["primary", "secondary", "success", "info", "warning", "error", "neutral"] as const;
const variants = ["solid", "outline", "soft", "subtle", "ghost", "link"] as const;

const plans = ["Hobby", "Pro", "Enterprise"];
const tabs = [
    { icon: "i-lucide-user", label: "Account" },
    { icon: "i-lucide-lock", label: "Password" },
    { icon: "i-lucide-bell", label: "Alerts" }
];

const search = ref("");
const plan = ref("Pro");
const notifications = ref(true);
const terms = ref(false);
</script>

<style scoped>
.theme-preview {
    flex: 1 0 auto;
    width: 320px;
    display: flex;
    flex-direction: column;

    .toolbar {
        position: sticky;
        top: 0;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--length-xs);
        padding: var(--length-xs) var(--length-s);
        border-bottom: 1px solid var(--color-background-2);
        background: var(--color-background-dark);

        .title {
            font-size: var(--font-size-s);
            font-weight: 600;
            color: var(--color-content);
        }

        .controls {
            display: flex;
            gap: var(--length-xxs);
        }
    }

    .root {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;

        :deep([data-nuxt-body]) {
            flex: 1 0 auto;
        }
    }

    .samples {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .user {
        display: flex;
        align-items: center;
        gap: 12px;

        .name {
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            min-width: 0;
        }
    }
}
</style>
