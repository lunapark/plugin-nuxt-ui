import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DashboardGroup from "@nuxt/ui/components/DashboardGroup.vue";

const dashboardGroup = {
    component: DashboardGroup,
    name: "Dashboard/DashboardGroup",
    properties: {
        persistent: LogicType.boolean({ description: "Whether to persist the size in the storage." }),
        storage: LogicType.string({ default: "cookie", description: "The storage to use for the size.", enum: ["cookie", "local"] }),
        storageKey: LogicType.string({ default: "dashboard", description: "Unique id used to auto-save size." }),
        unit: LogicType.string({ default: "%", description: "The unit to use for size values.", enum: ["%", "rem", "px"] })
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default dashboardGroup;
export const DashboardGroupProps = LogicUtil.partial(LogicType.object(dashboardGroup.properties));
