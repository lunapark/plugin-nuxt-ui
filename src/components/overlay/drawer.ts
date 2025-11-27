import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Drawer from "@nuxt/ui/components/Drawer.vue";

const drawer = {
    component: Drawer,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/drawer"
    },
    name: "Overlay/Drawer",
    properties: {
        activeSnapPoint: LogicType.union([LogicType.string(), LogicType.number()]),
        closeThreshold: LogicType.number({ description: "Number between 0 and 1 that determines when the drawer should be closed." }),
        defaultOpen: LogicType.boolean({ description: "Opened by default, skips initial enter animation." }),
        description: LogicType.string(),
        direction: LogicType.string({ default: "bottom", enum: ["top", "bottom", "left", "right"] }),
        dismissible: LogicType.boolean({ description: "When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer." }),
        fixed: LogicType.boolean({ description: "When `true`, don't move the drawer upwards if there's space." }),
        handle: LogicType.boolean({ description: "Render a handle on the drawer." }),
        handleOnly: LogicType.boolean({ description: "When `true` only allows the drawer to be dragged by the handle." }),
        inset: LogicType.boolean({ description: "Whether to inset the drawer from the edges." }),
        modal: LogicType.boolean({ description: "When `false` it allows to interact with elements outside of the drawer without closing it." }),
        nested: LogicType.boolean({ description: "Whether the drawer is nested in another drawer." }),
        noBodyStyles: LogicType.boolean({ description: "When `true` the `body` doesn't get any styles assigned from Vaul" }),
        overlay: LogicType.boolean({ description: "Render an overlay behind the drawer." }),
        portal: LogicType.boolean({ description: "Render the drawer in a portal." }),
        preventScrollRestoration: LogicType.boolean(),
        scrollLockTimeout: LogicType.number({ description: "Duration for which the drawer is not draggable after scrolling content inside of the drawer." }),
        setBackgroundColorOnScale: LogicType.boolean({ description: "When `false` we don't change body's background color when the drawer is open." }),
        shouldScaleBackground: LogicType.boolean(),
        snapPoints: LogicType.array(LogicType.union([LogicType.string(), LogicType.number()]), { description: "Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up." }),
        title: LogicType.string()
    },
    slots: {
        body: LogicType.void(),
        content: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default drawer;
export const DrawerProps = LogicUtil.partial(LogicType.object(drawer.properties));
