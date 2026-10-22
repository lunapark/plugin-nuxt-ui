import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import DashboardSearch from "@nuxt/ui/components/DashboardSearch.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { CommandPaletteGroup, CommandPaletteItem } from "@/components/navigation/commandPalette.ts";
import { ModalProps } from "@/components/overlay/modal.ts";
import { iconType } from "@/lib/icon.ts";
import { size } from "@/lib/variants.ts";

const dashboardSearch = {
    build: {
        name: "UDashboardSearch"
    },
    component: DashboardSearch,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dashboard-search"
    },
    models: {
        open: LogicType.boolean(),
        searchTerm: LogicType.string()
    },
    name: "Dashboard/DashboardSearch",
    properties: {
        ...LogicUtil.pick(ModalProps, ["title", "description", "overlay", "transition", "content", "dismissible", "fullscreen", "modal", "portal"]).properties,
        autofocus: LogicType.boolean({ description: "Automatically focus the input when component is mounted." }),
        back: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a button to navigate back in history." }),
        backIcon: iconType({ description: "The icon displayed in the back button." }),
        childrenIcon: iconType({ description: "The icon displayed when an item has children." }),
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button in the input." }),
        closeIcon: iconType({ description: "The icon displayed in the close button." }),
        colorMode: LogicType.boolean({ description: "When `true`, the theme command will be added to the groups." }),
        descriptionKey: LogicType.string({ default: "description", description: "When `items` is an array of objects, select the field to use as the description." }),
        disabled: LogicType.boolean(),
        groups: { ...CommandPaletteGroup, description: "Groups of commands." },
        highlightOnHover: LogicType.boolean({ description: "When `true`, hover over item will trigger highlight." }),
        icon: iconType({ description: "The icon displayed in the input." }),
        labelKey: LogicType.string({ default: "label", description: "When `items` is an array of objects, select the field to use as the label." }),
        loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed." }),
        loadingIcon: iconType({ description: "The icon when the `loading` prop is `true`." }),
        loop: LogicType.boolean({ description: "Whether keyboard navigation should loop around." }),
        placeholder: LogicType.string({ description: "The placeholder text for the input." }),
        preserveGroupOrder: LogicType.boolean({ description: "Whether to preserve the order of groups." }),
        searchDelay: LogicType.number({ description: "The delay in milliseconds before the search is triggered." }),
        selectedIcon: iconType({ description: "The icon displayed when an item is selected." }),
        shortcut: LogicType.string({ description: "Keyboard shortcut to open the search." }),
        size,
        trailingIcon: iconType({ description: "The icon displayed on the right side of the input." }),
        unmountOnHide: LogicType.boolean({ description: "When `true`, the element will be unmounted on closed state." })
    },
    slots: {
        back: LogicType.void(),
        close: LogicType.object({ close: LogicType.function() }),
        content: LogicType.void(),
        empty: LogicType.void(),
        footer: LogicType.void(),
        item: LogicType.object({ index: LogicType.number(), item: CommandPaletteItem })
    }
} satisfies TComponent;

export default dashboardSearch;
export const DashboardSearchProps = LogicUtil.partial(LogicType.object(dashboardSearch.properties));
