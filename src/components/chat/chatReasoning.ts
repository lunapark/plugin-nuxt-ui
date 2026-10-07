import { LogicType, type TComponent } from "@luna-park/plugin";
import ChatReasoning from "@nuxt/ui/components/ChatReasoning.vue";

import { ChatShimmerProps } from "@/components/chat/chatShimmer.ts";
import { iconType } from "@/lib/icon.ts";

const chatReasoning = {
    build: {
        name: "UChatReasoning"
    },
    component: ChatReasoning,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-reasoning"
    },
    models: {
        open: LogicType.boolean()
    },
    name: "Chat/ChatReasoning",
    properties: {
        autoCloseDelay: LogicType.number({ default: 500, description: "Delay in milliseconds before auto-closing when streaming ends." }),
        chevron: LogicType.string({ default: "trailing", description: "The position of the chevron icon.", enum: ["leading", "trailing"] }),
        chevronIcon: iconType({ description: "The icon displayed as the chevron." }),
        defaultOpen: LogicType.boolean({ description: "Initial open state." }),
        disabled: LogicType.boolean({ description: "When true, prevents user interaction." }),
        duration: LogicType.number({ description: "The duration in seconds that the reasoning took." }),
        icon: iconType({ description: "The icon displayed next to the trigger." }),
        shimmer: ChatShimmerProps,
        streaming: LogicType.boolean({ description: "Whether the reasoning content is currently streaming." }),
        text: LogicType.string({ description: "The reasoning text content." }),
        unmountOnHide: LogicType.boolean({ description: "Unmount content when closed." })
    },
    slots: {
        default: LogicType.object({ open: LogicType.boolean() })
    }
} satisfies TComponent;

export default chatReasoning;
