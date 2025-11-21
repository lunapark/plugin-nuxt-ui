import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatMessages from "@nuxt/ui/components/ChatMessages.vue";

import { ChatMessageProps } from "@/components/chat/chatMessage.ts";
import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { UIMessage } from "@/lib/ai.ts";

const chatMessages = {
    component: ChatMessages,
    name: "Chat/ChatMessages",
    properties: {
        assistant: LogicUtil.pick(ChatMessageProps, ["variant", "icon", "avatar", "side", "actions"]),
        autoScroll: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display an auto scroll button." }),
        autoScrollIcon: LogicType.string({ description: "The icon displayed in the auto scroll button." }),
        compact: LogicType.boolean({ description: "Render the messages in a compact style." }),
        messages: LogicType.array(UIMessage, { description: "The messages to display." }),
        shouldAutoScroll: LogicType.boolean({ description: "Whether to automatically scroll to the bottom when a message is streaming." }),
        shouldScrollToBottom: LogicType.boolean({ description: "Whether to scroll to the bottom on mounted." }),
        spacingOffset: LogicType.number({ description: "The spacing offset for the last message in px." }),
        status: LogicType.string({ description: "The status of the chat.", enum: ["streaming", "submitted", "ready", "error"] }),
        user: LogicUtil.pick(ChatMessageProps, ["variant", "icon", "avatar", "side", "actions"])
    },
    slots: {
        actions: LogicType.void(),
        content: LogicType.object({ ...ChatMessageProps.properties, message: UIMessage }),
        default: LogicType.void(),
        indicator: LogicType.void(),
        leading: LogicType.object({ avatar: AvatarProps, message: UIMessage }),
        viewport: LogicType.void()
    }
} satisfies TComponent;

export default chatMessages;
export const ChatMessagesProps = LogicUtil.partial(LogicType.object(chatMessages.properties));
