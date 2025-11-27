import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatMessage from "@nuxt/ui/components/ChatMessage.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { UIMessage } from "@/lib/ai.ts";
import { variant } from "@/lib/variants.ts";

const chatMessage = {
    component: ChatMessage,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-message"
    },
    name: "Chat/ChatMessage",
    properties: {
        ...UIMessage.properties,
        actions: LogicType.array(LogicType.union([ButtonProps]), { description: "Display a list of actions under the message." }),
        avatar: LogicType.union([AvatarProps, LogicType.object()], { description: "The avatar displayed in the message." }),
        compact: LogicType.boolean({ description: "Render the message in a compact style." }),
        content: LogicType.string({ description: "The content of the message." }),
        icon: LogicType.string({ description: "The icon displayed in the message." }),
        side: LogicType.string({ default: "left", description: "The side of the message.", enum: ["left", "right"] }),
        variant: { ...variant, default: "naked", description: "The variant of the message." }
    },
    slots: {
        actions: LogicType.void(),
        content: LogicType.void(),
        leading: LogicType.object({ avatar: AvatarProps })
    }
} satisfies TComponent;

export default chatMessage;
export const ChatMessageProps = LogicUtil.partial(LogicType.object(chatMessage.properties));
