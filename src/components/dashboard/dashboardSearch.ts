import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardSearch from "@nuxt/ui/components/DashboardSearch.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { CommandPaletteGroup, CommandPaletteItem } from "@/components/navigation/commandPalette.ts";
import { ModalProps } from "@/components/overlay/modal.ts";
import { iconType } from "@/lib/icon.ts";

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
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button in the input." }),
        closeIcon: iconType({ description: "The icon displayed in the close button." }),
        colorMode: LogicType.boolean({ description: "When `true`, the theme command will be added to the groups." }),
        groups: { ...CommandPaletteGroup, description: "Groups of commands." },
        icon: iconType({ description: "The icon displayed in the input." }),
        loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed." }),
        loadingIcon: iconType({ description: "The icon when the `loading` prop is `true`." }),
        placeholder: LogicType.string({ description: "The placeholder text for the input." }),
        shortcut: LogicType.string({ description: "Keyboard shortcut to open the search." })
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
