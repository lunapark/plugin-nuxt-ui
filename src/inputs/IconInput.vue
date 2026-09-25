<template>
    <LFloating>
        <LButton
            borderless
            class="button"
            left
            small
            :title="value"
            wide
        >
            <Icon
                v-if="value"
                class="preview"
                :icon="value"
            />
            <span
                class="name"
                :class="{placeholder: !value}"
            >{{ value || "Select icon..." }}</span>
        </LButton>
        <template #popper="{hide}">
            <div class="popper">
                <div class="search">
                    <LInput
                        v-model="query"
                        class="query"
                        focus
                        borderless
                        placeholder="Search icon..."
                        small
                        @enter="icons[0] && select(icons[0], hide)"
                    />
                    <LDropdown
                        v-model="library"
                        borderless
                        class="library"
                        :options="libraries"
                        small
                    />
                </div>
                <div
                    v-if="icons.length"
                    class="list"
                >
                    <button
                        v-for="icon in icons"
                        :key="icon"
                        class="item"
                        :class="{selected: icon === value}"
                        :title="icon"
                        type="button"
                        @click="select(icon, hide)"
                    >
                        <Icon :icon="icon" />
                    </button>
                </div>
                <div
                    v-else
                    class="empty"
                >
                    {{ emptyMessage }}
                </div>
            </div>
        </template>
    </LFloating>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { LButton, LDropdown, LFloating, LInput } from "@luna-park/design";
import { useLocalStorage, watchDebounced } from "@vueuse/core";
import { computed, ref } from "vue";

const value = defineModel<string>();

const libraries = [
    { id: "all", label: "All libraries" },
    { id: "lucide", label: "Lucide" },
    { id: "ph", label: "Phosphor" },
    { id: "ri", label: "Remix" },
    { id: "tabler", label: "Tabler" },
    { id: "heroicons", label: "Heroicons" },
    { id: "material-symbols", label: "Material Symbols" },
    { id: "mdi", label: "Material Design" },
    { id: "fa7-solid,fa7-regular,fa7-brands", label: "Font Awesome" },
    { id: "simple-icons", label: "Simple Icons" },
    { id: "logos", label: "Logos" }
];

const query = ref("");
const library = useLocalStorage("nuxt-ui-icon-library", "lucide");
const results = ref<Array<string>>([]);
const loading = ref(false);

let controller: AbortController | undefined;

const exactIcon = computed(() => /^[a-z0-9-]+:[a-z0-9-]+$/.test(query.value.trim()) ? query.value.trim() : undefined);

const icons = computed(() => {
    if (!exactIcon.value) {
        return results.value;
    }

    return [exactIcon.value, ...results.value.filter((icon) => icon !== exactIcon.value)];
});

const emptyMessage = computed(() => {
    if (!query.value.trim()) {
        return "Type to search Iconify icons";
    }

    return loading.value ? "Searching..." : "No icon found";
});

watchDebounced([query, library], search, { debounce: 250 });

async function search() {
    controller?.abort();

    const text = query.value.trim();

    if (!text) {
        results.value = [];
        return;
    }

    controller = new AbortController();
    loading.value = true;

    try {
        const params = new URLSearchParams({ limit: "96", query: text });

        if (library.value !== "all") {
            params.set("prefixes", library.value);
        }

        const response = await fetch(`https://api.iconify.design/search?${ params }`, { signal: controller.signal });
        const { icons } = await response.json() as { icons: Array<string>; };
        results.value = icons;
        loading.value = false;
    }
    catch (error) {
        if ((error as Error).name !== "AbortError") {
            results.value = [];
            loading.value = false;
        }
    }
}

function select(icon: string, hide: () => void) {
    value.value = icon;
    hide();
}
</script>

<style scoped>
.button {
    gap: var(--length-xxs);
    min-width: 0;

    .preview {
        flex-shrink: 0;
        font-size: var(--font-icon-s);
    }

    .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.placeholder {
            color: var(--color-content-litest);
        }
    }
}

.popper {
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);
    width: 280px;
    padding: var(--length-s);
    color: var(--color-content);

    .search {
        display: flex;
        gap: var(--length-xxs);

        .query {
            flex: 1 1 0;
        }

        .library {
            flex: 1 1 0;
        }
    }

    .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(28px, 1fr));
        gap: var(--length-xxxs);
        max-height: 240px;
        overflow: auto;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        padding: 0;
        border: 2px solid transparent;
        border-radius: var(--length-radius-m);
        background: none;
        color: inherit;
        font-size: var(--font-icon-m);
        cursor: pointer;

        &:hover {
            background-color: var(--color-primary-dark);
        }

        &:focus-visible {
            outline: none;
            border: 2px dashed var(--color-primary);
        }

        &.selected {
            border-color: var(--color-primary);
        }
    }

    .empty {
        padding: var(--length-xs);
        text-align: center;
        font-size: var(--font-size-s);
        color: var(--color-content-litest);
    }
}
</style>
