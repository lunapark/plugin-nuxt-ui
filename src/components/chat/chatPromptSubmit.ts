import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatPromptSubmit from "@nuxt/ui/components/ChatPromptSubmit.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { color, variant } from "@/lib/variants.ts";

const chatPromptSubmit = {
    component: ChatPromptSubmit,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-prompt-submit"
    },
    emits: {
        reload: LogicType.function(),
        stop: LogicType.function()
    },
    name: "Chat/ChatPromptSubmit",
    properties: {
        ...ButtonProps.properties,
        errorColor: { ...color, default: "error", description: "The color of the button when the status is `error`." },
        errorIcon: LogicType.string({ description: "The icon displayed in the button when the status is `error`." }),
        errorVariant: LogicType.string({ description: "The variant of the button when the status is `error`." }),
        status: LogicType.string({ enum: ["submitted", "streaming", "ready", "error"] }),
        streamingColor: { ...color, default: "neutral", description: "The color of the button when the status is `streaming`." },
        streamingIcon: LogicType.string({ description: "The icon displayed in the button when the status is `streaming`." }),
        streamingVariant: { ...variant, default: "subtle", description: "The variant of the button when the status is `streaming`." },
        submittedColor: { ...color, default: "neutral", description: "The color of the button when the status is `submitted`." },
        submittedIcon: LogicType.string({ description: "The icon displayed in the button when the status is `submitted`." }),
        submittedVariant: { ...variant, default: "subtle", description: "The variant of the button when the status is `submitted`." }
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default chatPromptSubmit;
export const ChatPromptSubmitProps = LogicUtil.partial(LogicType.object(chatPromptSubmit.properties));
