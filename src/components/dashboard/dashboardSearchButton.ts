import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardSearchButton from "@nuxt/ui/components/DashboardSearchButton.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { KbdProps } from "@/components/element/kbd.ts";
import { TooltipProps } from "@/components/overlay/tooltip.ts";

const dashboardSearchButton = {
    component: DashboardSearchButton,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dashboard-search-button"
    },
    name: "Dashboard/DashboardSearchButton",
    properties: {
        ...ButtonProps.properties,
        collapsed: LogicType.boolean({ description: "Whether the button is collapsed." }),
        kbds: LogicType.array(LogicType.union([LogicType.string(), KbdProps]), { description: "The keyboard keys to display in the button." }),
        tooltip: LogicType.union([LogicType.boolean(), TooltipProps], { description: "Display a tooltip on the button when is collapsed." })
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default dashboardSearchButton;
export const DashboardSearchButtonProps = LogicUtil.partial(LogicType.object(dashboardSearchButton.properties));
