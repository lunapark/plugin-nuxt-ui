import { LogicType, type TComponent } from "@luna-park/plugin";
import ChatTool from "@nuxt/ui/components/ChatTool.vue";

import { ChatShimmerProps } from "@/components/chat/chatShimmer.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { iconType } from "@/lib/icon.ts";

const chatTool = {
    build: {
        name: "UChatTool"
    },
    component: ChatTool,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-tool"
    },
    models: {
        open: LogicType.boolean()
    },
    name: "Chat/ChatTool",
    properties: {
        actions: LogicType.array(ButtonProps, { description: "Display a list of actions next to the trigger." }),
        chevron: LogicType.string({ default: "trailing", description: "The position of the chevron icon.", enum: ["leading", "trailing"] }),
        chevronIcon: iconType({ description: "The icon displayed as the chevron." }),
        defaultOpen: LogicType.boolean({ description: "Initial open state." }),
        disabled: LogicType.boolean({ description: "When true, prevents user interaction." }),
        icon: iconType({ description: "The icon displayed next to the trigger." }),
        loading: LogicType.boolean({ description: "Show a loading icon instead of the icon." }),
        loadingIcon: iconType({ description: "The icon when the `loading` prop is `true`." }),
        shimmer: ChatShimmerProps,
        streaming: LogicType.boolean({ description: "Whether the tool is currently running." }),
        suffix: LogicType.string({ description: "Text displayed after the main text, in a muted style." }),
        text: LogicType.string({ description: "The text of the trigger." }),
        unmountOnHide: LogicType.boolean({ description: "Unmount content when closed." }),
        variant: LogicType.string({ default: "inline", enum: ["inline", "card"] })
    },
    slots: {
        actions: LogicType.void(),
        default: LogicType.object({ open: LogicType.boolean() })
    }
} satisfies TComponent;

export default chatTool;
