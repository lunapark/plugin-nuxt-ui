import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import ChatPrompt from "@nuxt/ui/components/ChatPrompt.vue";

import { TextareaProps } from "@/components/form/textarea.ts";
import { color, variant } from "@/lib/variants.ts";

const chatPrompt = {
    build: {
        name: "UChatPrompt"
    },
    component: ChatPrompt,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-prompt"
    },
    emits: {
        close: LogicType.object({ event: LogicType.interface("Event") }),
        submit: LogicType.object({ event: LogicType.interface("Event") })
    },
    models: {
        modelValue: LogicType.string()
    },
    name: "Chat/ChatPrompt",
    properties: {
        ...LogicUtil.pick(TextareaProps, ["rows", "autofocus", "autofocusDelay", "autoresize", "autoresizeDelay", "maxrows", "icon", "avatar", "loading", "loadingIcon", "disabled"]).properties,
        color,
        error: LogicType.interface("Error"),
        placeholder: LogicType.string({ description: "The placeholder text for the textarea." }),
        submitOnEnter: LogicType.boolean({ description: "When `true`, `Enter` submits and `Shift+Enter` inserts a newline. When `false`, `Ctrl/Cmd+Enter` submits." }),
        variant: { ...variant, default: "outline" }
    },
    slots: {
        default: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default chatPrompt;
export const ChatPromptProps = LogicUtil.partial(LogicType.object(chatPrompt.properties));
